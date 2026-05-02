import { Audio } from "@sina_byn/re-audio";
import { songFiles } from "../app";
import MusicControls from "./MusicControls";
import MusicVisualizer from "./MusicVisualizer";
import MusicPlaylist from "./MusicPlaylist";

export default function MusicPlayer({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`p-4 rounded-lg ${className}`}>
      <Audio playlist={songFiles} defaultVolume={50}>
        {({ trackIndex, playlist }) => (
          <>
            <MusicVisualizer />
            <div className="my-2 text-2 font-bold text-center">
              {/* @ts-ignore */}
              {playlist[trackIndex]?.name || "Loading..."}
            </div>
            <MusicControls />
            <MusicPlaylist className="mt-4 bg-black/10" />
          </>
        )}
      </Audio>
    </div>
  );
}
