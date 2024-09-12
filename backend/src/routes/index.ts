import { Router } from "express";
import healthCheckRouter from "./healthCheckRouter";
import userRouter from "./userRouter";
import productRouter from "./productRouter";

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
  {
    path: "/products",
    route: productRouter,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
