import "./App.css";
import Filler from "./components/filler";

function App() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen gap-8">
      <h1 className="text-xl font-bold mb-4">Fill the Jug</h1>
      <Filler />
    </div>
  );
}

export default App;
