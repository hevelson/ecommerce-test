import { Router } from "express";
import healthCheckRouter from "./healthCheckRouter";
import userRouter from "./userRouter";

const router = Router();

const defaultRoutes = [
  {
    path: "/health-check",
    route: healthCheckRouter,
  },
  {
    path: "/users",
    route: userRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
