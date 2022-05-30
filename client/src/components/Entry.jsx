import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ApiClient from "../services/api";
import { toast } from "react-toastify";

const Entry = ({ entryID, title, body, hearts }) => {
  const navigate = useNavigate();
  const [like, setLike] = useState(false);
  const [numHearts, setNumHearts] = useState(parseInt(hearts));
  const [color, setColor] = useState("bg-sky-100");

  function heartClicked() {
    setLike(true);
    setNumHearts(numHearts + 1);

    const updateData = async () => {
      try {
        await ApiClient.updateEntry(entryID, title, body, numHearts + 1);
      } catch (err) {
        console.log(err);
      }
    };
    updateData();
  }

  function heartButton() {
    if (!like) {
      return (
        <div className="flex flex-row">
          <button onClick={heartClicked}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <h1 className="ml-1">{numHearts}</h1>
        </div>
      );
    }
    return (
      <div className="flex flex-row">
        <button onClick={heartClicked}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="red"
            viewBox="0 0 24 24"
            stroke="red"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <h1 className="ml-1">{numHearts}</h1>
      </div>
    );
  }

  function trashButton() {
    function trashClicked() {
      const deletePost = async () => {
        try {
          await ApiClient.deleteEntry(entryID);
          navigate(`/`);
          toast.success("Post flagged and deleted!", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
          });
        } catch (err) {
          toast.warning("Failed to flag and delete", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
          });
        }
      };
      deletePost();
      window.location.reload(false);
    }

    return (
      <button onClick={trashClicked}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="gray"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  }

  useEffect(() => {
    function textColor() {
      const text = title + " " + body;
      const colorML = {
        "bg-red-200": ["angry", "mad", "furious", "hungry"],
        "bg-yellow-200": ["mellow", "sun", "happy", "new"],
        "bg-green-200": ["need", "grow", "outside", "earth"],
        "bg-blue-200": ["blue", "sad", "water", "jazzy"],
        "bg-gray-200": ["gray"],
        "bg-purple-200": ["amazing", "berry"],
      };

      for (const [key, value] of Object.entries(colorML)) {
        value.forEach((val, i) => {
          if (text.includes(val)) {
            setColor(key);
          }
        });
      }
    }

    textColor();
  }, []);

  return (
    <div
      className={`h-60 w-48 px-4 py-2 border border-gray-100 ${color} rounded-xl transition hover:shadow-lg duration:500`}
    >
      <div className="flex flex-row justify-between">
        {heartButton()}
        {trashButton()}
      </div>
      <div className="mt-4 sm:pr-8">
        <h1 className="mt-4 text-xl font-bold">{title}</h1>
        <p className="hidden mt-2 text-sm sm:block">{body}</p>
      </div>
    </div>
  );
};

export default Entry;
