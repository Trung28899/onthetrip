import React, { ReactNode } from "react";
import styles from "./Typography.module.scss";
import classNames from "classnames";

type TypographyProps = {
  className?: string;
  variant: "heading" | "subheading" | "body";
  children: ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  className,
  variant,
  children,
  ...other
}) => {
  let TagName: keyof JSX.IntrinsicElements;

  switch (variant) {
    case "heading":
      TagName = "h1";
      break;
    case "subheading":
      TagName = "h2";
      break;
    case "body":
      TagName = "p";
      break;
    default:
      TagName = "p";
      break;
  }

  const typographyClassName = classNames(styles[variant], className);

  return (
    <TagName className={typographyClassName} {...other}>
      {children}
    </TagName>
  );
};

export default Typography;
