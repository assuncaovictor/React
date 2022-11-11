import React from "react";
import Banner from "../../Banner";
import List from "../../List";
import Profile from "../../Profile";
import Quote from "../../Quote";

const Leason = ({ theme }) => {
    return (
        <>
            <Banner theme={theme} />
            <div style={{ padding: "0 2rem" }}>
                <hr />

                <div style={{ display: "flex", flexDirection: "row" }}>
                    <List />
                    {/* passando por props */}
                    <Profile img={"https://avatars.githubusercontent.com/u/90156489?v=4"} name={"Victor Assunção Melo"} />
                    {/* Reaproveitamento de componente */}
                    <Profile img={"https://avatars.githubusercontent.com/u/85894408?v=4"} name={"José Mourão"} />
                </div>

                <hr />

                <h2>Citações</h2>
                <ul>
                    <li>
                        {/* Children como props */}
                        <Quote url="https://citacoes.in/" author="Jigoro Kano" date="1860 - 1938">
                            A derrota na competição e no treinamento não deve ser uma fonte de desânimo ou de desespero. É sinal da
                            necessidade de uma prática maior e de esforços redobrados.
                        </Quote>
                    </li>
                    <li>
                        {/* Reaproveitamento de componente */}
                        <Quote
                            url="https://citacoes.in/citacoes/1982288-anne-frank-e-realmente-uma-maravilha-que-eu-nao-tenha-abandon/"
                            author="Anne Frank"
                            date="1929 - 1945"
                        >
                            É realmente uma maravilha que eu não tenha abandonado todos os meus ideais, porque eles parecem tão absurdos e
                            impossíveis de realizar. Ainda os guardo, porque apesar de tudo, eu ainda acredito que as pessoas são realmente
                            boas de coração.
                        </Quote>
                    </li>
                </ul>

                <hr />
            </div>
        </>
    );
};

export default Leason;
