import { z } from "zod";

export const salesReceiptsSchema = z.object({
    sales_receipts_enabled: z.boolean().default(false),
    sales_receipts_account: z.string().nullable(),
    sales_receipts_class: z.string().nullable(),
    // Add other sales receipt fields as needed
});