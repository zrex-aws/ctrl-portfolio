import { motion } from 'framer-motion';
import { sidebarItems } from '../data/workspaceData';
import { useWorkspace } from '../state/workspaceState';

export const Sidebar = () => {
  const { activeWorkspace, setActiveWorkspace, openPanel } = useWorkspace();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-panel/70 p-4 backdrop-blur-xl lg:block">
      <p className="px-3 text-xs uppercase tracking-[0.24em] text-muted">CTRL Libraries</p>
      <nav className="mt-4 space-y-1">
        {sidebarItems.map((item) => {
          const active = activeWorkspace === item.id;
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              onClick={() => {
                setActiveWorkspace(item.id);
                openPanel({ id: `${item.id}-panel`, title: item.label, workspace: item.id });
              }}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
                active ? 'bg-accent/20 text-white' : 'text-muted hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.label}
              <span className="text-xs">↗</span>
            </motion.button>
          );
        })}
      </nav>
    </aside>
  );
};
