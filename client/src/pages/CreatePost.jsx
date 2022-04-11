import React, { useState } from 'react'

const CreatePost = () => {

    const [entryTitle, setTitle] = useState("");
    const [entryBody, setBody] = useState("");

    const submitEntry = () => {
        console.log(entryTitle);
        console.log(entryBody);
    };

    return (
        <div className='fixed z-0 h-full w-full bg-sky-50 overflow-auto'>
            <div className="my-40 py-2 px-2 flex flex-col items-center align-center">
                <div className="w-1/4">
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

                    <div className="overflow-hidden bg-white rounded-md border border-gray-200 transition focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
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
                                    className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded bg-white px-2 py-2 text-xs font-medium text-gray-800 transition hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                >
                                    <svg
                                        className="h-4 w-4 shrink-0 stroke-gray-500"
                                        viewBox="0 0 256 256"
                                    >
                                        <path
                                            d="M96,176l95.8-92.2a28,28,0,0,0-39.6-39.6L54.1,142.1a47.9,47.9,0,0,0,67.8,67.8L204,128"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="24"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center rounded bg-white px-2 py-2 text-xs font-medium text-gray-800 transition hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
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
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="24"
                                        ></circle>
                                        <circle cx="92" cy="108" r="16"></circle>
                                        <circle cx="164" cy="108" r="16"></circle>
                                        <path
                                            d="M169.6,152a48.1,48.1,0,0,1-83.2,0"
                                            fill="none"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="24"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-blue-700 bg-blue-700 px-3 py-1.5 text-xs font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                                onClick={submitEntry()}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreatePost