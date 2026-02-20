import { motion } from 'framer-motion';

export const OnboardingHint = () => (
  <motion.div
    className="win-glass fixed left-6 top-20 z-20 hidden rounded-xl px-3 py-2 text-xs text-muted lg:block"
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8 }}
  >
    Tip: Press <span className="text-white">Cmd + K</span> to open quick actions.
  </motion.div>
);
