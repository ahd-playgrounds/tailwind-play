import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col bg-cyan-900 text-cyan-100 ">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <p>hello</p>
        <p>world</p>
        <button>world</button>
      </div>
    </div>
  );
}

export default App;
