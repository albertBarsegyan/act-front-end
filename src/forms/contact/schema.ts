import { isValidPhoneNumber } from 'libphonenumber-js';
import * as z from 'zod';

export const contactFormSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  phone_number: z
    .string()
    .min(1, 'Phone number is required')
    .refine((value) => isValidPhoneNumber(value), {
      message: 'Phone number must be valid.',
    }),
  consultation_date: z.string().min(1, 'Date is required'),
});