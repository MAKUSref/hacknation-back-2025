import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { UserController } from "../controller/user.controller";
import { LegislationProjectController } from "../controller/legislationProject.controller";


const router = Router();

router.get("/", errorHandler(UserController.getAllUsers));
// router.get("/:id", errorHandler(UserController.getUserById));
router.post("/", errorHandler(UserController.createUser));
router.put("/:id", errorHandler(UserController.updateUser));
router.delete("/:id", errorHandler(UserController.deleteUser));

router.post("/register", errorHandler(UserController.registerUserIfNotExists));

// Watched projects routes
router.get("/watch/me", errorHandler(UserController.getWatchedProjects));
router.post("/watch/me", errorHandler(UserController.addToWatch));
router.delete("/watch/me", errorHandler(UserController.removeFromWatched));

export default router;