const UserDetail = ({ users }) => (
    <ul>
        {users.map(({ name, age, job }, index) => (
            <li key={"user_" + index}>
                <h3>{name}</h3>
                <p>{age}</p>
                <p>{job}</p>
                <p>Pode tirar carteira de habilitação: {age > 18 ? "sim" : "não"}</p>
            </li>
        ))}
    </ul>
);

export default UserDetail;
