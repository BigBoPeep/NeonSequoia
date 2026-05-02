import { Link } from "react-router";

const linkStyles = [
  "w-full text-2 font-bold",
  "w-2/3 min-w-fit text-1",
  "w-1/2 min-w-fit",
];

export default function NavBar({
  navLinks,
  className = "",
  align = "left",
}: {
  navLinks: Object;
  className?: string;
  align?: "left" | "right";
}) {
  const alignment = align === "right" ? "items-end" : "items-start";

  return (
    <div
      className={`flex flex-col justify-evenly h-full w-full min-w-0 ${alignment} ${className}`}
    >
      {Object.entries(navLinks).map(([text, path], i) => {
        return (
          <div
            className={`${linkStyles[i]} rounded-md h-fit bg-(--color-pri) 
            opacity-70 cursor-pointer
            ${
              align === "left"
                ? "shadow-nav-left/55 hover:shadow-nav-left-hover/55"
                : "shadow-nav-right/55 hover:shadow-nav-right-hover/55"
            }`}
            key={i}
          >
            <Link to={path} className="block">
              <div className={`h-full text-center content-center p-1`}>
                {text}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
