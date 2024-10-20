import { AdmissionFormValues } from '@/forms/admission/schema';

export const admissionFormValuesNormaliser = (values: AdmissionFormValues) => {
  return {
    ...values,
    facebook_url: values.facebook_url === '' ? null : values.facebook_url,
    instagram_url: values.instagram_url === '' ? null : values.instagram_url,
  };
};
