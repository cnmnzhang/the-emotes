import Header from "./components/Header";

function App() {
  return (
    <div className="fixed h-full w-full bg-cyan-50">

      <div className="my-10 flex flex-col items-center align-center overflow-auto">
        <header className="App-header text-5xl font-semibold">
          emotes
        </header>
        <p className="text-3xl">
          a safe space for community based journaling and mood analyzing to promote self care
        </p>


        <div className="w-1/4 my-10 space-y-1">
          <label for="basic" className="text-xs font-medium text-gray-500 ml-2"> Write an entry: </label>
          <textarea
            rows="4"
            id="basic"
            placeholder="Start typing..."
            className="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"></textarea>
        </div>


      </div>

    </div>
  );
}

export default App;
