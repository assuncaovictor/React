import React from "react";
import styles from "./User.module.css";

const user = ({ name, avatar, email }) => {
    return (
        <div className={styles["container"]}>
            <img src={avatar} alt={name} className={styles["img-profile"]} />
            <div className={styles["data-container"]}>
                <p className={styles["info"]}>
                    Nome: <h3 className={styles["data"]}>{name}</h3>
                </p>
                <p className={styles["info"]}>
                    E-mail: <p className={styles["data"]}>{email}</p>
                </p>
            </div>
        </div>
    );
};

export default user;
