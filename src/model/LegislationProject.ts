import mongoose, { Schema, Document } from "mongoose";
import { LegislativeProcessStep } from "../../legistlationProject";

export interface ILegislationStep {
  _id?: string;
  projectId?: string;
  type: LegislativeProcessStep;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
}

export interface ILegislationProject extends Document {
  title: string;
  description: string;
  steps: ILegislationStep[];
  createdAt: Date;
  updatedAt: Date;
}

const LegislationStepSchema = new Schema<ILegislationStep>(
  {
    projectId: { type: String },
    type: {
      type: String,
      enum: Object.values(LegislativeProcessStep),
      required: true,
    },
    isActive: { type: Boolean, default: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
  },
  { _id: true }
);

const LegislationProjectSchema = new Schema<ILegislationProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    steps: { type: [LegislationStepSchema], default: [] },
  },
  { timestamps: true }
);

export const LegislationProject = mongoose.model<ILegislationProject>(
  "LegislationProject",
  LegislationProjectSchema
);

export default LegislationProject;
