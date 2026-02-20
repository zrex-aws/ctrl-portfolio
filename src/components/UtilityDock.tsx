import { motion } from 'framer-motion';

const pinned = ['⊞', '◻', '◫', '⌘', '◌'];

export const UtilityDock = () => (
  <footer className="pointer-events-none fixed inset-x-0 bottom-3 z-30 flex justify-center px-4">
    <div className="pointer-events-auto grid w-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center rounded-2xl border border-white/15 bg-taskbar px-3 py-2 shadow-panel backdrop-blur-win">
      <button className="justify-self-start rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">START</button>
      <div className="flex items-center gap-2">
        {pinned.map((item, idx) => (
          <motion.button
            key={idx}
            whileHover={{ y: -2 }}
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-sm text-muted hover:text-white"
          >
            {item}
          </motion.button>
        ))}
      </div>
      <div className="justify-self-end rounded-lg border border-white/10 bg-black/25 px-3 py-1 text-xs text-muted">ENG  ·  Wi‑Fi  ·  12:59</div>
    </div>
  </footer>
);
