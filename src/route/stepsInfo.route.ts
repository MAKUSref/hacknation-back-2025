import { errorHandler } from "../exception/errorHandler";
import { LegislationProjectController } from "../controller/legislationProject.controller";
import { Router } from "express";

const router = Router();


// Zarządzanie krokami - step info routes (must come before generic :id routes)
router.get("/", errorHandler(LegislationProjectController.getAllStepInfo));
router.post("/", errorHandler(LegislationProjectController.addStepInfo));
router.post("/bulk", errorHandler(LegislationProjectController.addBulkStepInfo));
router.get("/:id", errorHandler(LegislationProjectController.getStepInfoByIndex));
router.delete("/", errorHandler(LegislationProjectController.removeAllStepInfo));

export default router;