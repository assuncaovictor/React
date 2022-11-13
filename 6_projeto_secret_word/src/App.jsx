/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import style from "./App.module.css";
import Form from "./components/Form";
import Word from "./components/Word";

const App = () => {
    const words = [
        {
            name: ["a", "b", "a", "c", "a", "t", "e"],
            tip: "Fruta",
        },
        {
            name: ["s", "e", "l", "e", "c", "t"],
            tip: "Componente HTML",
        },
        {
            name: ["b", "r", "a", "s", "i", "l"],
            tip: "País",
        },
    ];

    const [word, setWord] = React.useState(false);

    const [letters, setLetters] = React.useState([]);
    const [attempts, setAttempts] = React.useState(3);
    const [score, setScore] = React.useState(0);

    const handleWords = () => {
        const currentWord = Math.floor(Math.random() * words.length);
        setWord(words[currentWord]);
        words.splice(currentWord, 1);
        console.log("words", words);
    };

    React.useEffect(handleWords, []);

    return (
        <div className={style.app}>
            <h1>Secret Word</h1>
            {word && (
                <>
                    <Word word={word} letters={letters} />
                    <Form
                        handleWords={handleWords}
                        letters={letters}
                        setLetters={setLetters}
                        attempts={attempts}
                        setAttempts={setAttempts}
                        word={word.name}
                        score={score}
                        setScore={setScore}
                    />
                </>
            )}

            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                <p>Letras já utilizadas</p>
                <span>{letters.join(", ")}</span>
            </div>

            <div className={style.score}>
                <p>
                    pontuação: <span>{score}</span>
                </p>

                <p>
                    Tentativas: <span>{attempts}</span>
                </p>
            </div>
        </div>
    );
};

export default App;
