import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';

export const collegeTourSchema = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  tour_date: z.string().min(1, 'Date is required'),
  tour_time: z.string().min(1, 'Time is required'),
  phone_number: z.string().min(1, 'Phone number is required').refine(isValidPhoneNumber, {
    message: 'Phone number must be valid.',
  }),
});

export type CollegeTourFormValues = z.infer<typeof collegeTourSchema>;
