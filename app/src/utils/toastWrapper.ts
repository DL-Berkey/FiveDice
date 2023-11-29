import { toast } from "react-toastify";

export const success = (message: string, autoClose = 2500) =>
    toast.success(message, {
        position: "top-right",
        autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    });

export const error = (message: string, autoClose = 2500) =>
    toast.error(message, {
        position: "top-right",
        autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    });

export const warn = (message: string, autoClose = 2500) =>
    toast.warn(message, {
        position: "top-right",
        autoClose,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        theme: "light",
    });
