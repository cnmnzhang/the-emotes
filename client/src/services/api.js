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

const createEntry = async (userEmotion, userBody) => {
  const entry = { emotion: userEmotion, body: userBody, hearts: 0 };
  // const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing)
  await fetch("http://localhost:8080/record/add", {
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

const API = {
  getAllEntries,
  createEntry,
};

export default API;
