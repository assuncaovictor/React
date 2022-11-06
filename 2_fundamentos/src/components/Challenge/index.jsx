import React from "react";

const Challenge = () => {
    const values = [22, 13];

    const handleSum = () => {
        const sum = values.reduce((sum, i) => sum + i);
        console.log(sum);
    };

    return (
        <div>
            <h1>Exercício</h1>
            <ol>
                <li>Crie um componente chamado challenger;</li>
                <li>Importe-o em App.js;</li>
                <li>no componente criado faça dois valores numéricos;</li>
                <li>Imprima este valor no componente;</li>
                <li>Crie também um evento de click que soma estes dois valores e exibe no console.</li>
            </ol>

            <div>
                {values.map((value, i) => (
                    <p key={i}>
                        Valor {i + 1}: {value}
                    </p>
                ))}

                <button onClick={handleSum}>Somar no console</button>
            </div>
        </div>
    );
};

export default Challenge;
