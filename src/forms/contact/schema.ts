import { isValidPhoneNumber } from 'libphonenumber-js';
import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'First name is required'),
  email: z.string().min(1, 'Last name is required').email('Not valid email'),
  message: z.string().min(1, 'Message is required'),
  phone_number: z.string().min(1, 'Phone number is required').refine(isValidPhoneNumber, {
    message: 'Phone number must be valid.',
  }),
});
