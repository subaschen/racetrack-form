import { z } from "zod";
import { EMPTY_FIELD_MESSAGE, INTEGRATIONS } from "../constants/signupFormConstants";

export const selectIntegrationSchema = z.object({
    integration_name: z
        .enum(INTEGRATIONS.map(i => i.value) as [string, ...string[]], { //todo: ew
            errorMap: () => ({ message: EMPTY_FIELD_MESSAGE })
        })
});
