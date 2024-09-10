import { z } from "zod";
import { commonValidations } from "./commonValidation";

export const GetUserSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
