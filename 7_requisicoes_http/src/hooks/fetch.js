const url = "http://localhost:3000/";

const postMethod = (data) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

const deleteMethod = {
    method: "DELETE",
};

const fetchProducts = () => fetch(`${url}products`).then((res) => res.json());
const fetchProduct = (product) => fetch(`${url}products`, postMethod(product));

const deleteProduct = (id) => fetch(`${url}products/${id}`, deleteMethod);

export { fetchProducts, fetchProduct, deleteProduct };
