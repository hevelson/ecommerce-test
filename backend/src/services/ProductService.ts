import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/helpers/serviceResponse';
import Product, { type IProduct } from '@/models/Product';
import { logger } from '@/server';

export default class ProductService {
  private model = Product;

  // Retrieves all Products from the database
  async findAll(): Promise<ServiceResponse<IProduct[] | null>> {
    try {
      const products = await this.model.findAll({ include: ['images', 'categories'] });
      if (!products || products.length === 0) {
        return ServiceResponse.failure('No products found', null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<IProduct[]>('products found', products);
    } catch (ex) {
      const errorMessage = `Error finding all products: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while retrieving products.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Retrives all products in the given category
  async findAllByCategory(categoryId: number): Promise<ServiceResponse<IProduct[] | null>> {
    try {
      const products = await this.model.findAll({
        include: [
          'images',
          {
            association: 'categories',
            where: {
              id: categoryId
            },
          }
        ] 
      });
      if (!products || products.length === 0) {
        return ServiceResponse.failure('No products found in this category', null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<IProduct[]>('products found', products);
    } catch (ex) {
      const errorMessage = `Error finding all products: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while retrieving products.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Retrieves a single Product by their ID
  async findById(id: number): Promise<ServiceResponse<IProduct | null>> {
    try {
      const product = await this.model.findOne({ where: { id }, include: ['images', 'categories'] });
      if (!product) {
        return ServiceResponse.failure('Product not found', null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<IProduct>('Product found', product);
    } catch (ex) {
      const errorMessage = `Error finding Product with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while finding Product.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export const productService = new ProductService();
