import { z } from "zod";
import { commonValidations } from "./commonValidation";

export const GetProductSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});

export const GetProductCategorySchema = z.object({
  params: z.object({ slug: commonValidations.slug }),
  query: z.object({ page: commonValidations.page.optional() }),
});

export const GetProductSearchSchema = z.object({
  query: z.object({
    term: z.string().trim(),
    page: commonValidations.page.optional()
  }),
});
