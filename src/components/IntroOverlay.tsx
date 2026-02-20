import { AnimatePresence, motion } from 'framer-motion';

type IntroOverlayProps = {
  visible: boolean;
};

export const IntroOverlay = ({ visible }: IntroOverlayProps) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(124,183,255,0.35),rgba(10,14,24,1)_60%)]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
      >
        <motion.div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-[0.2em] text-white" initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
          CTRL
        </motion.div>
        <motion.h1 className="mt-5 text-3xl font-semibold tracking-tight text-white" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          Launching Design OS…
        </motion.h1>
      </motion.div>
    )}
  </AnimatePresence>
);
