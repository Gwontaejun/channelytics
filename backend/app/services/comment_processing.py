import re
import unicodedata
from collections.abc import Iterable

from app.schemas.youtube import AnalysisComment, Comment


_MASKING_PATTERNS: tuple[tuple[re.Pattern[str], str], ...] = (
    (
        re.compile(r"(?<![\w.+-])[\w.+-]+@[\w-]+(?:\.[\w-]+)+", re.IGNORECASE),
        "[이메일]",
    ),
    (
        re.compile(
            r"(?<!\d)(?:\+?82[-.\s]?)?(?:0?1[016789]|0?2|0?[3-6][1-5])[-.\s]?\d{3,4}[-.\s]?\d{4}(?!\d)"
        ),
        "[전화번호]",
    ),
    (re.compile(r"(?<!\d)\d{6}[-\s]?[1-8]\d{6}(?!\d)"), "[고유식별정보]"),
    (
        re.compile(r"(?<!\d)(?:\d[ -]?){13,19}(?!\d)"),
        "[금융정보]",
    ),
    (
        re.compile(
            r"(?:계좌|입금|송금|은행)\s*(?:번호)?\s*[:：-]?\s*(?:\d[-\s]?){8,16}",
            re.IGNORECASE,
        ),
        "[금융정보]",
    ),
    (
        re.compile(r"\b(?:https?://|www\.)\S+", re.IGNORECASE),
        "[링크]",
    ),
    (
        re.compile(r"(?<![\w@])@[A-Za-z0-9_.-]{2,32}\b"),
        "[계정]",
    ),
    (
        re.compile(
            r"(?:서울|부산|대구|인천|광주|대전|울산|세종|경기|강원|충북|충남|전북|전남|경북|경남|제주)"
            r"(?:특별시|광역시|특별자치시|특별자치도|도)?\s+"
            r"[가-힣0-9·-]+(?:시|군|구)\s+[가-힣0-9·-]+(?:로|길|동|읍|면)\s*\d+(?:-\d+)?",
        ),
        "[주소]",
    ),
)


def mask_personal_information(text: str) -> str:
    """Best-effort deterministic masking applied before any AI API request."""
    masked = unicodedata.normalize("NFKC", text)
    for pattern, replacement in _MASKING_PATTERNS:
        masked = pattern.sub(replacement, masked)
    return " ".join(masked.split())


def preprocess_comments(comments: Iterable[Comment]) -> list[Comment]:
    """Remove empty and duplicate comments while normalizing whitespace."""
    processed: list[Comment] = []
    seen_texts: set[str] = set()

    for comment in comments:
        text = " ".join(comment.text.split())
        if not text or text in seen_texts:
            continue
        seen_texts.add(text)
        processed.append(comment.model_copy(update={"text": text}))

    return processed


def prepare_analysis_comments(comments: Iterable[Comment]) -> list[AnalysisComment]:
    """Remove YouTube identifiers and prepare masked, request-scoped AI inputs."""
    prepared: list[AnalysisComment] = []
    for index, comment in enumerate(comments, start=1):
        masked_text = mask_personal_information(comment.text)
        if not masked_text or not re.sub(r"\[[^]]+\]", "", masked_text).strip():
            continue
        prepared.append(AnalysisComment(id=f"c{index}", text=masked_text))
    return prepared


def create_batches(
    comments: Iterable[AnalysisComment], batch_size: int = 200
) -> list[list[AnalysisComment]]:
    if batch_size < 1:
        raise ValueError("batch_size must be at least 1")

    batchable_comments = list(comments)
    return [
        batchable_comments[index:index + batch_size]
        for index in range(0, len(batchable_comments), batch_size)
    ]
