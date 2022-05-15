import { useState } from "react";
import { loremIpsum } from "lorem-ipsum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white text-black">
      <div className="page-wrapper h-full w-full ">
        <Nav />
        <header className="page-header">
          <h2>Home</h2>
        </header>
        <div className="page-content flex flex-col border-x border-grey-200 ">
          {Array(20)
            .fill(0)
            .map((_, id) => (
              <Tweet key={id} />
            ))}
        </div>
        <div className="page-search">
          <p>search...</p>
        </div>
        <div className="page-side">
          <p>what&apos;s happening</p>
        </div>
      </div>
    </div>
  );
}

function Tweet() {
  return (
    <article className="flex-grow border-b border-grey-200 hover:bg-grey-100">
      <h2 className="text-lg">{loremIpsum({ count: 4, units: "words" })}</h2>
      <p>{loremIpsum({ units: "sentences" })}</p>
    </article>
  );
}

function Nav() {
  return (
    <nav className="page-nav fixed h-full">
      <ul className="flex h-full flex-col justify-start gap-3">
        <li className="text-red-600">Home</li>
        <li className="text-orange-600">Search</li>
        <li>Messages</li>
        <li>Post</li>
        <li className="flex flex-grow flex-col justify-end">Profile</li>
      </ul>
    </nav>
  );
}

export default App;
