import { toast } from "react-toastify";
import classes from "./Toast.module.scss";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    closeButton: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    autoClose: 2000,
    className: classes.customToast,
    bodyClassName: classes.customToastBody,
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    closeButton: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    autoClose: 2000,
    className: classes.customToast,
    bodyClassName: classes.customToastBodyError,
  });
};
