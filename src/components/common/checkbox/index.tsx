import React, { useId } from 'react';

import styles from './styles.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  const id = useId();

  return (
    <div>
      <input
        checked={checked}
        className={styles.styledCheckbox}
        onChange={(e) => onChange(e.target.checked)}
        id={id}
        type="checkbox"
        value="value1"
      />
      <label htmlFor={id} />
    </div>
  );
};
