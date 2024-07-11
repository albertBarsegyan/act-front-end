import { ChangeEvent } from 'react';

interface TextareaProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Textarea = ({ value, onChange, placeholder, className }: TextareaProps) => {
  return (
    <textarea
      rows={4}
      className={`border-blueberry-200 focus:shadow-outline w-full resize-none rounded-3xl border-2 bg-transparent px-4 py-2 text-white focus:outline-none md:px-6 md:py-4 ${className ?? ''}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
