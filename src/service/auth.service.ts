import { AppError } from "../exception/AppError";
import { HTTP_STATUS_CODE } from "../exception/http";
import User from "../model/User";
import jwt from "jsonwebtoken";
import { config } from "../config/config";

export class AuthService {
  static async login(email: string, password: string): Promise<string> {
    const user = await User.findOne({ email });
    if (!user) {
      throw new AppError("Invalid email or password", HTTP_STATUS_CODE.UNAUTHORIZED);
    }
    // jwt
    const token = jwt.sign({ userId: user._id, email: user.email }, config.JWT_SECRET);
    return token;
  }

  static async getUserInfo(token: string): Promise<{ userId: string; email: string }> {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET) as {
        userId: string;
        email: string;
      };
      return { userId: decoded.userId, email: decoded.email };
    } catch (error) {
      throw new AppError("Invalid token", HTTP_STATUS_CODE.UNAUTHORIZED);
    }
  }
}
