const { REACT_APP_API_URL } = process.env;
const API_URL = REACT_APP_API_URL;

const getAllEntries = async () => {
  const response = await fetch(`${API_URL}entry/`);

  if (!response.ok) {
    const message = `An error occurred: ${response.statusText}`;
    window.alert(message);
    return;
  }
  const entries = await response.json();
  return entries;
};

const createEntry = async (userEmotion, userBody) => {
  const entry = { emotion: userEmotion, body: userBody, hearts: 0 };
  await fetch(`${API_URL}entry/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  }).catch((error) => {
    window.alert(error);
    return;
  });
};

const updateEntry = async (entryID, userEmotion, userBody, heartsCount) => {
  const entry = { emotion: userEmotion, body: userBody, hearts: heartsCount };
  await fetch(`${API_URL}entry/update/${entryID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  }).catch((error) => {
    window.alert(error);
    return;
  });
};

const API = {
  getAllEntries,
  createEntry,
  updateEntry
};

export default API;
