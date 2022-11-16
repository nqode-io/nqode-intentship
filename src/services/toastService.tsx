import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMPORT <ToastContainer/> in component where you want to use toastService

const toastError = (message: string) =>{
    return toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const toastSuccess = (message: string) =>{
    return toast.success(message , {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

const toastService = {
    toastError,
    toastSuccess
};

export default toastService;
