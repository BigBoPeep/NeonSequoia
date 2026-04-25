import bgImg from "../assets/trees.svg";
import { useAppStore } from "../app";

export default function Header({ className = "" }: { className?: string }) {
  const neonColor = useAppStore((s) => s.neonColor);

  const gradientStyle = {
    background:
      "conic-gradient(from var(--angle) at 55% 70%,#f50 0% 25%,#0c6 25% 50%,#08f 50% 75%,#f6f 75% 100%)",
  };

  return (
    <div
      className={`border-b overflow-hidden ${className}`}
      style={{ borderColor: `var(--neon-color)` }}
    >
      <div className="flex items-center">
        {/* Neon Sequoia Image */}
        <div
          className="relative h-50 w-50 overflow-hidden mt-4"
          style={{
            maskImage: `radial-gradient(ellipse 50% 100% at 50% 50%, black, black 30%, #00000030 60%, transparent 80%), 
              url(${bgImg})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            maskComposite: "intersect",
            WebkitMaskImage: `radial-gradient(ellipse 50% 100% at 50% 50%, black, black 30%, #00000030 60%, transparent 80%), 
              url(${bgImg})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            WebkitMaskComposite: "source-in",
          }}
        >
          <div
            className="absolute inset-[-50%] blur-lg animate-rotate-gradient"
            style={gradientStyle}
          ></div>
        </div>

        {/* Text Container */}
        <div
          className="relative flex flex-col items-center justify-center font-black text-5 leading-sub1 
          overflow-visible w-fit py-1.5"
        >
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <mask id="textMask" maskUnits="userSpaceOnUse">
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-black text-5 uppercase pt-1"
                >
                  <tspan x="50%" dy="-0.6em">
                    Neon
                  </tspan>
                  <tspan x="50%" dy="1.2em">
                    Sequoia
                  </tspan>
                </text>
              </mask>

              <mask
                id="glowMask"
                maskUnits="userSpaceOnUse"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white font-black text-5 uppercase"
                  style={{
                    filter: "blur(4px)",
                  }}
                >
                  <tspan x="50%" dy="-0.6em">
                    Neon
                  </tspan>
                  <tspan x="50%" dy="1.2em">
                    Sequoia
                  </tspan>
                </text>

                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-black font-black text-5 uppercase"
                >
                  <tspan x="50%" dy="-0.6em">
                    Neon
                  </tspan>
                  <tspan x="50%" dy="1.2em">
                    Sequoia
                  </tspan>
                </text>
              </mask>
            </defs>
          </svg>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage: "url(#glowMask)",
              WebkitMaskImage: "url(#glowMask)",
            }}
          >
            <div
              className="absolute inset-[-200%] animate-rotate-gradient blur-2xl opacity-100 pointer-events-none"
              style={gradientStyle}
            />
          </div>

          <div
            className="relative"
            style={{
              maskImage: "url(#textMask)",
              WebkitMaskImage: "url(#textMask)",
            }}
          >
            <div
              className="inset-[-100%] animate-rotate-gradient blur-lg absolute"
              style={gradientStyle}
            />
            <div className="invisible select-none uppercase text-center flex flex-col">
              <span>Neon</span>
              <span>Sequoia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
