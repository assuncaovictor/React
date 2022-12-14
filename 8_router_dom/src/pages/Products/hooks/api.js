import { deleteMethod, postMethod, url } from "../../../hooks/api";

const read = (url) => fetch(url ? url : `${url}products`).then((res) => res.json());
const create = (product) => fetch(`${url}products`, postMethod(product));
const del = (id) => fetch(`${url}products/${id}`, deleteMethod);

export { read, create, del };
