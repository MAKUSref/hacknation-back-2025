import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { UserController } from "../controller/user.controller";
import { LegislationProjectController } from "../controller/legislationProject.controller";


const router = Router();
// Watched projects routes
router.get("/watch", errorHandler(UserController.getWatchedProjects));
router.post("/watch", errorHandler(UserController.addToWatch));
router.delete("/watch", errorHandler(UserController.removeFromWatched));

router.get("/me/", errorHandler(UserController.getAllUsers));
router.get("/me/:id", errorHandler(UserController.getUserById));
router.post("/me", errorHandler(UserController.createUser));
router.put("/me/:id", errorHandler(UserController.updateUser));
router.delete("/me/:id", errorHandler(UserController.deleteUser));


export default router;