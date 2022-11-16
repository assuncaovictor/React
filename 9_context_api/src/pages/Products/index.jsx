import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useCounterContext } from "../../hooks/useCounterContext";
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Products = () => {
    const { counter, setCounter } = useCounterContext();
    const { color } = useTitleColorContext();

    return (
        <Box>
            <Typography variant="h4" component="h1" sx={{ color }}>
                Alterar Contexto ({counter})
            </Typography>
            <Button onClick={() => setCounter(counter + 1)} variant="contained">
                Adicionar número ao contexto
            </Button>
        </Box>
    );
};

export default Products;
