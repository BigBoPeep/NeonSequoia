import { useAudio } from "@sina_byn/re-audio";

export default function MusicPlaylist({ className }: { className?: string }) {
  const { playlist, trackIndex, playTrack, play, playing } = useAudio();
  return (
    <div className={`p-2 rounded-md flex flex-col gap-1 ${className}`}>
      {playlist.map((track, index) => (
        <div
          key={index}
          className={`flex justify-between px-2 py-2 rounded-sm 
            cursor-pointer hover:bg-black/10
            ${index === trackIndex && "bg-black/10 hover:bg-black/20"}`}
          onClick={() => {
            playTrack(index);
            if (!playing)
              setTimeout(() => {
                play();
              }, 0);
          }}
        >
          <span>{`#${index + 1}`}</span>
          {/* @ts-ignore */}
          <span>{track.name}</span>
          {/* @ts-ignore */}
          <span>{track.length}</span>
        </div>
      ))}
    </div>
  );
}
