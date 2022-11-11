import React from "react";
import UserDetail from "../../UserDetail";

const Questions = () => {
    const [users] = React.useState([
        { name: "Victor Assunção Melo", age: 22, job: "Programador" },
        { name: "kayky", age: 17, job: "desempregado" },
        { name: "Thaís", age: 20, job: "Designer" },
    ]);

    return <UserDetail users={users} />;
};

export default Questions;
