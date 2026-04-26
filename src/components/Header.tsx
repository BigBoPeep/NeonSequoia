import textImg from "../assets/LogoBlack2.webp";
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
      className={`p-1 py-2 pb-4 place-items-center bg-stone-900 ${className}`}
    >
      <div
        className={`grid grid-cols-[2fr,1fr,2fr] h-full w-full p-2 
          shadow-head rounded-md border border-(--neon-color)/60 
          max-w-prose relative`}
      >
        <div
          className={`absolute inset-0 z-0 opacity-5`}
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
          className="relative col-start-2 col-span-1 min-w-0 flex items-center 
            justify-center z-1"
        >
          <div
            className="h-full aspect-square min-w-0"
            style={{
              maskImage: `url(${textImg})`,
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
