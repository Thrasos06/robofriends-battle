const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-violet-400/20 bg-gradient-to-br from-slate-950 via-purple-950 to-black px-5 py-10 text-center sm:px-10">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lime-300/70 to-transparent"
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <p className="text-lg font-black uppercase tracking-widest text-lime-300 drop-shadow-[0_0_12px_rgba(163,230,53,0.35)]">
          Monster Hunter
        </p>

        <span className="rounded-full border border-violet-400/40 bg-violet-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-violet-200">
          Fan-made &bull; Built for fun
        </span>

        <p className="text-sm leading-relaxed text-slate-300">
          &copy; {new Date().getFullYear()} Thrasos06. All rights reserved for
          original code and design.
        </p>
        <p className="max-w-xl text-xs leading-relaxed text-slate-400">
          A personal project made for fun. Monster images by RoboHash and sample
          data by JSONPlaceholder belong to their respective owners.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
