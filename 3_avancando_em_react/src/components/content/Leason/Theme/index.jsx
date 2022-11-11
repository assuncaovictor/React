const Theme = ({ theme, handleClick }) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
            className="theme"
        >
            {theme === "light" ? "Escuro" : "Claro"}
        </button>
    );
};

export default Theme;
