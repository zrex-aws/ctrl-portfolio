import { AnimatePresence, motion } from 'framer-motion';
import { useWorkspace } from '../state/workspaceState';

export const PanelHost = () => {
  const { openPanels, closePanel } = useWorkspace();

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <AnimatePresence>
        {openPanels.slice(-3).map((panel, index) => (
          <motion.div
            key={panel.id}
            className="pointer-events-auto absolute right-6 top-24 w-[320px] rounded-2xl border border-white/15 bg-taskbar p-4 shadow-panel backdrop-blur-win"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: index * 14, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            layout
          >
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-sm font-medium">{panel.title}</h5>
              <button onClick={() => closePanel(panel.id)} className="text-xs text-muted hover:text-white">
                ✕
              </button>
            </div>
            <p className="text-xs text-muted">Acrylic floating panel. Dock, expand, or pin as a tool window.</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
