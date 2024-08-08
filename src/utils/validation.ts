import { regex } from '@/constants/regex.constants';

export const emailValidator = (value: string) => {
  return Boolean(RegExp(regex.EMAIL).exec(value) && value.length <= 256);
};

export const maxLengthValidator = (value: string, maxLength: number) => {
  return value.length <= maxLength;
};

export const isArmenianString = (value: string) => {
  return value.split('').every((char) => {
    const code = char.charCodeAt(0);
    return 0x0530 <= code && code <= 0x058f;
  });
};
