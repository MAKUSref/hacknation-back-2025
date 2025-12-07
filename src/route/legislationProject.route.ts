import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { LegislationProjectController } from "../controller/legislationProject.controller";

const router = Router();

router.get("/", errorHandler(LegislationProjectController.getAll));
router.get("/:id", errorHandler(LegislationProjectController.getById));
router.post("/", errorHandler(LegislationProjectController.create));
router.post("/bulk", errorHandler(LegislationProjectController.createMany));
router.put("/:id", errorHandler(LegislationProjectController.update));
router.delete("/", errorHandler(LegislationProjectController.removeAll));
router.delete("/:id", errorHandler(LegislationProjectController.remove));

// Zarządzanie krokami
router.post("/:id/steps", errorHandler(LegislationProjectController.addStep));
router.patch(
  "/:id/steps/:stepId/active",
  errorHandler(LegislationProjectController.setStepActive)
);

router.get("/steps-info", errorHandler(LegislationProjectController.getAllStepInfo));
router.get("/steps-info/:id", errorHandler(LegislationProjectController.getStepInfoById));
router.post("/steps-info", errorHandler(LegislationProjectController.addStepInfo));
router.post("/steps-info/bulk", errorHandler(LegislationProjectController.addBulkStepInfo));

export default router;
