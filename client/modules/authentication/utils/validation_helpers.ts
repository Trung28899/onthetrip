import * as yup from "yup";
import AuthTypes, { authInitialValues } from "../types/AuthTypes";
import { getValidationErrors } from "@/modules/common/utils/validation_helpers";

const createAuthSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const validateAuthForm = async (values: AuthTypes) => {
  try {
    await createAuthSchema.validate(values, { abortEarly: false });
  } catch (error: any) {
    const errorObject = getValidationErrors(error);
    return { ...authInitialValues, ...errorObject };
  }
  return authInitialValues;
};

export { createAuthSchema, getValidationErrors, validateAuthForm };
