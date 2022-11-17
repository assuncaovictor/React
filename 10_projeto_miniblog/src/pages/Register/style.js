import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import MuiTextField from "@mui/material/TextField";

const Container = styled(Stack)(() => ({
    maxWidth: 700,
    margin: "0 auto",
    width: "100%",
}));

const Form = styled(Stack)(() => ({
    width: "100%",
}));

const TextField = styled(MuiTextField)(() => ({
    width: "100%",
}));

export { Form, TextField, Container };
