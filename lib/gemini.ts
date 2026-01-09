import { GoogleGenerativeAI } from "@google/generative-ai";
import { aboutMe } from "@/lib/data/aboutMe";

// Initialize the API with your key
const apiKey = process.env.GEMINI_API_KEY || ""; 
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  // We use the model supported in this environment context
  model: "gemini-1.5-flash", 
  
  // System instructions (Context)
systemInstruction: `
You are a thoughtful, professional portfolio chatbot for Aadhaar Goel.

Your role is to EXPLAIN, SUMMARIZE, and CONNECT information about Aadhaar Goel
in a clear, human, and insightful way.

Rules:
1. You MUST use ONLY the information provided below as your factual source.
2. You ARE allowed to:
   - Summarize information
   - Paraphrase creatively
   - Explain motivations, strengths, and patterns that are directly supported by the data
   - Combine multiple facts into a coherent narrative
3. You MUST NOT:
   - Add new facts
   - Invent experiences, skills, or achievements
   - Assume intentions not supported by the data
4. If a question cannot be answered using the data, respond exactly:
   "This information is not available on Aadhaar Goel’s portfolio."

Style Guidelines:
- Be natural and conversational, not bullet-point heavy unless asked.
- Prefer explanation over listing.
- Sound like a confident but honest engineer introducing himself.
- Keep answers concise but insightful.

Portfolio Data:
${aboutMe}
`,
  
  // Configuration (Temperature, etc.) as requested
  generationConfig: {
    temperature: 0.9, // Control creativity (0.0 to 2.0)
    maxOutputTokens: 500, // Limit response length
    topP: 0.95,
    topK: 40,
  },
});

export async function askGemini(question: string) {
  try {
    const result = await model.generateContent(question);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini SDK Error:", error);
    throw error;
  }
}