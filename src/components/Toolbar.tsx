import { useWorkspace } from '../state/workspaceState';

export const Toolbar = () => {
  const { activeWorkspace, setCommandOpen } = useWorkspace();
  const clock = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <header className="win-glass flex h-14 items-center justify-between rounded-t-2xl px-4">
      <div className="flex items-center gap-2">
        <button className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white">START</button>
        <span className="text-xs uppercase tracking-[0.2em] text-muted">CTRL Design OS</span>
      </div>
      <div>
        <h2 className="text-sm font-medium capitalize text-white">{activeWorkspace}</h2>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-muted hover:text-white">Snap Grid</button>
        <button onClick={() => setCommandOpen(true)} className="rounded-lg bg-accent/20 px-3 py-1.5 text-xs text-white hover:bg-accent/30">
          Cmd + K
        </button>
        <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-xs text-accent">{clock}</span>
      </div>
    </header>
  );
};
