import React from "react";

const Banner = () => {
    const [citys, setCitys] = React.useState([
        { id: 1, name: "Tóquio", population: 13704569 },
        { id: 2, name: "Yokohama", population: 3676188 },
        { id: 3, name: "Osaka", population: 2640702 },
    ]);

    const handleDelete = () => {
        const randomNumber = Math.floor(Math.random() * citys.length + 1);

        setCitys((prevCitys) => prevCitys.filter(({ id }) => randomNumber !== id));
    };

    return (
        <section id="citys" style={{ width: "100%" }}>
            <h2>Cidades mais populosas do Japão </h2>

            <ol>
                {citys.map(
                    (
                        { name, population, id } // map de um array de dados em react
                    ) => (
                        // key é a chave única que ajuda o react a renderizar o componente com map
                        <li key={id}>
                            <h3 style={{ display: "inline-block" }}>{name}</h3>: <span>{population}</span>
                        </li>
                    )
                )}
            </ol>

            <button onClick={handleDelete}>Apagar cidade</button>
        </section>
    );
};

export default Banner;
