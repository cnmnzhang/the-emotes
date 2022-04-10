import React, { useState } from "react";
import Entry from "../components/Entry";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Home() {
    const sampleNotes = [
        {
            title: "my title",
            body: "my body",
        },
        {
            title: "another title",
            body: "another body",
        },
        {
            title: "one more title",
            body: "one more body",
        },
    ];
    const [showSideBar, setShowSideBar] = useState(false);
    const openSideBar = () => {
        setShowSideBar(!showSideBar);
        return (
            <Sidebar />
        );
    }
    const sideBar = () => {
        if (showSideBar) {
            return (
                <div className="transition opacity-0 hover:opacity-100">
                <Sidebar />
                </div>
            )
        } else {
            return (
                <button className="absolute left-2 top-2 cursor-pointer" onClick={openSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            )
        }
    }

    return (
        <div className="fixed z-0 h-full w-full bg-sky-50 overflow-auto">
            <Header />
            <div className="z-50">
                {sideBar()}
            </div>

            <div className="z-0 my-40 flex flex-col items-center align-center">
                <div className="App-header text-8xl font-semibold">emotes</div>
                <p className="text-3xl py-2">
                    a safe space for community based journaling and mood analyzing to
                    promote self care
                </p>

                <div className="w-1/2 border-t border-gray-300 my-10" />

                <p className="text-4xl py-2 transition hover:text-rose-400 duration-500">
                    tell the world how you feel
                </p>

                <div className="w-1/4 my-10 space-y-1">
                    <label for="basic" className="text-xs font-medium text-gray-500 ml-2">
                        {" "}
                        Write an entry:{" "}
                    </label>
                    <textarea
                        rows="4"
                        id="basic"
                        placeholder="Start typing..."
                        className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    ></textarea>
                </div>
            </div>

            <div className="container w-1/2">
                <div className="h-56 w-auto grid grid-cols-3 gap-4 content-center overflow-auto space-x-2">
                    {sampleNotes.map((note) => {
                        return (
                            <div className="w-60">
                                <Entry title={note.title} body={note.body} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
