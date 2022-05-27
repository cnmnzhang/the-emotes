import React from "react";
import EntriesList from "../components/EntriesList";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="my-2 flex flex-col items-center align-center">
      <div className="text-8xl font-semibold mb-4">emotes</div>
      <p className="text-3xl ">
        a safe space for community based journaling and mood analyzing to
        promote self care
      </p>

      <div className="w-1/2 border-t border-gray-300 my-20" />

      <Link
        to="/create"
        className="text-4xl py-2 mb-20 cursor-pointer transition-[text_1s,underline_2s] duration-500 hover:text-rose-400 hover:underline decoration-dotted "
      >
        create a post and tell the world how you feel
      </Link>

      <div className="w-3/4">
        <EntriesList />
      </div>
    </div>
  );
}

export default Home;
