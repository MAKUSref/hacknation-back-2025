import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { UserController } from "../controller/user.controller";

const router = Router();

router.get("/", errorHandler(UserController.getAllUsers));
router.get("/:id", errorHandler(UserController.getUserById));
router.post("/", errorHandler(UserController.createUser));
router.put("/:id", errorHandler(UserController.updateUser));
router.delete("/:id", errorHandler(UserController.deleteUser));

export default router;