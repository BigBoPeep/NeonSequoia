import wildImg from "../assets/wildtour.webp";
import { tourDates } from "../app";
import { format } from "date-fns";

const gradientStyle = {
  background:
    "conic-gradient(from var(--angle) at 50% 50%,#f50 0% 25%,#0c6 25% 50%,#44f 50% 75%,#f6f 75% 100%)",
};

export default function Dates() {
  return (
    <div className="flex flex-col items-center bg-(--color-pri) w-full place-items-center p-4 rounded-md">
      <div
        className="h-[150px] aspect-1000/475 min-w-0 relative overflow-hidden"
        style={{
          maskImage: `url(${wildImg})`,
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
      <ol className="w-full *:grid *:grid-cols-4 *:w-full *:text-center *:items-center">
        <li>
          <span>MM-DD-YYYY</span>
          <span>City</span>
          <span>Venue</span>
          <span>Ticket Availability</span>
        </li>
        {tourDates.map((tourDate) => {
          return (
            <li>
              <span>{format(tourDate.date, "MM-dd-yyyy")}</span>
              <span>{tourDate.location}</span>
              <span>{tourDate.venue}</span>
              <span>{tourDate.status}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
