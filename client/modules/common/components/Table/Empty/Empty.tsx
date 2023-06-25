import React from "react";
import Image, { ImageProps } from "next/image";
import clsx from "clsx";

import EmptyIcon from "@/public/empty.png";
import classes from "./Empty.module.scss";

interface EmptyProps {
  title?: string;
  content?: string;
  titleItalic?: boolean;
  iconProps?: ImageProps;
}

const Empty: React.FC<EmptyProps> = ({
  title,
  content,
  titleItalic,
  iconProps,
}) => {
  return (
    <div className={classes.container}>
      <Image src={iconProps?.src || ""} alt="" {...iconProps} />
      <div className={clsx(classes.title, titleItalic && classes.italic)}>
        {title}
      </div>
      {content && <span className={classes.content}>{content}</span>}
    </div>
  );
};

Empty.defaultProps = {
  title: "No Data",
  content: "",
  titleItalic: false,
  iconProps: {
    src: EmptyIcon,
    alt: "",
  },
};

export default Empty;
