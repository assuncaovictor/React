const url = "http://localhost:3000/";

const postMethod = (data) => ({
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

const deleteMethod = {
    method: "DELETE",
};

const updateMethod = (data) => ({
    method: "UPDATE",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

export { url, postMethod, deleteMethod, updateMethod };
