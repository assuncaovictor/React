import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "./api";

const Products = () => {
    const { isLoading, data } = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

    return (
        <div>
            <h1>Lista de Produtos</h1>

            <ul>
                {isLoading
                    ? "Carregando..."
                    : data.map((product) => (
                          <li key={product.id}>
                              <h2>{product.name}</h2>
                              <p>R$ {product.price}</p>
                          </li>
                          
                      ))}
            </ul>
        </div>
    );
};

export default Products;
