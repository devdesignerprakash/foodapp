import { z } from "zod";

export const RegisterSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" })
    .max(20),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, { message: "Password must be at most 20 characters" })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }
  ),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(10, { message: "Phone number must be at most 10 characters" })
    .regex(/^[0-9]+$/, { message: "Phone number must contain only numbers" }),
  address: z
    .string()
    .min(3, { message: "Address must be at least 3 characters" })
    .max(20, { message: "Address must be at most 20 characters" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, { message: "Password must be at most 20 characters" })
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
    {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    }
  )
});

export type LoginInputState = z.infer<typeof LoginSchema>;
export type RegisterInputState = z.infer<typeof RegisterSchema>;
