import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    width: "100vw",
}));

const Main = styled(Stack)(() => ({
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
}));

export { Container, Main };
