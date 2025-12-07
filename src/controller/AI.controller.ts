import { Request, Response } from "express";
import { genAI } from "../config/gemini";
import { AIService } from "../service/AI.service";


export class AIController {
  static async generateText(req: Request, res: Response): Promise<string> {
    try {

        const { prompt, legislationProjectId } = req.body;

        const response = await AIService.promptAIChat(prompt, legislationProjectId);
        console.log(response);
        
        res.json({ text: response });
      return response;
    } catch (error) {
        console.log("Error generating text:", error);
      throw new Error("Failed to generate text");
    }
  }
}