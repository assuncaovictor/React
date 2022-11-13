const fetchProducts = () => fetch("http://localhost:3000/products").then((res) => res.json());

export { fetchProducts };
