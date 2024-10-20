import { isValidPhoneNumber } from 'libphonenumber-js';
import { Schema, z } from 'zod';

import { ApplicantReservation } from '@/types/services';

function isValidFacebookUrl(url: string): boolean {
  const facebookUrlRegex =
    /^(https?:\/\/)?(www\.)?facebook\.com\/((pages\/)?([\w-]+\/)?(profile\.php\?id=\d+|[\w-]+))$/;

  return facebookUrlRegex.test(url);
}

function isValidInstagramUrl(url: string): boolean {
  const instagramUrlRegex = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/i;

  return instagramUrlRegex.test(url);
}

export const admissionSchema: Schema<ApplicantReservation> = z.object({
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  phone_number: z.string().min(1, 'Phone number is required').refine(isValidPhoneNumber, {
    message: 'Phone number must be valid.',
  }),
  email: z.string().email('Email must be valid').min(1, 'Email is required'),
  facebook_url: z
    .string()
    .refine(isValidFacebookUrl, {
      message: 'Facebook URL must be valid.',
    })
    .or(z.literal(''))
    .nullable(),
  instagram_url: z
    .string()
    .refine(isValidInstagramUrl, {
      message: 'Instagram URL must be valid.',
    })
    .or(z.literal(''))
    .nullable(),
});

export type AdmissionFormValues = z.infer<typeof admissionSchema>;
