import "./style.css";
import night from "../../assets/img/night.png";
import React from "react";

const Banner = () => {
    const bannerDay = {
        name: "Japão de dia",
        img: "/day.jpg", // import de imagens em públic
    };

    const bannerNight = {
        name: "Japão de noite",
        img: night, // import da imagem em src
    };
    const [banner, setBanner] = React.useState(bannerDay);

    const handleBanner = () => {
        if (banner.name === bannerDay.name) {
            return setBanner(bannerNight);
        }

        setBanner(bannerDay);
    };

    return (
        <>
            <div className="bannerContainer">
                <p>{banner.name}</p>
                <img src={banner.img} alt="cidade de dia" className="banner" />
            </div>

            <button type="button" onClick={handleBanner}>
                Alterar imagem
            </button>
        </>
    );
};

export default Banner;
