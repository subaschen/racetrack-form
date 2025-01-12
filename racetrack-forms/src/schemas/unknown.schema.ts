import { z } from "zod";

export const unknownSchema = z.object({
    watermark: z.string(),
});