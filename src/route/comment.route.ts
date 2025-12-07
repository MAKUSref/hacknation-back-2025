import { Router } from "express";
import { errorHandler } from "../exception/errorHandler";
import { CommentController } from "../controller/comment.controller";

const router = Router();

// Get all comments for a project
router.get("/project/:projectId", errorHandler(CommentController.getByProjectId));

// Get replies to a comment
router.get("/:commentId/replies", errorHandler(CommentController.getReplies));

// Get single comment
router.get("/:id", errorHandler(CommentController.getById));

// Create a new comment
router.post("/", errorHandler(CommentController.create));

// Update a comment
router.put("/:id", errorHandler(CommentController.update));

// Delete a comment
router.delete("/:id", errorHandler(CommentController.delete));

export default router;
