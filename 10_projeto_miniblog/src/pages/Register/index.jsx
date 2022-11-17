import React from "react";
import { Form, TextField, Container } from "./style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Container gap={4}>
            <Stack>
                <Typography variant="h4" component="h2">
                    Faça seu cadastro
                </Typography>
                <Typography variant="body1" component="p">
                    Crie seu usuário e compartilhe suas histórias
                </Typography>
            </Stack>
            <Form component="form" onSubmit={handleSubmit} gap={3} alignItems="flex-end">
                <TextField
                    name="name"
                    id="name"
                    label="Nome"
                    placeholder="Digite seu nome completo..."
                    variant="filled"
                    autoComplete="name"
                    type="text"
                    required
                />
                <TextField
                    name="email"
                    id="email"
                    label="Email"
                    placeholder="Digite seu email..."
                    variant="filled"
                    autoComplete="email"
                    type="email"
                    required
                />
                <TextField
                    name="password"
                    id="password"
                    label="Senha"
                    placeholder="Digite sua senha..."
                    variant="filled"
                    autoComplete="new-password"
                    type="password"
                    required
                />
                <TextField
                    name="new-password"
                    id="new-password"
                    label="Confirmar senha"
                    placeholder="Confirme a sua senha..."
                    variant="filled"
                    autoComplete="new-password"
                    type="password"
                    required
                />

                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};

export default Register;
