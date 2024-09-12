import { productController } from "@/controllers/productController";
import { validateRequest } from "@/helpers/httpHandlers";
import { GetProductSchema } from "@/validations/product";
import express, { type Router } from "express";

export const productRouter: Router = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/:id", validateRequest(GetProductSchema), productController.getProduct);

export default productRouter;
