import React from "react";
import { FormControl, TextField, Container } from "../style";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

import { Formik } from "formik";
import * as Yup from "yup";
import useAuthentication from "../../../hooks/useAuthentication";
import { useToastContext } from "../../../hooks/useToast";

const Register = () => {
    const { addToast } = useToastContext();
    const { login, authError } = useAuthentication();

    const handleSubmit = async (data) => {
        login(data);

        if (authError) {
            return addToast(authError, "error");
        }

        addToast("Login realizado com sucesso", "success");
    };

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Insira um e-mail válido").required("E-mail é um campo obrigatório"),
        password: Yup.string().required("Insira uma senha"),
    });

    return (
        <Container gap={4}>
            <Stack>
                <Typography variant="h4" component="h2">
                    Entrar
                </Typography>
                <Typography variant="body1" component="p">
                    Faça o login para utilizar nosso sistema
                </Typography>
            </Stack>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => await handleSubmit(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, isSubmitting, values, touched, errors }) => (
                    <Stack
                        component="form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(e);
                        }}
                        gap={3}
                        alignItems="flex-end"
                    >
                        <FormControl>
                            <TextField
                                name="email"
                                id="email"
                                label="Email"
                                placeholder="Digite seu email..."
                                variant="filled"
                                autoComplete="email"
                                type="email"
                                value={values.email}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email ? errors.email : undefined}
                                required
                            />

                            <TextField
                                name="password"
                                id="password"
                                label="Senha"
                                placeholder="Digite sua senha..."
                                variant="filled"
                                autoComplete="current-password"
                                type="password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password ? errors.password : undefined}
                            />

                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                {isSubmitting ? <CircularProgress size={20} /> : "Entrar"}
                            </Button>
                        </FormControl>
                    </Stack>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
