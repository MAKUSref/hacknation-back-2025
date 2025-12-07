import { Request, Response } from "express";
import { UserService } from "../service/user.service";
import { AuthService } from "../service/auth.service";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users[0]);
  }

  static async getUserById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    res.json(user);
  }

  static async createUser(req: Request, res: Response) {
    const { displayName, email } = req.body;
    const user = await UserService.createUser(displayName, email);
    res.status(201).json(user);
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { displayName, email } = req.body;
    const user = await UserService.updateUser(id, displayName, email);
    res.json(user);
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UserService.deleteUser(id);
    res.status(204).send();
  }

  static async getWatchedProjects(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No bearer token provided");
    }
    const token = authHeader.split(" ")[1];

    const userInfo = await AuthService.getUserInfo(token);
    const user = await UserService.getWatchedProjects(userInfo.userId);
    res.json(user.watchedProjects);
  }

  static async addToWatch(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No bearer token provided");
    }
    const token = authHeader.split(" ")[1];

    const userInfo = await AuthService.getUserInfo(token);
    const { projectId } = req.body;
    const user = await UserService.addToWatch(userInfo.userId, projectId);
    res.json(user);
  }

  static async removeFromWatched(req: Request, res: Response) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No bearer token provided");
    }
    const token = authHeader.split(" ")[1];

    const userInfo = await AuthService.getUserInfo(token);
    const { projectId } = req.body;
    const user = await UserService.removeFromWatched(userInfo.userId, projectId);
    res.json(user);
  }
}
