import React, { useEffect, useState } from "react";
import Entry from "./Entry";
import ApiClient from "../services/api";

export default function EntriesList() {
  const [entries, setEntries] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const entriesList = await ApiClient.getAllEntries();
        setEntries(entriesList);
      } catch (err) {
        setEntries([]);
      }
    };

    fetchData();
  }, []);

  // This method will map out the entries on the table
  function entriesList() {
    return entries.map((entry) => {
      return <Entry title={entry.title} body={entry.body} hearts={entry._id} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Record List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>{entriesList()}</tbody>
      </table>
    </div>
  );
}
