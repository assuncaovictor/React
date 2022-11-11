const FloatButton = ({ handleClick, children }) => {
    return (
        <button onClick={handleClick} className="fixed button">
            {children}
        </button>
    );
};

export default FloatButton;
