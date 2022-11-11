const Profile = ({ name, img }) => {
    // destructuring em props
    return (
        <div style={{ width: "100%" }}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    );
};

export default Profile;
