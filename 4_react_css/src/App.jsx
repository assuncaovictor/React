import React from "react";
import Title from "./components/Title";
import User from "./components/User";
import Cars from "./components/Cars";

import "./App.css";

function App() {
    const [approved] = React.useState(false);
    const [redTitle] = React.useState(false);
    const [cars] = React.useState([
        {
            name: "Lorem, ipsum dolor.",
            img: "https://img.freepik.com/free-psd/white-sport-car_176382-1598.jpg?w=2000",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam voluptatum libero quisquam repellendus cumque nulla dolorum expedita commodi. Sunt numquam cupiditate voluptatum! Inventore debitis temporibus aliquam aperiam illum labore.",
        },
        {
            name: "Lorem, ipsum dolor.",
            img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam voluptatum libero quisquam repellendus cumque nulla dolorum expedita commodi. Sunt numquam cupiditate voluptatum! Inventore debitis temporibus aliquam aperiam illum labore.",
        },
        {
            name: "Lorem, ipsum dolor.",
            img: "https://mclaren.scene7.com/is/image/mclaren/DSC00052_6:crop-1x1?wid=1200&hei=1200",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aperiam voluptatum libero quisquam repellendus cumque nulla dolorum expedita commodi. Sunt numquam cupiditate voluptatum! Inventore debitis temporibus aliquam aperiam illum labore.",
        },
    ]);

    return (
        <div className="App">
            <Title component="h1">React com css</Title>
            {/* CSS inline */}
            <p style={{ color: "blue", textAlign: "center" }}>Básico</p>

            {/* CSS inline dinâmico*/}
            <h2 style={approved ? { color: "green" } : { color: "red" }}>Dinâmico</h2>

            {/* Classe dinâmica */}
            <Title component="h2" className={redTitle ? "title-red" : "title-green"}>
                Este título vai ter classe dinâmica
            </Title>

            <User
                name="Victor Assunção Melo"
                email="victor.assuncao.3382@gmail.com"
                avatar="https://avatars.githubusercontent.com/u/90156489?v=4"
            />

            <Cars cars={cars} />
        </div>
    );
}

export default App;
