import { z } from "zod";
import { commonValidations } from "./commonValidation";

export const GetProductSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
