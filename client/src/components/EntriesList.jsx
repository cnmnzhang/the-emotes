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

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <div className="flex flex-row justify-center flex-wrap overflow-auto space-x-4 py-4">
          {entries.map((note) => {
            return (
              <div>
                <Entry
                  title={note.title}
                  body={note.body}
                  hearts={note.hearts}
                />
              </div>
            );
          })}
        </div>
    </div>
  );
}
