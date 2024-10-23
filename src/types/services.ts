export interface CollegeTourRequest {
  first_name: string;
  last_name: string;
  phone_number: string;
  tour_date: string;
}

export interface ConsultationApplication {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

export interface SoccerFieldReservation {
  first_name: string;
  last_name: string;
  phone_number: string;
  reservation_date: string;
}

export interface ApplicantReservation {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  facebook_url?: string | null;
  instagram_url?: string | null;
}
