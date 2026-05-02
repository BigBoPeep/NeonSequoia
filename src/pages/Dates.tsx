import wildImg from "../assets/wildtour.webp";
import { tourDates } from "../app";
import { format } from "date-fns";
import BookButton from "../components/BookButton";

const gradientStyle = {
  background:
    "conic-gradient(from var(--angle) at 50% 50%,#f50 0% 25%,#0c6 25% 50%,#44f 50% 75%,#f6f 75% 100%)",
};

export default function Dates() {
  return (
    <div
      className="flex flex-col items-center gap-4  w-full place-items-center 
        rounded-md min-h-full overflow-x-hidden text-1"
    >
      <div
        className="h-[100px] sm:h-[150px] mt-5 aspect-1000/475 min-w-0 relative overflow-hidden"
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

      <ol className="flex flex-col w-full">
        {tourDates.map((tourDate, i) => (
          <li
            key={i}
            className={`w-full place-items-center p-1 py-4 flex flex-col gap-2
              ${i % 2 == 0 && "bg-black/10 dark:bg-gray-400/10"}`}
          >
            <section className="text-2">
              <span className="font-bold">
                {format(tourDate.date, "MM-dd-yyyy")}
              </span>
              <span> - {tourDate.location}</span>
            </section>
            <section className="flex items-center gap-2">
              {`${tourDate.venue} - `}
              <BookButton availability={tourDate.status} />
            </section>
          </li>
        ))}
      </ol>

      {/* <div className="w-full h-full flex flex-col gap-1">
        <div className="flex justify-evenly">
          
        </div>
        {tourDates.map((tourDate, i) => (
          <div
            className={`flex justify-evenly
            ${i % 2 == 0 && "bg-black/10 dark:bg-white/10"}`}
          >
            <th scope="row" className="">
              {format(tourDate.date, "MM/dd/yyyy")}
            </th>
            <td>{tourDate.location}</td>
            <td>{tourDate.venue}</td>
            <td className="place-items-center">
              <BookButton availability={tourDate.status} />
            </td>
          </div>
        ))}
      </div> */}
      {/* <ol className="w-full flex flex-col gap-2 *:grid *:grid-cols-4 *:w-full *:text-center *:items-center">
        <li className="py-2 text--1 bg-(--color-sec)">
          <span>MM-DD-YYYY</span>
          <span>City</span>
          <span>Venue</span>
          <span>Ticket Availability</span>
        </li>
        {tourDates.map((tourDate, i) => {
          return (
            <li className={`py-2 ${i % 2 !== 0 ? "bg-(--color-sec)" : ""}`}>
              <span>{format(tourDate.date, "MM-dd-yyyy")}</span>
              <span>{tourDate.location}</span>
              <span>{tourDate.venue}</span>
              <span>{tourDate.status}</span>
            </li>
          );
        })}
      </ol> */}
    </div>
  );
}
