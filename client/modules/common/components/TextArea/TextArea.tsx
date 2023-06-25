import { TextareaHTMLAttributes } from "react";
import classes from "./TextArea.module.scss";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  variant: "white" | "purple";
  size: "large" | "medium" | "small";
  label?: string;
  error?: string;
  resetError?: () => void;
};

const Textarea = (props: Props) => {
  const { variant, size, label, error, resetError, ...otherProps } = props;
  const textAreaClasses = [
    classes.textarea,
    classes[variant],
    classes[size],
  ].join(" ");

  return (
    <div className={classes.textareaContainer}>
      {label && <p className={classes.label}>{label}</p>}
      <textarea
        {...otherProps}
        className={textAreaClasses}
        onChange={(e) => {
          otherProps.onChange?.(e);
          resetError?.();
        }}
      />
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
};

Textarea.defaultProps = {
  variant: "white",
  size: "small",
};

export default Textarea;
