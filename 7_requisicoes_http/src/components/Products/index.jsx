import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, deleteProduct } from "../../hooks/fetch";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import style from "./Products.module.css";

const Product = () => {
    const { isLoading, data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: deleteProduct,
        onError: () => {
            alert("Algo deu errado");
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    });

    return (
        <div style={{ width: "100%" }}>
            <h1 className={style.title}>Lista de Produtos</h1>

            <table border={1} className={style.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td>Carregando...</td>
                            <td>Carregando...</td>
                            <td>Carregando...</td>
                        </tr>
                    ) : (
                        data.map(({ id, name, price }) => (
                            <tr key={id}>
                                <td>{name}</td>
                                <td>R$ {price}</td>
                                <td>
                                    <button onClick={() => mutation.mutate(id)}>Deletar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Product;
