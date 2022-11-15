import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [value, setValue] = React.useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/products?q=${value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange} />
            <button type="submit">Pesquisar</button>
        </form>
    );
};

export default Search;
