const items = ['Boards', 'Canvas', 'Library', 'Metrics', 'Notes'];

export const UtilityDock = () => (
  <footer className="pointer-events-none fixed inset-x-0 bottom-4 z-30 flex justify-center">
    <div className="pointer-events-auto flex gap-2 rounded-2xl border border-white/15 bg-panel/80 px-3 py-2 backdrop-blur-2xl">
      {items.map((item) => (
        <button key={item} className="rounded-lg px-3 py-1.5 text-xs text-muted transition hover:bg-white/10 hover:text-white">
          {item}
        </button>
      ))}
    </div>
  </footer>
);
