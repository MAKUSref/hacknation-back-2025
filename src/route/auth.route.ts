import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { AuthController } from "../controller/auth.controller";
import session from "express-session";
import { config } from "../config/config";

const router = Router();

router.post("/login", errorHandler(AuthController.login));

export default router;
