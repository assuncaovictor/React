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

    const { auth, createUser, authError } = useAuthentication();

    const handleSubmit = async ({ name, email, password }) => {
        await createUser({ name, email, password });

        if (authError) {
            return addToast("Algo deu errado na criação do usuário", "error");
        }

        addToast("Usuário criado com sucesso.", "success");
    };

    const initialValues = {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Insira um e-mail válido").required("E-mail é um campo obrigatório"),
        name: Yup.string().min(3, "O nome deve ter no mínimo 3 caracteres").required("Nome é um campo obrigatório"),
        password: Yup.string().min(6, "Insira uma senha com 6 caracteres mínimo").required("Insira uma senha"),
        passwordConfirmation: Yup.string()
            .required("Campo obrigatório")
            .oneOf([Yup.ref("password"), null], "As senhas informadas não são iguais!"),
    });

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
                                name="name"
                                id="name"
                                label="Nome"
                                placeholder="Digite seu nome completo..."
                                variant="filled"
                                autoComplete="name"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name ? errors.name : undefined}
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
                                autoComplete="new-password"
                                type="password"
                                value={values.password}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password ? errors.password : undefined}
                            />

                            <TextField
                                name="passwordConfirmation"
                                id="passwordConfirmation"
                                label="Confirmar senha"
                                placeholder="Confirme sua senha..."
                                variant="filled"
                                autoComplete="new-password"
                                type="password"
                                value={values.passwordConfirmation}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.passwordConfirmation && Boolean(errors.passwordConfirmation)}
                                helperText={
                                    touched.passwordConfirmation && errors.passwordConfirmation ? errors.passwordConfirmation : undefined
                                }
                            />

                            <Button type="submit" variant="contained" disabled={isSubmitting}>
                                {isSubmitting ? <CircularProgress size={20} /> : "Cadastrar"}
                            </Button>
                        </FormControl>
                    </Stack>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
