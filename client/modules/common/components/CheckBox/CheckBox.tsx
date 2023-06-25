import React, { InputHTMLAttributes, useState } from "react";
import styles from "./Checkbox.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onValueChange: (checked: boolean) => void;
}

const Checkbox = ({ label, onValueChange, ...props }: Props) => {
  const [checked, setChecked] = useState(props.checked || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    onValueChange(event.target.checked);
  };

  return (
    <label className={styles.checkbox}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <span className={styles.checkmark}></span>
      {label}
    </label>
  );
};

export default Checkbox;
