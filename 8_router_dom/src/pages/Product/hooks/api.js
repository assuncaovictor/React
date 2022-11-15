import { deleteMethod, updateMethod, url } from "../../../hooks/api";

const read = (id) => fetch(`${url}products/${id}`).then((res) => res.json());
const update = (product) => fetch(`${url}products`, updateMethod(product));
const del = (id) => fetch(`${url}products/${id}`, deleteMethod);

export { read, update, del };
