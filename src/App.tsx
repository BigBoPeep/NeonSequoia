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
        <div className="p-2 grow w-full max-w-prose overflow-hidden flex flex-col">
          <div
            className="rounded-md overflow-hidden w-full h-full outline outline-(--neon-color)/60 
            bg-(--color-sec) shadow-head"
          >
            <div className="w-full h-full px-3 py-2 overflow-y-auto">
              <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/dates`} element={<Dates />} />
                <Route path={`/listen`} element={<Listen />} />
                <Route path={`*`} element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center text--1">
          Copyright © 2026 Lane Robey
        </footer>
      </div>
    </>
  );
}

export default App;
