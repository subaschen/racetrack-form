import { z } from "zod";
import { EMPTY_FIELD_MESSAGE, INVALID_EMAIL_MESSAGE } from "../constants/signupFormConstants";



export const newAccountSchema = z.object({
    first_name: z
        .string()
        .min(1, EMPTY_FIELD_MESSAGE),
    last_name: z
        .string()
        .min(1, EMPTY_FIELD_MESSAGE),
    company_name: z
        .string()
        .min(1, EMPTY_FIELD_MESSAGE),
    email: z
        .string()
        .min(1, EMPTY_FIELD_MESSAGE)
        .email(INVALID_EMAIL_MESSAGE),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
    confirm_password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
}).refine(data => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });