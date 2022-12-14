import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useToastContext } from "../../hooks/useToast";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast = () => {
    const { open, messager, type, setOpen } = useToastContext();


    const handleClose = (_event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
                {messager}
            </Alert>
        </Snackbar>
    );
};

export default Toast;
