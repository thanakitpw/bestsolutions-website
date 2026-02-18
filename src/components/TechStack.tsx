import React from "react";

const technologies = [
  {
    name: "Next.js", category: "Framework", color: "#ffffff",
    bg: "rgba(255,255,255,0.07)", glow: "rgba(255,255,255,0.2)",
    logo: (<svg viewBox="0 0 180 180" className="h-7 w-7 fill-white"><path d="M180 90c0 49.7-40.3 90-90 90S0 139.7 0 90 40.3 0 90 0s90 40.3 90 90zM35 143c-.6 1.4.3 2.6 1.7 2 .8-.4 1.7-.6 2.4-1.2L130.6 50.4c-2.3-2.6-4.9-4.8-7.7-6.8L35 143zm110 0l-50.6-90H80.8l55.8 100c5.3-2.7 10.3-6 14.8-10zm-50.6-21L64.8 69.3c-1 .8-1.7 1.7-1.7 3.3v70.8h16V76.7l23.5 41.7 6.4 11.4L94.4 122z" /></svg>),
  },
  {
    name: "React", category: "UI Library", color: "#61DAFB",
    bg: "rgba(97,218,251,0.07)", glow: "rgba(97,218,251,0.25)",
    logo: (<svg viewBox="-10.5 -9.45 21 18.9" className="h-7 w-7 text-[#61DAFB] fill-current"><circle cx="0" cy="0" r="2" fill="currentColor" /><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5" /><ellipse rx="10" ry="4.5" transform="rotate(60)" /><ellipse rx="10" ry="4.5" transform="rotate(120)" /></g></svg>),
  },
  {
    name: "Tailwind CSS", category: "Styling", color: "#38BDF8",
    bg: "rgba(56,189,248,0.07)", glow: "rgba(56,189,248,0.25)",
    logo: (<svg viewBox="0 0 24 24" className="h-7 w-7 text-[#38BDF8] fill-current"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" /></svg>),
  },
  {
    name: "TypeScript", category: "Language", color: "#3178C6",
    bg: "rgba(49,120,198,0.09)", glow: "rgba(49,120,198,0.3)",
    logo: (<svg viewBox="0 0 128 128" className="h-7 w-7 rounded-md"><rect width="128" height="128" rx="12" fill="#3178C6" /><path fill="#FFF" d="M72.2,95.9l0-29H57v7.5h10.9v21.5H72.2z" /><path fill="#FFF" d="M107.1,74.7c-2.3-1.6-5.2-2.3-8.8-2.3c-2,0-3.9,0.3-5.5,1c-1.6,0.7-2.9,1.7-3.8,3.2c-0.9,1.5-1.4,3.1-1.4,5c0,2.1,0.6,3.8,1.7,5.2c1.2,1.3,2.5,2.4,4.2,3.1c1.6,0.7,3.6,1.4,6,2.1c2.4,0.7,4.2,1.3,5.3,1.9c1.1,0.6,1.9,1.4,2.5,2.3c0.6,0.9,0.9,2.1,0.9,3.6c0,1.4-0.4,2.6-1.1,3.6c-0.8,1-1.8,1.8-3.1,2.3c-1.3,0.5-2.9,0.7-4.7,0.7c-2,0-3.8-0.3-5.3-0.8c-1.5-0.6-2.8-1.5-3.8-2.8c-1.1-1.3-1.7-2.9-2-4.8l-8.5,1.1c0.5,3.3,1.7,6.1,3.8,8.4c2.1,2.3,4.7,4,7.9,5.2c3.2,1.1,6.8,1.7,10.8,1.7c4.1,0,7.7-0.7,10.5-2.1c2.9-1.4,5.1-3.3,6.6-5.8c1.5-2.5,2.3-5.4,2.3-8.8c0-2.3-0.5-4.3-1.4-5.9c-0.9-1.7-2.2-2.9-3.9-3.9c-1.7-1-4-1.9-6.9-2.7c-2.9-0.8-4.9-1.5-5.9-2.1c-1-0.6-1.8-1.3-2.3-2.1c-0.5-0.8-0.8-1.8-0.8-3c0-1.2,0.3-2.2,1-3.1c0.6-0.8,1.5-1.5,2.6-1.9c1.1-0.4,2.4-0.6,3.9-0.6c3.2,0,5.8,1,7.8,3.1c2,2.1,3.1,5,3.3,8.9l8.4-1.1C113.8,80.1,111.4,76.6,107.1,74.7z M38.6,71.5v3.4l0.1,8.3l12.8,0v-8.3h0v-3.4H26.3v3.4L38.6,71.5z M38.7,83.2l0,21.5l8.5,0V83.2H38.7z" /></svg>),
  },
  {
    name: "Supabase", category: "Backend", color: "#3ECF8E",
    bg: "rgba(62,207,142,0.07)", glow: "rgba(62,207,142,0.25)",
    logo: (<svg viewBox="0 0 24 24" className="h-7 w-7 text-[#3ECF8E] fill-current"><path d="M21.362 9.354H12.066V3.53c0-.685-.884-.96-1.278-.396L3.36 14.07a.5.5 0 0 0 .409.785h8.342v6.621c0 .64.86.931 1.258.423l8.411-12.062a.5.5 0 0 0-.418-.483z" /></svg>),
  },
  {
    name: "Vercel", category: "Deployment", color: "#ffffff",
    bg: "rgba(255,255,255,0.07)", glow: "rgba(255,255,255,0.2)",
    logo: (<svg viewBox="0 0 75 65" className="h-6 w-6 fill-white"><path d="M37.59.25l36.95 64H.64l36.95-64z" /></svg>),
  },
  {
    name: "Node.js", category: "Runtime", color: "#68A063",
    bg: "rgba(104,160,99,0.07)", glow: "rgba(104,160,99,0.25)",
    logo: (<svg viewBox="0 0 24 24" className="h-7 w-7 text-[#68A063] fill-current"><path d="M11.998 24a1.362 1.362 0 0 1-.681-.181l-2.164-1.283c-.323-.181-.165-.245-.059-.281.431-.15.518-.184 1.017-.459a.169.169 0 0 1 .162.012l1.663 1.087c.06.033.145.033.2 0l6.486-3.743a.202.202 0 0 0 .101-.175V7.021a.204.204 0 0 0-.101-.176l-6.486-3.74a.201.201 0 0 0-.2 0L5.451 6.845a.203.203 0 0 0-.101.176v7.486c0 .072.038.139.101.175l1.777 1.026c.964.482 1.554-.086 1.554-.658V7.659a.184.184 0 0 1 .184-.184h.801a.184.184 0 0 1 .184.184v7.39c0 1.288-.702 2.027-1.923 2.027-.376 0-.672 0-1.498-.407l-1.703-.981a1.362 1.362 0 0 1-.681-1.179V7.021c0-.486.259-.937.681-1.179l6.487-3.744a1.414 1.414 0 0 1 1.361 0l6.487 3.744c.422.242.681.693.681 1.179v7.487c0 .487-.259.937-.681 1.179l-6.487 3.744a1.36 1.36 0 0 1-.68.169zm2.001-5.154c-2.842 0-3.437-1.304-3.437-2.398a.184.184 0 0 1 .184-.184h.817a.184.184 0 0 1 .184.158c.125.843.498 1.27 2.252 1.27 1.386 0 1.976-.314 1.976-1.05 0-.424-.168-.739-2.322-1.05-1.801-.255-2.915-.815-2.915-2.253 0-1.485 1.251-2.368 3.348-2.368 2.355 0 3.52.817 3.667 2.571a.184.184 0 0 1-.047.136.186.186 0 0 1-.13.057h-.82a.184.184 0 0 1-.179-.143c-.229-.961-.785-1.269-2.491-1.269-1.835 0-2.048.639-2.048 1.118 0 .581.252.751 2.252 1.079 2.022.325 2.985.786 2.985 2.214-.003 1.608-1.342 2.512-3.276 2.512z"/></svg>),
  },
  {
    name: "Figma", category: "Design", color: "#F24E1E",
    bg: "rgba(242,78,30,0.07)", glow: "rgba(242,78,30,0.25)",
    logo: (<svg viewBox="0 0 24 24" className="h-7 w-7 fill-current text-[#F24E1E]"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.354-3.019-3.019-3.019zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.098-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-.098z"/></svg>),
  },
];

const TechCard = ({ tech }: { tech: typeof technologies[0] }) => (
  <div
    className="group relative flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-white/[0.08] cursor-default shrink-0 transition-all duration-300 hover:border-white/25 hover:-translate-y-0.5"
    style={{ background: tech.bg }}
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ boxShadow: `0 0 24px ${tech.glow}` }}
    />
    <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
      {tech.logo}
    </div>
    <div className="relative">
      <div className="text-[13px] font-semibold text-white/70 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </div>
      <div className="text-[10px] text-white/25 group-hover:text-white/50 tracking-widest uppercase transition-colors duration-300">
        {tech.category}
      </div>
    </div>
  </div>
);

export const TechStack = () => {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-16 md:py-20 bg-[#07070F] relative border-y border-white/[0.05] overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 900px 400px at 50% 50%, rgba(245,16,54,0.05) 0%, rgba(37,19,122,0.07) 55%, transparent 100%)",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 relative z-10">
        <p className="text-[11px] font-bold tracking-[0.45em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
          Powered by Modern Technology
        </p>
        <div className="mt-3 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Marquee */}
      <div className="relative z-10 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #07070F, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #07070F, transparent)" }} />

        <div
          className="flex gap-4 w-max"
          style={{
            animation: "marquee 32s linear infinite",
          }}
        >
          {doubled.map((tech, i) => (
            <TechCard key={`${tech.name}-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
