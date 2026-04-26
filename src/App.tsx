import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Dates from "./pages/Dates";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-dvh w-dvw overflow-hidden">
        <Header className="w-full h-[30dvh] shrink-0" />
        <div
          className="grow w-full max-w-prose px-3 py-2 mt-4 rounded-md
            overflow-y-auto bg-(--color-sec)"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
