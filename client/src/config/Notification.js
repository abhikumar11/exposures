import { toast } from "react-toastify";

const message = (type, text) => {
     if (type === "success") {
          toast.success(text);
     }
     else if (type === "error") {
          toast.error(text);
     }
    else if (type === "warning") {
          toast.warning(text);
     } 
     else if (type === "info") {
          toast.info(text);
     }
     else {
          toast(text);
     }
};

export default message;
