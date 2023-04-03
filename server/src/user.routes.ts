import { Router, Request, Response } from "express";
import User from "./user.interface";

const router = Router();

const users: User[] = [
  {
    user: "user1",
    name: "Joe Bloggs",
    date: "28/05/2023",
  },
  {
    user: "user1",
    name: "Joe Bloggs",
    date: "23/08/2023",
  },
  {
    user: "user2",
    name: "Bill Watson",
    date: "02/07/2023",
  },
  {
    user: "user2",
    name: "Imran Ahmed",
    date: "18/06/2023",
  },
  {
    user: "user2",
    name: "Chris Marsh",
    date: "03/06/2023",
  },
];

router.get("/", (req: Request, res: Response): void => {
  const userH = req.header("user");
  const userRes = (userH && users.filter((p) => p.user == userH)) || [];
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send(userRes);
});

export { router };
