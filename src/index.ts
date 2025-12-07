import "module-alias/register";
import express from "express";
import { config, connectToMongo } from "./config/config";
import authRouter from "./route/auth.route";
import userRouter from "./route/user.route";
import stepsInfoRouter from "./route/stepsInfo.route";
import legislationRouter from "./route/legislationProject.route";
import AIRouter from "./route/AI.route";
import commentRouter from "./route/comment.route";
import cors from "cors";
import Logger from "./config/logger";
import session from "express-session";
// import passport from "./config/passport";

const app = express();
app.use(express.json());
app.use(cors());


connectToMongo()
  .then(() => {
    Logger.info("Connected to MongoDB");
  })
  .catch((err) => {
    Logger.error("Error connecting to MongoDB");
  });

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);
app.use("/api/legislation", legislationRouter);
app.use("/api/steps-info", stepsInfoRouter);
app.use("/api/comments", commentRouter);
app.use("/api/ai", AIRouter);

app.get("/api/health-check", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(config.PORT, () => {
  Logger.success(`Server is running on port ${config.PORT}`);
});
