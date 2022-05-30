import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const CreatePost = () => {
  const navigate = useNavigate();
  const [entryTitle, setTitle] = useState("");
  const [entryBody, setBody] = useState("");

  const submitEntry = async () => {
    try {
      await API.createEntry(entryTitle, entryBody);

      navigate(`/`);
      toast.success("Post submitted! Refresh to see post", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } catch (err) {
      toast.warning("Failed to submit post", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }
  };

  return (
    <div className="w-full py-2 px-2 flex flex-col items-center align-center">
      <div id="write" className="w-full">
        <input
          type="text"
          placeholder="one word to describe how you feel"
          name="title"
          value={entryTitle}
          onChange={(event) => setTitle(event.target.value)}
          maxLength={60}
          className="my-2 overflow-hidden w-full bg-white rounded-md border border-gray-200 transition focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
          required
        />
      </div>

      <div className="overflow-hidden w-full bg-white rounded-md border border-gray-200 transition focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
        <textarea
          rows="4"
          id="editor"
          placeholder="start typing..."
          name="body"
          value={entryBody}
          onChange={(event) => setBody(event.target.value)}
          className="block w-full border-0 bg-transparent text-sm transition focus:border-blue-600 focus:ring-0 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
        ></textarea>
        <div className="flex items-center justify-between p-2">
          <div className="flex space-x-1">
            <button
              type="button"
              className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded bg-white px-2 py-2 text-sm text-gray-800 transition hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              <svg
                className="h-4 w-4 shrink-0 fill-gray-500 stroke-gray-500"
                viewBox="0 0 256 256"
              >
                <circle
                  cx="128"
                  cy="128"
                  r="96"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></circle>
                <circle cx="92" cy="108" r="16"></circle>
                <circle cx="164" cy="108" r="16"></circle>
                <path
                  d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></path>
              </svg>
            </button>
          </div>
          <button
            className="shadow bg-rose-300 hover:bg-rose-400 focus:shadow-outline focus:ring-2 focus:ring-rose-300 text-white text-sm font-sm font-bold py-1.5 px-3 rounded"
            type="submit"
            onClick={() => submitEntry()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
