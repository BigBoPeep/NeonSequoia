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
            className={`${linkStyles[i]} rounded-md h-fit p-1 bg-(--color-pri) 
            opacity-50 hover:opacity-100
            ${align === "left" ? "shadow-nav-left/15" : "shadow-nav-right/15"}`}
            key={i}
          >
            <Link to={path}>
              <div className={`h-full text-center content-center`}>{text}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
