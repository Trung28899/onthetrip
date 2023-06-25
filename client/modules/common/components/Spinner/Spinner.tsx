import React, { useEffect, useState } from "react";
import classes from "./Spinner.module.scss";
import useLoading from "@/modules/common/hooks/useLoading";

const Spinner = () => {
  const [needLoading, setNeedLoading] = useState(false);
  const { resetLoading, loading_count } = useLoading();

  useEffect(() => {
    if (loading_count > 0) {
      setNeedLoading(true);
    } else {
      setNeedLoading(false);
    }

    if (loading_count < 0) resetLoading();
  }, [loading_count, resetLoading]);

  if (needLoading) {
    return (
      <div className={classes.container}>
        <div className={classes.ldsSpinner}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }

  return <div />;
};

export default Spinner;
