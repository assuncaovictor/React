import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import style from "./Product.module.css";
import { fetchProduct } from "../../hooks/fetch";

const Product = () => {
    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();

    const queryClient = useQueryClient();

    const [isLoading, setIsLoading] = React.useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handlePrice = (e) => {
        setPrice(e.target.value);
    };

    const mutation = useMutation({
        mutationFn: fetchProduct,
        onSuccess: () => {
            setIsLoading(false);
        },
        onError: () => {
            alert("Algo deu errado");
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        mutation.mutate({ name, price });
        setName("");
        setPrice("");
    };
    return (
        <form className={style.form} onSubmit={handleSubmit} method="POST">
            <fieldset>
                <legend>Cadastro de Produto</legend>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="digite o nome do produto"
                        autoComplete="off"
                        value={name}
                        onChange={handleChangeName}
                    />
                </label>

                <label>
                    <span>Preço:</span>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        required
                        placeholder="digite o preço do produto"
                        autoComplete="off"
                        value={price}
                        onChange={handlePrice}
                    />
                </label>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Cadastrar"}
                </button>
            </fieldset>
        </form>
    );
};

export default Product;
