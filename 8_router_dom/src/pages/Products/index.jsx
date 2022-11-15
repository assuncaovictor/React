import React from "react";
import { useQuery } from "@tanstack/react-query";
import { read, del } from "./hooks/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import style from "./Products.module.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate();

    const { isLoading, data } = useQuery({ queryKey: ["products"], queryFn: read });

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: del,
        onError: () => {
            alert("Algo deu errado");
        },
        onSettled: () => {
            queryClient.invalidateQueries("products");
        },
        cacheTime: 600,
        retry: true,
    });

    return (
        <div style={{ width: "100%" }}>
            <h1 className="title">Lista de produtos</h1>

            <table border={1} className={style.table}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <td></td>
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
                                <td>
                                    <h2>{name}</h2>
                                </td>
                                <td>R$ {price}</td>
                                <td>
                                    <button onClick={() => navigate(`/products/${id}`)} style={{ marginRight: ".75rem" }}>
                                        Exibir
                                    </button>
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
