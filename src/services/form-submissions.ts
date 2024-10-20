import { axiosInstance } from '@/config/axios';
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
      const response = await axiosInstance.post('/admissions/college-tour/', data);
      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },

  consultation: async (data: ConsultationApplication) => {
    try {
      const response = await axiosInstance.post('/admissions/consultation/', data);
      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },

  soccerFieldReservation: async (data: SoccerFieldReservation) => {
    try {
      const response = await axiosInstance.post(`/admissions/soccer-field-reservation/`, data);
      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },
  applicantAdmission: async (data: ApplicantReservation) => {
    try {
      const response = await axiosInstance.post('/admissions/applicant/', data);

      return response.data;
    } catch (error) {
      return { error: getErrorMessage(error) };
    }
  },
};
