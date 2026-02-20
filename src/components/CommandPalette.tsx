import { AnimatePresence, motion } from 'framer-motion';
import { sidebarItems } from '../data/workspaceData';
import { useWorkspace } from '../state/workspaceState';

export const CommandPalette = () => {
  const { commandOpen, setCommandOpen, setActiveWorkspace } = useWorkspace();

  return (
    <AnimatePresence>
      {commandOpen && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-start bg-black/40 p-6 pt-24 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setCommandOpen(false)}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-panel p-4"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={(event) => event.stopPropagation()}
          >
            <input
              autoFocus
              placeholder="Jump to workspace..."
              className="mb-3 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none placeholder:text-muted"
            />
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveWorkspace(item.id);
                    setCommandOpen(false);
                  }}
                  className="block w-full rounded-lg px-3 py-2 text-left text-sm text-muted hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
