const { REACT_APP_API_URL } = process.env;
const API_URL = REACT_APP_API_URL;

const getAllEntries = async () => {
    const response = await fetch(`http://localhost:8080/entry/`);

    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
    }
    const entries = await response.json();
    return entries;
};

const createEntry = async (emotion, body, hearts) => {
    const entry = { emotion, body, hearts }

    await fetch("http://localhost:5000/record/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
    })
        .catch(error => {
            window.alert(error);
            return;
        });
};

const ApiClient = {
    getAllEntries,
    createEntry
};

export default ApiClient;