import React from "react";
import Entry from "../components/Entry";
import { Link } from "react-router-dom";

function Home() {
  const sampleNotes = [
    {
      title: "my title",
      body: "my body",
      hearts: 10,
    },
    {
      title: "another title",
      body: "another body",
      hearts: 0,
    },
    {
      title: "one more title",
      body: "one more body",
      hearts: 99,
    },
    {
      title: "one more title",
      body: "for symmetry",
      hearts: 99,
    },
  ];

  return (
    <div className="my-40 py-2 px-2 flex flex-col items-center align-center">
      <div className="App-header text-8xl font-semibold">emotes</div>
      <p className="text-3xl py-2">
        a safe space for community based journaling and mood analyzing to
        promote self care
      </p>

      <div className="w-1/2 border-t border-gray-300 my-10" />

      <Link
        to="/create"
        className="text-4xl py-2 mb-20 cursor-pointer transition-[text_1s,underline_2s] duration-500 hover:text-rose-400 hover:underline decoration-dotted "
      >
        create a post and tell the world how you feel
      </Link>

      <div className="container w-3/4">
        <div className="flex flex-row flex-wrap overflow-auto space-x-4 py-4">
          {sampleNotes.map((note) => {
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
    </div>
  );
}

export default Home;
