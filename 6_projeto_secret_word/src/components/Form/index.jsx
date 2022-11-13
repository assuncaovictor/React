/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import style from "./Form.module.css";

const Form = ({ letters, setLetters, attempts, setAttempts, word, score, setScore, handleWords }) => {
    const [value, setValue] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setLetters([...letters, value]);

        if (letters.includes(value)) {
            setValue("");
            alert("A letra já foi digitada");
            return;
        }

        if (!word.includes(value)) {
            if (attempts === 1) {
                setAttempts(attempts - 1);
                alert(`Todas as tentativas usadas, seu placar final é: ${score}`);
                return;
            }

            setAttempts(attempts - 1);
            return setValue("");
        }

        if (word.includes(value)) {
            setScore(score + 10 + attempts);
            setValue("");
        }

        if (letters.includes(...word)) {
            console.log("tem tudo");
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    React.useEffect(() => {
        let isComplete = true;
        word &&
            word.forEach((letter) => {
                if (!letters.includes(letter)) isComplete = false;
            });

        console.log("isComplete", isComplete);
        if (isComplete) {
            setScore(score + 10 * attempts);
            handleWords();
            setLetters([]);
            setValue("");
            setAttempts(3);
        }
        
    }, [letters, word]);

    return (
        <fieldset className={style.form}>
            <legend>Tente advinhar uma letra da palavra:</legend>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="letter"
                    id="letter"
                    minLength={1}
                    maxLength={1}
                    required
                    value={value}
                    onChange={handleChange}
                    disabled={attempts === 0}
                />
                <button type="submit">Enviar</button>
            </form>
        </fieldset>
    );
};

export default Form;
