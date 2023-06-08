import { z } from "zod";

export const userSchema = z
  .object({
    first_name: z
      .string()
      .nonempty("First name is required")
      .min(2, { message: "First name must have at least 2 characters" }),
    last_name: z
      .string()
      .nonempty("Last name is required")
      .min(2, { message: "Last name must have at least 2 characters" }),
    email: z
      .string()
      .nonempty("Email is required")
      .email({ message: "Enter a valid email address" }),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, { message: "Password must have at least 8 characters" }),
    repeat_password: z.string().nonempty("Repeat password is required"),
    age: z
      .string()
      .or(z.string().regex(/\d+/).transform(Number))
      .refine((n) => Number(n) >= 0, {
        message: "Age must be a non-negative number",
      })
      .refine((n) => Number(n) >= 8, {
        message: "Age must be greater than or equal to 8",
      }),
  })
  .refine((value) => value.password === value.repeat_password, {
    message: "Passwords do not match",
    path: ["repeat_password"],
  });

export type User = z.infer<typeof userSchema>;
