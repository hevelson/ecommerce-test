import { productController } from "@/controllers/productController";
import { validateRequest } from "@/helpers/httpHandlers";
import { GetProductCategorySchema, GetProductSchema, GetProductSearchSchema } from "@/validations/product";
import express, { type Router } from "express";

export const productRouter: Router = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/search", validateRequest(GetProductSearchSchema), productController.getProductsBySearch);

productRouter.get("/id/:id", validateRequest(GetProductSchema), productController.getProduct);

productRouter.get("/category/:slug", validateRequest(GetProductCategorySchema), productController.getProductsByCategory);

export default productRouter;
