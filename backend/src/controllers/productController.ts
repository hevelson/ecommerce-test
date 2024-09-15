import type { Request, RequestHandler, Response } from "express";

import { handleServiceResponse } from "@/helpers/httpHandlers";
import { productService } from "@/services/ProductService";

interface ISearchRequest {
  term: string;
  page: string
}

class ProductController {
  public getProducts: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await productService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };

  public getProductsByCategory: RequestHandler = async (req: Request, res: Response) => {
    const { params: { slug }, query: { page = 1 } } = req;
    const pageNumber = Number.parseInt(page as string, 10) - 1;
    const serviceResponse = await productService.findAllByCategory(slug, pageNumber);
    return handleServiceResponse(serviceResponse, res);
  };

  public getProductsBySearch: RequestHandler = async (req: Request, res: Response) => {
    const { term = '', page = 1 } = req.query as unknown as ISearchRequest;
    const pageNumber = Number.parseInt(page as string, 10) - 1;
    const serviceResponse = await productService.findAllBySearch(term, pageNumber);
    return handleServiceResponse(serviceResponse, res);
  };

  public getProduct: RequestHandler = async (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = await productService.findById(id);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const productController = new ProductController();
