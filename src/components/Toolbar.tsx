import { useWorkspace } from '../state/workspaceState';

export const Toolbar = () => {
  const { activeWorkspace, setCommandOpen } = useWorkspace();

  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 bg-panel/40 px-4 backdrop-blur-xl">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Workspace</p>
        <h2 className="text-sm font-medium capitalize text-white">{activeWorkspace}</h2>
      </div>
      <div className="flex items-center gap-2">
        <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-muted hover:text-white">Grid</button>
        <button className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-muted hover:text-white">Zoom 100%</button>
        <button
          onClick={() => setCommandOpen(true)}
          className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20"
        >
          Cmd + K
        </button>
      </div>
    </header>
  );
};
