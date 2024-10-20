import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import classNames from 'classnames';
import React from 'react';
import DatePicker from 'react-date-picker';
import PhoneInput from 'react-phone-number-input/input';

import styles from './styles.module.css';

export const enum InputFieldVariant {
  Regular = 'Regular',
  PhoneNumber = 'PhoneNumber',
  TextArea = 'TextArea',
  Date = 'Date',
  Outlined = 'Outlined',
}

interface InputFieldProps {
  onChange: (e: any) => void;
  placeholder?: string;
  value: string;
  variant?: InputFieldVariant;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  label?: string;
  errorMessage?: string;
  accept?: string;
  id?: string;
  wrapperClassName?: string;
}

export function Input({
  onChange,
  variant = InputFieldVariant.Regular,
  errorMessage,
  value = '',
  placeholder,
  className,
  wrapperClassName,
  label,
  type = 'text',
  accept = '',
  id,
}: Readonly<InputFieldProps>) {
  const inputStyles = classNames({
    [styles.inputField]: true,
    [className ?? '']: Boolean(className),
  });

  const wrapperStyles = classNames({
    [styles.inputFieldWrapper]: true,
    [wrapperClassName ?? '']: Boolean(wrapperClassName),
  });

  return (
    <div className={wrapperStyles}>
      {label && <span className={styles.label}>{label}</span>}
      {errorMessage && <span className={styles.errorText}>{errorMessage}</span>}

      {(() => {
        switch (variant) {
          case InputFieldVariant.TextArea:
            return (
              <textarea
                className={styles.inputField}
                value={value !== '' ? value : undefined}
                onChange={onChange}
                placeholder={placeholder}
                id={id}
              />
            );
          case InputFieldVariant.Outlined:
            return (
              <input
                className={styles.inputOutlined}
                value={value !== '' ? value : undefined}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                accept={accept || undefined}
              />
            );
          case InputFieldVariant.Regular:
            return (
              <input
                className={inputStyles}
                value={value !== '' ? value : undefined}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                accept={accept || undefined}
              />
            );
          case InputFieldVariant.PhoneNumber:
            return <PhoneInput value={value} placeholder={placeholder} className={className} onChange={onChange} />;
          case InputFieldVariant.Date:
            return (
              <DatePicker
                value={new Date(value)}
                onChange={onChange}
                className={styles.inputField}
                clearIcon={null}
                calendarIcon={null}
                maxDate={new Date()}
              />
            );
        }
      })()}
    </div>
  );
}
