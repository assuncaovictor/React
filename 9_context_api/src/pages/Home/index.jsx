import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Home = () => {
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h4" component="h1" sx={{ color }}>
                    Home
                </Typography>
                <ButtonGroup>
                    <Button variant="contained" onClick={() => setTitleColor("red")}>
                        Vermelho
                    </Button>
                    <Button variant="contained" onClick={() => setTitleColor("green")}>
                        Verde
                    </Button>
                    <Button variant="contained" onClick={() => setTitleColor("blue")}>
                        Azul
                    </Button>
                </ButtonGroup>
            </Stack>
            <Typography variant="body1">Número do Contexto: {counter}</Typography>
        </Box>
    );
};

export default Home;
