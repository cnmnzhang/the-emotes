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
      <div className="flex flex-row flex-wrap content-center items-center w-full justify-center overflow-x-auto gap-x-4 gap-y-4">
          {entries.map((note) => {
            return (
              <div>
                <Entry
                  entryID={note._id}
                  title={note.emotion}
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
