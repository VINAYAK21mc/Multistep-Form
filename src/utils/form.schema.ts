import { z } from 'zod';

export const personalDetails = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number should be at least 10 characters"),
});

export const addressDetails = z.object({
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  addressLine2: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(5, "Zip Code is required"),
});

export type TpersonalDetails = z.infer<typeof personalDetails>;
export type TaddressDetails = z.infer<typeof addressDetails>;

export interface FormData extends TpersonalDetails, TaddressDetails {}
