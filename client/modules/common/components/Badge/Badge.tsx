import React, { ReactNode } from "react";
import classes from "./Badge.module.scss";
import Close from "../../../../public/purpleclose.svg";
import Image from "next/image";

interface BadgeProps {
  variant: "original" | "purple";
  closeIconShow: boolean;
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function BadgeSelector({
  variant,
  closeIconShow,
  children,
  onClick,
}: BadgeProps) {
  const badgeStyles = [classes.badge, classes[variant]].join(" ");

  return (
    <div className={badgeStyles} onClick={onClick}>
      <p>{children}</p>
      {closeIconShow && (
        <Image className={classes.closeIcon} src={Close} alt="" />
      )}
    </div>
  );
}

BadgeSelector.defaultProps = {
  variant: "original",
  closeIconShow: false,
  onClick: () => {},
};

export default BadgeSelector;
