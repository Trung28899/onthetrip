import React, { InputHTMLAttributes } from "react";
import Image from "next/image";
import classes from "./Input.module.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  icon?: string;
  inputSize?: "large" | "medium" | "small";
  variant?: "default" | "outline";
  error?: string;
  resetError?: () => void;
};

const Input = (props: Props) => {
  const { icon, inputSize, error, resetError, ...otherProps } = props;
  const { variant } = props;
  const inputClasses = [
    classes.input,
    classes[inputSize || "small"],
    classes[variant || "default"],
    otherProps.className,
  ].join(" ");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (otherProps.onChange) {
      otherProps.onChange(e);
    }

    if (resetError) {
      resetError();
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        {icon && <Image src={icon} alt="Icon" className={classes.icon} />}
        <input
          {...otherProps}
          className={inputClasses}
          onChange={handleChange}
        />
      </div>
      {error && (
        <div className={`${classes.inputContainer} ${classes.errorContainer}`}>
          <p className={classes.iconHolder}>*</p>
          <p className={classes.errorText}>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
