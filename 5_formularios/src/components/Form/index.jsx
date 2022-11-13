import React from "react";
import styles from "./Form.module.css";

const Form = ({ user }) => {
    const [name, setName] = React.useState(user ? user.name : "");
    const [email, setEmail] = React.useState(user ? user.email : "");
    const [typeMessage, setTypeMessage] = React.useState(0);
    const [message, setMessage] = React.useState();

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    const handleTypeMessage = (e) => {
        setTypeMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("name: ", name);
        console.log("email: ", email);

        // Limpando formulário
        setEmail("");
        setName("");
        setMessage("");
    };

    return (
        <fieldset className={styles.fildset}>
            <legend>Formulário de contato</legend>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles["container-input"]}>
                    <span>Nome</span>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="Digite o seu nome"
                        autoComplete="name"
                        className={styles.input}
                        onChange={handleName}
                        required
                    />
                </label>
                <label className={styles["container-input"]}>
                    <span>E-mail</span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        placeholder="Digite o seu e-mail"
                        autoComplete="email"
                        className={styles.input}
                        onChange={handleEmail}
                        required
                    />
                </label>
                <label className={styles["container-input"]}>
                    <span>E-mail</span>
                    <select
                        name="type-message"
                        id="type-message"
                        value={typeMessage}
                        className={styles.input}
                        onChange={handleTypeMessage}
                        style={{ width: "100%" }}
                    >
                        <option value="0">Dúvida</option>
                        <option value="1">Elogio</option>
                        <option value="2">Reclamação</option>
                    </select>
                </label>
                <label className={styles["container-input"]}>
                    <span>Mensagem</span>
                    <textarea
                        name="message"
                        id="message"
                        rows="6"
                        onChange={handleMessage}
                        className={styles.input}
                        placeholder="Digita aqui sua mensagem"
                        style={{ resize: "none" }}
                        value={message}
                    />
                </label>
                <button type="submit" className={styles["button-submit"]}>
                    Enviar
                </button>
            </form>
        </fieldset>
    );
};

export default Form;
