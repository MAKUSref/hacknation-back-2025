import { Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const accessToken = await AuthService.login(email, password);
    res.json({ accessToken });
  }

  static async me(req: Request, res: Response) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("No bearer token provided");
    }

    const token = authHeader.split(" ")[1];

    const userInfo = await AuthService.getUserInfo(token);
    res.json(userInfo);
  }
}
