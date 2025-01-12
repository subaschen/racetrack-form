import { z } from "zod";

export const overShortSchema = z.object({
    overshort: z.record(z.string(), z.string()),
    overshort_single_register: z.boolean(),
    cash_var_acc_name: z.string(),
    mimo_vault_name: z.string(),
    vault_acc_name: z.string(),
});