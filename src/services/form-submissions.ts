import { mainApiInstance } from '@/config/main-api-instance';
import {
  ApplicantReservation,
  CollegeTourRequest,
  ConsultationApplication,
  SoccerFieldReservation,
} from '@/types/services';
import { getErrorMessage } from '@/utils/error';

export const admissionsService = {
  collegeTour: async (data: CollegeTourRequest) => {
    try {
      const response = await mainApiInstance.post('admissions/college-tour/', { json: data });
      return { data: response.json(), error: null };
    } catch (error) {
      return { error: getErrorMessage(error), data: null };
    }
  },

  contact: async (data: ConsultationApplication) => {
    try {
      const response = await mainApiInstance.post('admissions/contact/', { json: data });
      return { data: response.json(), error: null };
    } catch (error) {
      return { error: getErrorMessage(error), data: null };
    }
  },

  soccerFieldReservation: async (data: SoccerFieldReservation) => {
    try {
      const response = await mainApiInstance.post(`admissions/soccer-field-reservation/`, { json: data });
      return { data: response.json(), error: null };
    } catch (error) {
      return { error: getErrorMessage(error), data: null };
    }
  },
  applicantAdmission: async (data: ApplicantReservation) => {
    try {
      const response = await mainApiInstance.post('admissions/applicant/', { json: data });

      return { data: response.json(), error: null };
    } catch (error) {
      return { error: getErrorMessage(error), data: null };
    }
  },
};
