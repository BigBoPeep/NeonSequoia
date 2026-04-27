import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Dates from "./pages/Dates";
import Listen from "./pages/Listen";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div className="flex flex-col items-center h-dvh w-dvw overflow-hidden">
        <Header className="h-[30dvh] shrink-0" />
        <div
          className="grow w-full max-w-prose px-3 py-2 mt-4 rounded-md
             bg-(--color-sec) overflow-visible"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dates" element={<Dates />} />
            <Route path="/listen" element={<Listen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
