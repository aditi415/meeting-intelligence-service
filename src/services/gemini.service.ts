import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export const analyzeTranscript = async (
  transcript: string
) => {

  const prompt = `
You are a meeting intelligence assistant.

Analyze the transcript.

Rules:
- Use ONLY information from transcript.
- Do NOT invent information.
- Do NOT invent attendees.
- Do NOT invent decisions.
- Every insight must include citation timestamps.

Return JSON:

{
 "summary": [],
 "actionItems": [],
 "decisions": [],
 "followUps": []
}

Transcript:
${transcript}
`;

  const result = await model.generateContent(
    prompt
  );

  return result.response.text();
};