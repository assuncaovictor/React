import React from "react";
import "./style.css";

const TemplateExpression = () => {
    // Imprimir dados em templates
    const data = {
        name: "Victor Assunção Melo",
        email: "victor.assuncao.3382@gmail.com",
        avatar: "https://avatars.githubusercontent.com/u/90156489?v=4",
    };

    return (
        <div className="container">
            <img className="avatar" src={data.avatar} alt={data.name} />
            <div>
                <h2 className="name">{data.name}</h2>
                <h3 className="email">{data.email}</h3>
            </div>
        </div>
    );
};

export default TemplateExpression;
