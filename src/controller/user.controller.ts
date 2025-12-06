import { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  static async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users);
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
}
