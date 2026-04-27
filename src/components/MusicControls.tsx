import { useAudio, formatTime } from "@sina_byn/re-audio";
import { Range, Direction, getTrackBackground } from "react-range";
import {
  Volume,
  Volume2,
  VolumeOff,
  Play,
  Pause,
  SkipForward,
  SkipBack,
} from "lucide-react";

export default function MusicControls() {
  const {
    playing,
    togglePlay,
    prevTrack,
    nextTrack,
    duration,
    currentTime,
    timeLeft,
    setCurrentTime,
    volume,
    setVolume,
    currentTrack,
    toggleMuted,
  } = useAudio();

  return (
    <div
      className="flex flex-col gap-3 select-none"
      style={{ touchAction: "none" }}
    >
      {/* Seek Bar */}
      <div className="flex items-center gap-4">
        <div className="min-w-15 max-w-15">{formatTime(currentTime)}</div>
        <Range
          label="Seek"
          min={0}
          max={duration || 1}
          step={1}
          values={[currentTime]}
          onChange={(values) => {
            if (currentTrack !== null) setCurrentTime(values[0]);
          }}
          renderTrack={({ props, children }) => (
            <div
              onClick={(e) => e.preventDefault()}
              {...props}
              style={{
                ...props.style,
                height: "10px",
                width: "100%",
                touchAction: "none",
                background: getTrackBackground({
                  min: 0,
                  max: duration,
                  values: [currentTime],
                  colors: [
                    "var(--color-control-track-2)",
                    "var(--color-control-track-1)",
                  ],
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              onClick={(e) => e.preventDefault()}
              {...props}
              style={{
                touchAction: "none",
              }}
              key={props.key}
              className="w-3 h-3 rounded-full bg-(--color-control-thumb)
                      "
            />
          )}
        />
        {formatTime(timeLeft)}
      </div>

      <div className="flex gap-6 justify-center">
        {/* Track Controls */}
        <div className="flex gap-2 justify-center items-center">
          <button
            className="p-2 bg-(--color-control-bg) rounded-full"
            onClick={prevTrack}
          >
            <SkipBack />
          </button>
          <button
            className="size-15 p-2 bg-(--color-control-bg) rounded-full"
            onClick={togglePlay}
          >
            {playing ? (
              <Pause className="size-full" />
            ) : (
              <Play className="size-full" />
            )}
          </button>
          <button
            className="p-2 bg-(--color-control-bg) rounded-full"
            onClick={nextTrack}
          >
            <SkipForward />
          </button>
        </div>

        {/* Volume Controls */}
        <div className="flex gap-2 items-center w-fit">
          <button
            className="p-2 bg-(--color-control-bg) rounded-full"
            onClick={toggleMuted}
          >
            <VolumeOff />
          </button>

          <button className="p-2 relative group/vol bg-(--color-control-bg) rounded-full">
            <Volume2 />
            {/* Slider */}
            <div
              className="flex flex-col items-center gap-1 bg-(--color-control-bg)
                rounded-t-full rounded-b-full absolute bottom-0 left-0 z-1 h-0
                transition-all opacity-0 transition-discrete origin-bottom
                overflow-hidden group-hover/vol:h-auto group-hover/vol:opacity-100
                group-focus-within/vol:h-auto group-focus-within/vol:opacity-100
                active:h-auto"
            >
              <div className="p-2 pb-1">
                <Volume2 />
              </div>

              <Range
                label="Volume"
                step={1}
                min={0}
                max={100}
                values={[volume]}
                direction={Direction.Up}
                onChange={(values) => {
                  setVolume(values[0]);
                }}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    ref={props.ref}
                    style={{
                      ...props.style,
                      height: "60px",
                      width: "10px",
                      touchAction: "none",
                      background: getTrackBackground({
                        min: 0,
                        max: 100,
                        values: [volume],
                        direction: Direction.Up,
                        colors: [
                          "var(--color-control-track-2)",
                          "var(--color-control-track-1)",
                        ],
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    ref={props.ref}
                    key={props.key}
                    style={{ ...props.style, touchAction: "none" }}
                    className="w-6 h-3 rounded-b-xl rounded-t-xl bg-(--color-control-thumb)
                      "
                  />
                )}
              />

              <div className="p-2 pt-1">
                <Volume />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
