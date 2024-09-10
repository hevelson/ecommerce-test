import { userController } from "@/controllers/userController";
import { validateRequest } from "@/helpers/httpHandlers";
import { GetUserSchema } from "@/validations/user";
import express, { type Router } from "express";

export const userRouter: Router = express.Router();

userRouter.get("/", userController.getUsers);

userRouter.get("/:id", validateRequest(GetUserSchema), userController.getUser);

export default userRouter;
