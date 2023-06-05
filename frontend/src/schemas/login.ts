import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email({ message: "Enter a valid email address" }),
  password: z
    .string()
    .nonempty("Password is required")
    .min(8, { message: "Password must have at least 8 characters" }),
});

export type Login = z.infer<typeof loginSchema>;
