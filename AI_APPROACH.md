# AI Approach

## Prompt Design

The transcript is provided to Gemini with strict instructions to generate:

* Summary
* Decisions
* Action Items
* Follow-up Suggestions

The model is instructed to use only information present in the transcript.

## Citation Strategy

Every generated insight must include transcript timestamps.

Example:

{
"task": "Prepare release notes",
"citations": [
{
"timestamp": "00:20"
}
]
}

## Hallucination Prevention

Prompt instructions explicitly prohibit:

* Inventing attendees
* Inventing action items
* Inventing decisions
* Adding unsupported facts

## Output Validation

Generated JSON is validated before saving to the database.

## Known Limitations

Complex transcripts may occasionally require manual review.
