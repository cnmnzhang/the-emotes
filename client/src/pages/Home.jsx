import Entry from "../components/Entry";
import Header from "../components/Header";

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
    return (
        <div className="fixed h-full w-full bg-cyan-50 overflow-auto">
            <Header />

            <div className="my-20 flex flex-col items-center align-center">
                <div className="App-header text-5xl font-semibold">emotes</div>
                <p className="text-3xl">
                    a safe space for community based journaling and mood analyzing to
                    promote self care
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
