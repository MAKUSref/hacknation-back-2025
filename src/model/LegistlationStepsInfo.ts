import mongoose, { Schema, Document } from "mongoose";
import { LegislativeProcessStep, StepPlace } from "./LegislationInterfaces";

export interface ILegislationStepsInfo {
    index: LegislativeProcessStep;
    name: string;
    place: StepPlace;
    description: string;
}


const legislationStepsInfoSchema = new Schema<ILegislationStepsInfo>(
  {
    index: { type: Number, enum: Object.values(LegislativeProcessStep), required: true },
    name: { type: String, required: true },
    place: { type: String, enum: Object.values(StepPlace), required: true, default: StepPlace.SEJM },
    description: { type: String, required: true },
    }
);

export const LegislationStepsInfo = mongoose.model<ILegislationStepsInfo>(
  "LegislationStepsInfo",
  legislationStepsInfoSchema
);