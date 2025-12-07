import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { AIController } from "../controller/AI.controller";

const router = Router();

router.post("/", errorHandler(AIController.generateText));

export default router;
