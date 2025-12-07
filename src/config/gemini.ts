import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("Brak klucza GEMINI_API_KEY w pliku .env");
}

export const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
