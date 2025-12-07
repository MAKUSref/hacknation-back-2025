import mongoose, { Schema, Document } from "mongoose";
import {
  ILegislationStep,
  LegislativeProcessStep,
  ILegislationProject,
  LegislationTag,
  Applicant,
} from "./LegislationInterfaces";

const LegislationStepSchema = new Schema<ILegislationStep>(
  {
    type: { type: Number, enum: Object.values(LegislativeProcessStep), required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    isActive: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    isOmitted: { type: Boolean, default: false },
  },
  { _id: true }
);

const LegislationProjectSchema = new Schema<ILegislationProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    steps: { type: [LegislationStepSchema], default: [] },
    tags: {
      type: [{ type: String, enum: Object.values(LegislationTag) }],
      default: [],
    },
    applicant: {
      type: String,
      enum: Object.values(Applicant),
      required: true,
    },
  },
  { timestamps: true }
);

export const LegislationProject = mongoose.model<ILegislationProject>(
  "LegislationProject",
  LegislationProjectSchema
);

export default LegislationProject;
