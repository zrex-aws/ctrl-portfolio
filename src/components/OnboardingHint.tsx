import { motion } from 'framer-motion';

export const OnboardingHint = () => (
  <motion.div
    className="fixed left-4 top-16 z-20 hidden rounded-xl border border-white/10 bg-panel/85 px-3 py-2 text-xs text-muted backdrop-blur-xl lg:block"
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8 }}
  >
    Tip: Press <span className="text-white">Cmd + K</span> to switch workspaces quickly.
  </motion.div>
);
