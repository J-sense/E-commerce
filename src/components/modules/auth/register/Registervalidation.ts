import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .min(2, "It should be at least 2 character"),
  email: z
    .string({ required_error: "name is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "password is required" })
    .min(3, "It should be at least 3 character"),
  confirmPassword: z
    .string({ required_error: "Conform password is required" })
    .min(3, "It should be at least 3 character"),
});
