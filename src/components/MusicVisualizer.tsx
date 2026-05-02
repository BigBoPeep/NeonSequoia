import { useVisualizerFrame } from "@sina_byn/re-audio";

const barStyle = `bg-(--neon-color) w-[4%] rounded-t-full min-h-1
  shadow-[0_0_15px_1px_var(--neon-color)]`;
const groupStyle = "flex w-full items-end justify-between h-full pt-2";

export default function MusicVisualizer() {
  const frame = useVisualizerFrame(16);
  return (
    <div className="h-[20dvh] max-h-[20dvh] flex justify-center">
      <div className={`${groupStyle}`}>
        {frame.map((f, i) => (
          <div
            key={i}
            style={{ height: `${(f / 255) * 100}%` }}
            className={barStyle}
          />
        ))}
      </div>
      <div className={`ml-[1.12%] flex-row-reverse ${groupStyle}`}>
        {frame.map((f, i) => (
          <div
            key={i}
            style={{ height: `${(f / 255) * 100}%` }}
            className={barStyle}
          />
        ))}
      </div>
    </div>
  );
}
