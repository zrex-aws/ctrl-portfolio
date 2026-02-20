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
            className="pointer-events-auto absolute right-6 top-20 w-[320px] rounded-xl border border-white/10 bg-panel/90 p-4 shadow-panel backdrop-blur-xl"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: index * 12, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            layout
          >
            <div className="mb-3 flex items-center justify-between">
              <h5 className="text-sm font-medium">{panel.title}</h5>
              <button onClick={() => closePanel(panel.id)} className="text-xs text-muted hover:text-white">
                Close
              </button>
            </div>
            <p className="text-xs text-muted">
              Modular panel with docking-ready behavior. Promote this panel to full canvas for deep workflow mode.
            </p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
