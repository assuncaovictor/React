import "./style.css";
import night from "../../../../assets/img/night.png";
import React from "react";

const Banner = ({ theme }) => {
    const [banner, setBanner] = React.useState({
        name: "Japão de dia",
        img: "/day.jpg", // import de imagens em públic
    });

    React.useEffect(() => {
        const bannerDay = {
            name: "Japão de dia",
            img: "/day.jpg", // import de imagens em públic
        };

        const bannerNight = {
            name: "Japão de noite",
            img: night, // import da imagem em src
        };

        if (theme === "light") {
            return setBanner(bannerDay);
        }

        setBanner(bannerNight);
    }, [theme]);

    return (
        <>
            <div className="bannerContainer">
                <p>{banner.name}</p>
                <img src={banner.img} alt="cidade de dia" className="banner" />
            </div>
        </>
    );
};

export default Banner;
