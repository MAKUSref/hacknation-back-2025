import User, { IUser } from "../model/User";
import { AppError } from "../exception/AppError";
import { HTTP_STATUS_CODE } from "../exception/http";

export class UserService {
  static async getAllUsers(): Promise<IUser[]> {
    const users = await User.find();
    return users;
  }

  static async getUserById(id: string): Promise<IUser> {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    return user;
  }

  static async createUser(displayName: string, email: string): Promise<IUser> {
    const user = new User({ displayName, email });
    await user.save();
    return user;
  }

  static async updateUser(
    id: string,
    displayName?: string,
    email?: string
  ): Promise<IUser> {
    const user = await User.findById(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    if (displayName) user.displayName = displayName;
    if (email) user.email = email;

    await user.save();
    return user;
  }

  static async deleteUser(id: string): Promise<void> {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
  }
}
