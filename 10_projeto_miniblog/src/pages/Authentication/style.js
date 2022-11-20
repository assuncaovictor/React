import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import MuiTextField from "@mui/material/TextField";
import MuiFormControl from "@mui/material/FormControl";

const Container = styled(Stack)(() => ({
    maxWidth: 700,
    margin: "0 auto",
    width: "100%",
}));

const FormControl = styled(MuiFormControl)(({ theme }) => ({
    alignItems: "flex-end",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    width: "100%",
}));

const TextField = styled(MuiTextField)(() => ({
    width: "100%",
}));

export { FormControl, TextField, Container };
