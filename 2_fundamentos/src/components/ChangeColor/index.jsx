import React from "react";
import "./style.css";

const ChangeColor = () => {
    // Executa um evento de click
    const [color, setColor] = React.useState("#1e1801");

    const colors = [
        {
            name: "preto",
            hex: "#1e1801",
        },
        {
            name: "vermelho",
            hex: "#f85741",
        },

        {
            name: "amarelo",
            hex: "#f39708",
        },
        {
            name: "azul",
            hex: "#0e9094",
        },
    ];

    const handleColor = (color) => {
        setColor(color);
    };

    return (
        <>
            <p style={{ color: color }}>Isso muda de cor</p>
            <div className="buttonContainer">
                {colors.map(({ name, hex }) => (
                    <button style={{ backgroundColor: hex, color: "#fefefe" }} onClick={() => handleColor(hex)}>
                        {name}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ChangeColor;
