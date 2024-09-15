import { StatusCodes } from 'http-status-codes';

import { ServiceResponse } from '@/helpers/serviceResponse';
import Product, { type IProduct } from '@/models/Product';
import { logger } from '@/server';
import { Op } from 'sequelize';

interface IProductPaginateData {
  totalItems: number;
  items: IProduct[];
  totalPages: number;
  currentPage: number;
}

export default class ProductService {
  private model = Product;

  getPaginatedgData(
    data: { rows: Product[]; count: number },
    page: number,
    limit: number
  ): IProductPaginateData {
    const { count: totalItems, rows: items } = data;
    const currentPage = page ? page + 1 : 1;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, items, totalPages, currentPage };
  }

  // Retrieves all Products from the database
  async findAll(): Promise<ServiceResponse<IProduct[] | null>> {
    try {
      const products = await this.model.findAll({ include: ['images', 'categories', 'product_rates'] });
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
  async findAllByCategory(
    categorySlug: string,
    page: number
  ): Promise<ServiceResponse<IProductPaginateData | null>> {
    const limit = 4;
    const offset = page * limit;

    try {
      const paginatedData = await this.model.findAndCountAll({
        include: [
          'images',
          'product_rates',
          {
            association: 'categories',
            where: {
              slug: categorySlug,
            },
          },
        ],
        distinct: true,
        limit,
        offset,
      });

      const returnData = this.getPaginatedgData(paginatedData, page, limit);
      const { totalItems, items } = returnData;
      if (!items || totalItems === 0) {
        return ServiceResponse.failure(
          'No products found in this category',
          null,
          StatusCodes.NOT_FOUND
        );
      }
      return ServiceResponse.success<IProductPaginateData>('products found', returnData);
    } catch (ex) {
      const errorMessage = `Error finding products by category: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        'An error occurred while retrieving products.',
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  }

  // Retrives all products by search criteria
  async findAllBySearch(
    term: string,
    page: number
  ): Promise<ServiceResponse<IProductPaginateData | null>> {
    const limit = 4;
    const offset = page * limit;

    try {
      const paginatedData = await this.model.findAndCountAll({
        include: ['images', 'categories', 'product_rates'],
        where: {
          [Op.or]: {
            title: {
              [Op.like]: `%${term}%`,
            },
            description: {
              [Op.like]: `%${term}%`,
            },
          },
        },
        distinct: true,
        limit,
        offset,
      });

      const returnData = this.getPaginatedgData(paginatedData, page, limit);
      const { totalItems, items } = returnData;
      if (!items || totalItems === 0) {
        return ServiceResponse.failure(
          `No products found with the term ${term}`,
          null,
          StatusCodes.NOT_FOUND
        );
      }
      return ServiceResponse.success<IProductPaginateData>('products found', returnData);
    } catch (ex) {
      const errorMessage = `Error finding products by term: $${(ex as Error).message}`;
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
      const product = await this.model.findOne({
        where: { id },
        include: ['images', 'categories', 'product_rates'],
      });
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
