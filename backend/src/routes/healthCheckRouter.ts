import express, { type Request, type Response, type Router } from "express";

import { handleServiceResponse } from "@/helpers/httpHandlers";
import { ServiceResponse } from "@/helpers/serviceResponse";

export const healthCheckRouter: Router = express.Router();

healthCheckRouter.get("/", (_req: Request, res: Response) => {
  const serviceResponse = ServiceResponse.success("Service is healthy", null);
  return handleServiceResponse(serviceResponse, res);
});

export default healthCheckRouter;
