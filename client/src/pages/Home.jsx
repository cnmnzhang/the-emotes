import React, { useState } from "react";
import Entry from "../components/Entry";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
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
    ];
    const [showSideBar, setShowSideBar] = useState(false);

    const openSideBar = () => {
        setShowSideBar(!showSideBar);
        return <Sidebar />;
    };
    const sideBar = () => {
        if (showSideBar) {
            return (
                <div className="transition opacity-0 hover:opacity-100">
                    <Sidebar />
                </div>
            );
        } else {
            return (
                <button
                    className="absolute left-2 top-2 cursor-pointer"
                    onClick={openSideBar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            );
        }
    };

    return (
        <div className="fixed z-0 h-full w-full bg-sky-50 overflow-auto">
            <Header />
            <div className="z-50">{sideBar()}</div>

            <div className="z-0 my-40 py-2 px-2 flex flex-col items-center align-center">
                <div className="App-header text-8xl font-semibold">emotes</div>
                <p className="text-3xl py-2">
                    a safe space for community based journaling and mood analyzing to
                    promote self care
                </p>

                <div className="w-1/2 border-t border-gray-300 my-10" />

                <Link
                    to="/create"
                    className="text-4xl py-2 cursor-pointer transition-[text_1s,underline_2s] duration-500 hover:text-rose-400 hover:underline decoration-dotted "
                >
                    tell the world how you feel
                </Link>

                <div className="container w-1/2">
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
        </div>
    );
}

export default Home;
