import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  projectId: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  parentCommentId?: mongoose.Types.ObjectId;
  isEdited: boolean;
}

const commentSchema = new Schema<IComment>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: "LegislationProject",
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 2000,
    },
    parentCommentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    isEdited: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for fetching comments by project
commentSchema.index({ projectId: 1, createdAt: -1 });

// Index for fetching replies to a comment
commentSchema.index({ parentCommentId: 1, createdAt: 1 });

const Comment = mongoose.model<IComment>("Comment", commentSchema);

export default Comment;
