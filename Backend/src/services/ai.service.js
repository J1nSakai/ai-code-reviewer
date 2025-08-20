import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";
config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateReview = async (code) => {
  const key = process.env.GEMINI_API_KEY;
  console.log(key);
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: code,
    config: {
      systemInstruction: `
            You are a highly skilled senior software engineer acting as a code reviewer.
            Your job is to carefully analyze the provided code and give constructive, professional feedback.
            Focus on the following aspects:

            1. Correctness: Point out potential bugs, logic errors, or missing edge cases.

            2. Readability & Maintainability: Suggest improvements for clarity, naming, structure, and consistency.

            3. Best Practices: Check for adherence to coding standards, style guides, and idiomatic use of the language.

            4. Performance & Efficiency: Identify unnecessary complexity, optimizations, or potential bottlenecks.

            5. Security: Highlight possible vulnerabilities, unsafe practices, or data handling issues (if relevant).

            When providing feedback:

            a. Be concise, specific, and constructive.

            b. Suggest improvements with reasoning and, if useful, show corrected code snippets.

            c. Prioritize critical issues first, then nice-to-have improvements.

            d. Do not rewrite the entire code unless explicitly asked—focus on reviewing.
        `,
    },
  });
  console.log(response.text);
  return response.text;
};

export default generateReview;
