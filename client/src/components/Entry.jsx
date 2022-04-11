import React, { useState } from "react";

const Entry = ({ title, body, hearts }) => {
  const [like, setLike] = useState(false);
  console.log(hearts);
  const [numHearts, setNumHearts] = useState(parseInt(hearts));

  function heartClicked() {
    setLike(true);
    setNumHearts(numHearts + 1);
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
  return (
    <div className="h-60 w-48 px-4 py-2 border border-gray-100 bg-rose-100 rounded-xl">
      {heartButton()}

      <div className="mt-4 text-gray-500 sm:pr-8">
        <h1 className="mt-4 text-xl font-bold text-gray-900">{title}</h1>
        <p className="hidden mt-2 text-sm sm:block">{body}</p>
      </div>
    </div>
  );
};

export default Entry;
