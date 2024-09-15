import { z } from 'zod';

export const commonValidations = {
  id: z
    .string()
    .refine((data) => !Number.isNaN(Number(data)), 'ID must be a numeric value')
    .transform(Number)
    .refine((num) => num > 0, 'ID must be a positive number'),
  slug: z.string().trim().toLowerCase(),
  page: z
    .string()
    .refine((data) => !Number.isNaN(Number(data)), 'Page must be a numeric value')
    .transform(Number)
    .refine((num) => num > 0, 'Page must be a positive number'),
};
