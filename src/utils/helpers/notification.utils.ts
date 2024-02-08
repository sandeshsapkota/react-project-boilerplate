import { toast, ToastPosition, TypeOptions } from 'react-toastify';

const notify = (
  message: string,
  type: TypeOptions = 'success',
  position: ToastPosition = 'top-right',
  timer: number = 3000,
) => {
  toast(message, {
    position,
    autoClose: timer,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type,
  });
};

export default notify;
