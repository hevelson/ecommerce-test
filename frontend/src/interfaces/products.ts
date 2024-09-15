import { IImage } from "./images";

export interface IProductRate {
  title: string;
  description: string;
  rate: number;
}

export interface IProduct {
  id?: number;
  title: string;
  description: string;
  price: number;
  promotional_price: number | null;
  available_quantity: number;
  updated_at?: Date;
  created_at?: Date;
  images?: IImage[];
  product_rates?: IProductRate[];
}

export interface IPaginatedProducts {
  totalItems: number;
  items: IProduct[],
  totalPages: number;
  currentPage: number;
}

export interface IProductsResponse {
  success: boolean;
  message: string;
  responseObject: IPaginatedProducts;
  statusCode: number;
}
