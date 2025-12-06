import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  displayName: string;
  email: string;
}

const userSchema = new Schema<IUser>({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
