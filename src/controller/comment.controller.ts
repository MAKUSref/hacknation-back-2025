import { Request, Response } from "express";
import Comment from "../model/Comment";
import { AppError } from "../exception/AppError";
import { HTTP_STATUS_CODE } from "../exception/http";

export class CommentController {
  /**
   * Get all comments for a specific legislation project
   */
  static async getByProjectId(req: Request, res: Response) {
    const { projectId } = req.params;

    const comments = await Comment.find({ projectId, parentCommentId: null })
      .populate("userId", "displayName email")
      .sort({ createdAt: -1 })
      .lean();

    res.status(HTTP_STATUS_CODE.OK).json(comments);
  }

  /**
   * Get replies to a specific comment
   */
  static async getReplies(req: Request, res: Response) {
    const { commentId } = req.params;

    const replies = await Comment.find({ parentCommentId: commentId })
      .populate("userId", "displayName email")
      .sort({ createdAt: 1 })
      .lean();

    res.status(HTTP_STATUS_CODE.OK).json(replies);
  }

  /**
   * Create a new comment
   */
  static async create(req: Request, res: Response) {
    const { projectId, userId, content, parentCommentId } = req.body;

    if (!projectId || !userId || !content) {
      throw new AppError(
        "Missing required fields: projectId, userId, content",
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }

    const comment = new Comment({
      projectId,
      userId,
      content,
      parentCommentId: parentCommentId || null,
    });

    await comment.save();
    await comment.populate("userId", "displayName email");

    res.status(HTTP_STATUS_CODE.CREATED).json(comment);
  }

  /**
   * Update an existing comment
   */
  static async update(req: Request, res: Response) {
    const { id } = req.params;
    const { content, userId } = req.body;

    if (!content) {
      throw new AppError("Content is required", HTTP_STATUS_CODE.BAD_REQUEST);
    }

    const comment = await Comment.findById(id);

    if (!comment) {
      throw new AppError("Comment not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    // Verify ownership
    if (comment.userId.toString() !== userId) {
      throw new AppError(
        "Unauthorized to edit this comment",
        HTTP_STATUS_CODE.FORBIDDEN
      );
    }

    comment.content = content;
    comment.isEdited = true;
    await comment.save();
    await comment.populate("userId", "displayName email");

    res.status(HTTP_STATUS_CODE.OK).json(comment);
  }

  /**
   * Delete a comment
   */
  static async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { userId } = req.body;

    const comment = await Comment.findById(id);

    if (!comment) {
      throw new AppError("Comment not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    // Verify ownership
    if (comment.userId.toString() !== userId) {
      throw new AppError(
        "Unauthorized to delete this comment",
        HTTP_STATUS_CODE.FORBIDDEN
      );
    }

    // Delete the comment and all its replies
    await Comment.deleteMany({
      $or: [{ _id: id }, { parentCommentId: id }],
    });

    res.status(HTTP_STATUS_CODE.OK).json({ message: "Comment deleted successfully" });
  }

  /**
   * Get comment by ID
   */
  static async getById(req: Request, res: Response) {
    const { id } = req.params;

    const comment = await Comment.findById(id)
      .populate("userId", "displayName email")
      .lean();

    if (!comment) {
      throw new AppError("Comment not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    res.status(HTTP_STATUS_CODE.OK).json(comment);
  }
}
