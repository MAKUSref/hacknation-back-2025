
import { genAI } from "../config/gemini";
import LegislationProject from "../model/LegislationProject";

export class AIService {
  static async promptAIChat(userQuestion: string, legistlationProjectId: string) {

    const legislationProject = await LegislationProject.findById(legistlationProjectId);
    if (!legislationProject || !legislationProject.text) {
      throw new Error("Legislation project not found");
    }

    const prompt = `Jesteś asystentem AI specjalizującym się w procesie legislacyjnym. Udziel jak najkrótszej odpowiedzi na pytanie dotyczące danego aktu prawnego. Odpowiadaj jasno i zwięźle.
    Treść aktu prawnego: ${legislationProject.text}
    Pytanie użytkownika: ${userQuestion}
    `;
    console.log("AI Prompt:", prompt);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    console.log("Model initialized");
    const result = await model.generateContent(prompt);
    console.log("AI Response received");
    return result.response.text();
  }
}