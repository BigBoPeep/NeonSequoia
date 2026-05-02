import { TicketX, TicketSlash, TicketCheck } from "lucide-react";

export default function BookButton({
  className,
  availability = 2,
  onClick,
}: {
  className?: string;
  availability: 0 | 1 | 2;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button
      className={`bg-(--color-pri) p-1 px-2 flex gap-2 items-center rounded-md
        ${availability === 0 && "text-(--color-text)/50"}
        ${className}`}
      disabled={availability === 0}
      onClick={onClick || undefined}
    >
      {availability == 0 ? (
        <>
          <TicketX />
          Sold Out
        </>
      ) : availability == 1 ? (
        <>
          <TicketSlash />
          Hurry!
        </>
      ) : (
        <>
          <TicketCheck />
          Available
        </>
      )}
    </button>
  );
}
