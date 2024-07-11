import { ChangeEvent, useId } from 'react';

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string;
}

export const Input = ({ placeholder, value, onChange, label }: InputProps) => {
  const id = useId();

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-2xl font-bold text-blue-dark-1">
          {label}
        </label>
      )}

      <div className="border border-blue-dark-1 p-2">
        <input
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={'p֊2 w-full text-blue-dark-1 focus:outline-none'}
          type="text"
        />
      </div>
    </div>
  );
};
