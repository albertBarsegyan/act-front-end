import { FieldState, FormFieldActionTypes } from '@/forms/contact/types';

export interface ContactFormState {
  name: FieldState;
  email: FieldState;
  message: FieldState;
}

export const enum ContactFormFieldName {
  Name = 'Name',
  Email = 'Email',
  Message = 'Message',
}

export const setInitialData = () => {
  return { value: '', errorMessage: '' };
};

export const initialFormData: ContactFormState = {
  name: setInitialData(),
  email: setInitialData(),
  message: setInitialData(),
};

export interface ContactFormAction {
  type: FormFieldActionTypes;
  fieldName?: ContactFormFieldName;
  fieldData?: {
    value?: string;
    errorMessage?: string;
  };
}

export function reducer(state: ContactFormState, action: ContactFormAction): ContactFormState {
  switch (action.type) {
    case FormFieldActionTypes.Update:
      switch (action.fieldName) {
        case ContactFormFieldName.Name:
          return {
            ...state,
            name: { ...state.name, ...action.fieldData },
          };
        case ContactFormFieldName.Email:
          return {
            ...state,
            email: { ...state.email, ...action.fieldData },
          };
        case ContactFormFieldName.Message:
          return {
            ...state,
            message: { ...state.message, ...action.fieldData },
          };
        default:
          return state;
      }

    case FormFieldActionTypes.Reset:
      return initialFormData;
    default:
      return initialFormData;
  }
}
