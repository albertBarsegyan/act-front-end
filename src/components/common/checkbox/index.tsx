import React from 'react';

import styles from './styles.module.css';

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <div>
      <input className={styles.styledCheckbox} id="styled-checkbox-1" type="checkbox" value="value1" />
      <label htmlFor="styled-checkbox-1" />
    </div>
  );
};

export default Checkbox;
