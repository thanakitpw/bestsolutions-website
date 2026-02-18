import React from "react";

const technologies = [
  {
    name: "Next.js",
    logo: (
      <svg viewBox="0 0 180 180" className="h-9 w-9 fill-white">
        <path d="M180 90c0 49.7-40.3 90-90 90S0 139.7 0 90 40.3 0 90 0s90 40.3 90 90zM35 143c-.6 1.4.3 2.6 1.7 2 .8-.4 1.7-.6 2.4-1.2L130.6 50.4c-2.3-2.6-4.9-4.8-7.7-6.8L35 143zm110 0l-50.6-90H80.8l55.8 100c5.3-2.7 10.3-6 14.8-10zm-50.6-21L64.8 69.3c-1 .8-1.7 1.7-1.7 3.3v70.8h16V76.7l23.5 41.7 6.4 11.4L94.4 122z" />
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg viewBox="-10.5 -9.45 21 18.9" className="h-9 w-9 text-[#61DAFB] fill-current">
        <circle cx="0" cy="0" r="2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="10" ry="4.5" />
          <ellipse rx="10" ry="4.5" transform="rotate(60)" />
          <ellipse rx="10" ry="4.5" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    logo: (
      <svg viewBox="0 0 24 24" className="h-9 w-9 text-[#38BDF8] fill-current">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    logo: (
      <svg viewBox="0 0 24 24" className="h-9 w-9 text-[#3ECF8E] fill-current">
        <path d="M21.362 9.354H12.066V3.53c0-.685-.884-.96-1.278-.396L3.36 14.07a.5.5 0 0 0 .409.785h8.342v6.621c0 .64.86.931 1.258.423l8.411-12.062a.5.5 0 0 0-.418-.483z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    logo: (
      <svg viewBox="0 0 128 128" className="h-9 w-9">
        <rect width="128" height="128" rx="12" fill="#3178C6" />
        <path fill="#FFF" d="M72.2,95.9l0-29H57v7.5h10.9v21.5H72.2z" />
        <path fill="#FFF" d="M107.1,74.7c-2.3-1.6-5.2-2.3-8.8-2.3c-2,0-3.9,0.3-5.5,1c-1.6,0.7-2.9,1.7-3.8,3.2c-0.9,1.5-1.4,3.1-1.4,5c0,2.1,0.6,3.8,1.7,5.2c1.2,1.3,2.5,2.4,4.2,3.1c1.6,0.7,3.6,1.4,6,2.1c2.4,0.7,4.2,1.3,5.3,1.9c1.1,0.6,1.9,1.4,2.5,2.3c0.6,0.9,0.9,2.1,0.9,3.6c0,1.4-0.4,2.6-1.1,3.6c-0.8,1-1.8,1.8-3.1,2.3c-1.3,0.5-2.9,0.7-4.7,0.7c-2,0-3.8-0.3-5.3-0.8c-1.5-0.6-2.8-1.5-3.8-2.8c-1.1-1.3-1.7-2.9-2-4.8l-8.5,1.1c0.5,3.3,1.7,6.1,3.8,8.4c2.1,2.3,4.7,4,7.9,5.2c3.2,1.1,6.8,1.7,10.8,1.7c4.1,0,7.7-0.7,10.5-2.1c2.9-1.4,5.1-3.3,6.6-5.8c1.5-2.5,2.3-5.4,2.3-8.8c0-2.3-0.5-4.3-1.4-5.9c-0.9-1.7-2.2-2.9-3.9-3.9c-1.7-1-4-1.9-6.9-2.7c-2.9-0.8-4.9-1.5-5.9-2.1c-1-0.6-1.8-1.3-2.3-2.1c-0.5-0.8-0.8-1.8-0.8-3c0-1.2,0.3-2.2,1-3.1c0.6-0.8,1.5-1.5,2.6-1.9c1.1-0.4,2.4-0.6,3.9-0.6c3.2,0,5.8,1,7.8,3.1c2,2.1,3.1,5,3.3,8.9l8.4-1.1C113.8,80.1,111.4,76.6,107.1,74.7z M38.6,71.5v3.4l0.1,8.3l12.8,0v-8.3h0v-3.4H26.3v3.4L38.6,71.5z M38.7,83.2l0,21.5l8.5,0V83.2H38.7z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    logo: (
      <svg viewBox="0 0 75 65" className="h-8 w-8 fill-white">
        <path d="M37.59.25l36.95 64H.64l36.95-64z" />
      </svg>
    ),
  },
];

function TechCard({ tech }: { tech: (typeof technologies)[0] }) {
  return (
    <div
      className="group flex-shrink-0 flex flex-col items-center justify-center gap-3 bg-white/[0.04] border border-white/[0.08] rounded-2xl hover:bg-white/[0.09] hover:border-white/[0.18] transition-all duration-300 cursor-default"
      style={{ width: "148px", height: "108px", marginRight: "16px" }}
    >
      <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {tech.logo}
      </div>
      <span className="text-[11px] font-medium text-white/35 group-hover:text-white/75 tracking-wide transition-colors duration-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export const TechStack = () => {
  const doubled = [...technologies, ...technologies];

  return (
    <section className="py-16 md:py-20 bg-[#07070F] overflow-hidden relative border-y border-white/[0.05]">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 700px 250px at 50% 50%, rgba(245,16,54,0.06) 0%, rgba(37,19,122,0.07) 50%, transparent 100%)",
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-12 relative z-10">
        <p className="text-[11px] font-bold tracking-[0.45em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-end)]">
          Powered by Modern Technology
        </p>
        <div className="mt-3 h-px w-20 mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Row 1: forward */}
      <div className="relative overflow-hidden mb-3">
        <div className="flex animate-marquee-fwd" style={{ width: "max-content" }}>
          {doubled.map((tech, i) => (
            <TechCard key={`fwd-${i}`} tech={tech} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#07070F] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#07070F] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Row 2: backward */}
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-bwd" style={{ width: "max-content" }}>
          {doubled.map((tech, i) => (
            <TechCard key={`bwd-${i}`} tech={tech} />
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#07070F] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#07070F] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};
