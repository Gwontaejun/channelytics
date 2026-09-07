import pytest

from app.schemas.youtube import Comment
from app.services.comment_processing import (
    create_batches,
    mask_personal_information,
    prepare_analysis_comments,
    preprocess_comments,
)


def test_preprocess_removes_empty_and_duplicate_comments() -> None:
    comments = [_comment("first", "  Great\n video!  "), _comment("second", "Great video!"), _comment("third", " \t "), _comment("fourth", "Keep it up")]

    processed = preprocess_comments(comments)

    assert [(comment.id, comment.text) for comment in processed] == [("first", "Great video!"), ("fourth", "Keep it up")]


def test_create_batches_keeps_only_gemini_input_fields() -> None:
    comments = prepare_analysis_comments(
        [_comment(str(index), f"comment {index}") for index in range(5)]
    )
    batches = create_batches(comments, batch_size=2)

    assert [[item.model_dump() for item in batch] for batch in batches] == [
        [{"id": "c1", "text": "comment 0"}, {"id": "c2", "text": "comment 1"}],
        [{"id": "c3", "text": "comment 2"}, {"id": "c4", "text": "comment 3"}],
        [{"id": "c5", "text": "comment 4"}],
    ]


def test_create_batches_rejects_invalid_batch_size() -> None:
    with pytest.raises(ValueError, match="at least 1"):
        create_batches([prepare_analysis_comments([_comment("1", "text")])[0]], batch_size=0)


def test_masks_common_personal_information_before_ai_input() -> None:
    text = "연락은 test@example.com 또는 010-1234-5678, https://example.com/@me"

    masked = mask_personal_information(text)

    assert masked == "연락은 [이메일] 또는 [전화번호], [링크]"


def test_prepare_analysis_comments_uses_temporary_ids_and_masks_text() -> None:
    comments = [
        _comment("youtube-id-1", "문의: test@example.com"),
        _comment("youtube-id-2", "다음 편도 기대할게요 010-1234-5678"),
    ]

    prepared = prepare_analysis_comments(comments)

    assert [item.model_dump() for item in prepared] == [
        {"id": "c1", "text": "문의: [이메일]"},
        {"id": "c2", "text": "다음 편도 기대할게요 [전화번호]"},
    ]
    assert all("youtube-id" not in item.id for item in prepared)


def test_prepare_analysis_comments_skips_comments_containing_only_masked_data() -> None:
    prepared = prepare_analysis_comments([_comment("youtube-id", "test@example.com")])

    assert prepared == []


def _comment(comment_id: str, text: str) -> Comment:
    return Comment(
        id=comment_id,
        video_id="video1",
        video_title="Video",
        text=text,
        like_count=0,
        published_at="2026-01-01T00:00:00Z",
    )
