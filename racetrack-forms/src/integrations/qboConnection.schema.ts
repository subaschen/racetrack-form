import { z } from "zod";

export const qboConnectionSchema = z.object({
    qbo_realm_id: z.string(),
    qbo_access_token: z.string(),
    qbo_refresh_token: z.string(),
    qbo_file_name: z.string(),
});

//TODO: Add validation for the tokens