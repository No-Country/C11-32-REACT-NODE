import { z } from "zod";

export const checkoutSchema = z.object({
  first_name: z.string().nonempty(),
  last_name: z.string().nonempty(),
  email: z.string().nonempty().email(),
  age: z
    .number()
    .or(z.string().regex(/\d+/).transform(Number))
    .refine((n) => n >= 0, { message: "Age must be a non-negative number" })
    .refine((n) => n >= 8, {
      message: "Age must be greater than or equal to 8",
    }),
});

export type FormCheckout = z.infer<typeof checkoutSchema>;
