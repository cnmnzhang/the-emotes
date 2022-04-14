import React, { useEffect, useState } from "react";
import Entry from "./Entry";

 
export default function EntriesList() {
 const [entries, setEntries] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getEntries() {
     const response = await fetch(`http://localhost:8080/entry/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const entries = await response.json();
     setEntries(entries);
   }
 
   getEntries();
 
   return;
 }, [entries.length]);

 
 // This method will map out the entries on the table
 function entriesList() {
   return entries.map((entry) => {
     return (
       <Entry
         title={entry.title}
         body={entry.body}
         hearts={entry._id}
       />
     );
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