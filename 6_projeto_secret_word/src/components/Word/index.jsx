import React from "react";
import style from "./Word.module.css";

const Word = ({ word: { name, tip }, letters }) => {
    
    return (
        <div>
            <div className={style.tip}>
                Dica: <h2>{tip}</h2>
            </div>
            <div className={style.container}>
                {name.map((letter, index) => {
                    return (
                        <React.Fragment key={"letter_" + index}>
                            {letters.includes(letter) ? <span className={style.letter}>{letter}</span> : <span className={style.letter} />}
                        </React.Fragment>
                    );
                })}
            </div>
        </div>
    );
};

export default Word;
