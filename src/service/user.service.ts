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

  static async getWatchedProjects(userId: string): Promise<IUser> {
    const user = await User.findById(userId).populate("watchedProjects");
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }
    return user;
  }

  static async addToWatch(userId: string, projectId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    if (user.watchedProjects.includes(projectId as any)) {
      throw new AppError(
        "Project already in watch list",
        HTTP_STATUS_CODE.BAD_REQUEST
      );
    }

    user.watchedProjects.push(projectId as any);
    await user.save();
    return user;
  }

  static async removeFromWatched(userId: string, projectId: string): Promise<IUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new AppError("User not found", HTTP_STATUS_CODE.NOT_FOUND);
    }

    user.watchedProjects = user.watchedProjects.filter(
      (id) => id.toString() !== projectId
    );
    await user.save();
    return user;
  }

  static async registerUserIfNotExists(displayName: string, email: string): Promise<IUser> {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({displayName: displayName || email, email});
      await user.save();
    } 
    return user;
  }
}
