import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { router as userRoutes } from "./user.routes";

const app: Application = express();

app.use(cors({origin: '*'}));
app.use("/users", userRoutes);
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.status(200).send({ message: "Working! Try /users route" });
});

export default app;
