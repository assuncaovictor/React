import React from "react";
import { useQuery } from "@tanstack/react-query";
import { read } from "./hooks/api";
import { useParams } from "react-router-dom";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

const Product = () => {
    const { id } = useParams();
    const { isLoading, data } = useQuery({ queryKey: ["products"], queryFn: () => read(id) });

    // const queryClient = useQueryClient();

    // const mutation = useMutation({
    //     mutationFn: del,
    //     onError: () => {
    //         alert("Algo deu errado");
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries("create");
    //     },
    // });

    return (
        <div style={{ width: "100%" }}>
            <h1 className="title">{isLoading ? "Carregando..." : data.name}</h1>
            {isLoading ? (
                "Carregando..."
            ) : (
                <div>
                    <p>{data.id}</p>
                    <p>R$ {data.price}</p>
                </div>
            )}
        </div>
    );
};

export default Product;
