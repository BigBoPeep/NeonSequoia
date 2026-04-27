import { Audio } from "@sina_byn/re-audio";
import { songFiles } from "../app";
import MusicControls from "./MusicControls";
import MusicVisualizer from "./MusicVisualizer";

export default function MusicPlayer() {
  return (
    <div className="bg-(--color-pri) p-4 rounded-lg">
      <Audio playlist={songFiles} defaultVolume={50}>
        {({ trackIndex, playlist }) => (
          <>
            <MusicVisualizer />
            <div className="my-2 text-2 font-bold text-center">
              {/* @ts-ignore */}
              {playlist[trackIndex]?.name || "Loading..."}
            </div>
            <MusicControls />
          </>
        )}
      </Audio>
    </div>
  );
}
