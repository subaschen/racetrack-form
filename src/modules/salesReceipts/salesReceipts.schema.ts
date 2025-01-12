import { z } from "zod";

export const salesReceiptsSchema = z.object({
    // Base fields
    canix_customer_id: z.string().nullable(),
    income_single_register: z.boolean().default(false),
    income_breakdown: z.boolean().default(false),
    income_cogs_breakdown: z.boolean().default(false),
    income_discounts_breakdown: z.boolean().default(false),
    income_sales_cannabis_breakdown: z.boolean().default(false),
    income_merge_discounts: z.boolean().default(false),
    income_tax_inclusive: z.boolean().default(false),
    income_tracking_class_map: z.record(z.string(), z.string()).default({'ALL_TX_TYPES': 'ALL_TX_TYPES'}),
    income_tax_naming_map: z.record(z.string(), z.string()).default({}),
    sales_customer_name: z.string().default('POS Sales Info'),
    income_sales_line_name: z.string().default('Sales'),
    canix_facility_type_map: z.record(z.string(), z.string()).default({}),
});