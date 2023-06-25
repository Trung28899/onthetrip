import { useState, useCallback } from "react";
import AuthTypes, { authInitialValues } from "../types/AuthTypes";

const useHandleErrors = () => {
  const [errors, setErrors] = useState<AuthTypes>(authInitialValues);
  const resetError = useCallback(() => setErrors(authInitialValues), []);

  return {
    errors,
    setErrors,
    resetError,
  };
};

export default useHandleErrors;
