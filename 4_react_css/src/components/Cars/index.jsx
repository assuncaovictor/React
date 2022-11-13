import React from "react";
import styles from "./Car.module.css";

const Cars = ({ cars }) => {
    return (
        <div className={styles["container"]}>
            {cars.map(({ name, img, description }) => (
                <div className={styles["car"]}>
                    <h3 className={styles["name"]}>{name}</h3>
                    <div className={styles["info"]}>
                        <img src={img} alt={name} className={styles["image"]} />
                        <p className={styles["description"]}>{description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cars;
