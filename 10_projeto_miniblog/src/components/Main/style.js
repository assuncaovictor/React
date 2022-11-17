import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Container = styled(Stack)(() => ({
    alignItems: "stretch",
    marginTop: "64px",
    padding: "1.5rem",
    minHeight: "calc(100vh - 64px)",
    transform: "none",
    transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
    width: "100%",
}));

const Box = styled(Stack)(() => ({
    minHeight: "calc(100vh - 8rem)",
}));

export { Container, Box };
