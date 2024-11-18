import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export type ShippingFormData = z.infer<typeof shippingSchema>;

export const shippingSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  address: z.string(),
  city: z.string().min(1, 'Town / City is required'),
  phone: z.string().min(1, 'Phone number is required').refine(isValidPhoneNumber, {
    message: 'Phone number must be valid.',
  }),
  email: z.string().email('Invalid email address').min(1, 'Email Address is required'),
  notes: z.string().optional(),
});
