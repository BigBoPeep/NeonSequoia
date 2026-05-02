import { useState, useEffect, useMemo, useRef } from "react";
import { useAudio, formatTime } from "@sina_byn/re-audio";
import { Range, Direction, getTrackBackground } from "react-range";
import { debounce } from "../modules/utils";
import {
  Volume,
  Volume1,
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
    setCurrentTime,
    volume,
    setVolume,
    currentTrack,
    toggleMuted,
    muted,
  } = useAudio();
  const [seekTime, setSeekTime] = useState(currentTime);
  const isSeeking = useRef(false);

  useEffect(() => {
    if (!isSeeking.current) setSeekTime(currentTime);
  }, [currentTime]);

  const debouncedSetCurrentTime = useMemo(
    () => debounce((value: number) => setCurrentTime(value), 300),
    [setCurrentTime],
  );

  return (
    <div
      className="flex flex-col gap-3 select-none"
      style={{ touchAction: "none" }}
    >
      {/* Seek Bar */}
      <div className="flex items-center gap-4">
        <div className="font-mono">{formatTime(seekTime).substring(1)}</div>
        <Range
          label="Seek"
          min={0}
          max={duration || 1}
          step={1}
          values={[seekTime]}
          onChange={(values) => {
            if (currentTrack !== null) {
              isSeeking.current = true;
              setSeekTime(values[0]);
              debouncedSetCurrentTime(values[0]);
            }
          }}
          onFinalChange={() => (isSeeking.current = false)}
          renderTrack={({ props, children }) => (
            <div
              className="rounded-l-full rounded-r-full"
              {...props}
              style={{
                ...props.style,
                height: "10px",
                width: "100%",
                touchAction: "none",
                background: getTrackBackground({
                  min: 0,
                  max: duration,
                  values: [seekTime],
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
              className="size-4 rounded-full bg-(--color-control-thumb)"
            />
          )}
        />
        <div className="font-mono">{formatTime(duration).substring(1)}</div>
      </div>

      <div className="flex gap-6 justify-between">
        {/* Track Controls */}
        <div className="flex gap-2 justify-center items-center">
          <button
            className="size-12 p-1.5 bg-(--color-control-bg) rounded-full shadow-btn hover:shadow-btn-hover"
            onClick={togglePlay}
          >
            {playing ? (
              <Pause className="size-full" />
            ) : (
              <Play className="size-full" />
            )}
          </button>
          <button
            className="p-1.5 bg-(--color-control-bg) rounded-full shadow-btn hover:shadow-btn-hover"
            onClick={prevTrack}
          >
            <SkipBack />
          </button>
          <button
            className="p-1.5 bg-(--color-control-bg) rounded-full shadow-btn hover:shadow-btn-hover"
            onClick={nextTrack}
          >
            <SkipForward />
          </button>
        </div>

        {/* Volume Controls */}
        <div className="flex gap-2 items-center w-fit">
          <button
            className="p-1.5 bg-(--color-control-bg) rounded-full shadow-btn hover:shadow-btn-hover"
            onClick={toggleMuted}
          >
            {muted ? <Volume1 /> : <VolumeOff />}
          </button>

          <button className="p-1.5 relative group/vol bg-(--color-control-bg) rounded-full shadow-btn">
            <Volume2 />
            {/* Slider */}
            <div
              className="flex flex-col items-center gap-1 bg-(--color-control-bg)
                rounded-t-full rounded-b-full absolute bottom-0 left-0 z-1 h-0
                transition-all opacity-0 transition-discrete origin-bottom
                overflow-hidden group-hover/vol:h-auto group-hover/vol:opacity-100
                group-focus-within/vol:h-auto group-focus-within/vol:opacity-100
                active:h-auto shadow-btn"
            >
              <div className="p-1.5 pb-1">
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

              <div className="p-1.5 pt-1">
                <Volume />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
