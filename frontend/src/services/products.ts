import { IProductsResponse } from "@/interfaces/products";
import api from "@/libs/api";

const basePath = "/products";

export async function getProductsByCategory(
  categorySlug: string,
  page: number
): Promise<IProductsResponse> {
  try {
    const finalPath = `${basePath}/category/${categorySlug}?page=${page}`;
    const response = await api.get(finalPath);

    if (!response || !response.data) {
      const errorMessage = "[CATEGORY]: Error getting products by category - response data is invalid.";
      console.log(errorMessage);
      throw new Error(errorMessage);
    }

    return response.data;
  } catch (error) {
    if (process.env.NODE_ENV !== "production")
      console.log("[CATEGORY]: Error fetching products by category", error);
    throw error;
  }
}
