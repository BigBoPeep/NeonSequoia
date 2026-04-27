import logoImg from "../assets/LogoBlack2.webp";
import raveImg from "../assets/rave.webp";
import NavBar from "./NavBar";
import { links } from "../app";

export default function Header({ className = "" }: { className?: string }) {
  const gradientStyle = {
    background:
      "conic-gradient(from var(--angle) at 50% 50%,#f50 0% 25%,#0c6 25% 50%,#44f 50% 75%,#f6f 75% 100%)",
  };

  return (
    <div
      className={`p-1 py-2 pb-4 place-items-center bg-(--color-sec) w-full ${className}`}
    >
      <div
        className={`grid grid-cols-[1fr_auto_1fr] h-30dvh w-full p-2 h-full
          shadow-head rounded-md border border-(--neon-color)/60 bg-(--color-pri)
          max-w-prose relative`}
      >
        <div
          className={`absolute inset-0 z-0 opacity-15 col-start-1 col-span-3`}
          style={{
            backgroundImage: `url(${raveImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="h-full col-start-1 col-span-1 z-1">
          <NavBar navLinks={links.group1} className={"items-start"} />
        </div>

        <div
          className="col-start-2 col-span-1 p-2 z-1 bg-(--color-pri) mx-4
            rounded-lg"
        >
          <div
            className="h-full aspect-square relative"
            style={{
              maskImage: `url(${logoImg})`,
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "contain",
            }}
          >
            <div
              className="absolute inset-[-50%] blur-lg animate-rotate-gradient"
              style={gradientStyle}
            />
          </div>
        </div>

        <div className="h-full col-start-3 col-span-1 z-1">
          <NavBar navLinks={links.group2} align="right" />
        </div>
      </div>
    </div>
  );
}
