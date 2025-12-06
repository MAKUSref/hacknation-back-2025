import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  displayName: string;
  email: string;
  watchedProjects: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  watchedProjects: [{ type: Schema.Types.ObjectId, ref: "LegislationProject", default: [] }],
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
