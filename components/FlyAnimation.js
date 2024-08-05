import { motion } from 'framer-motion';

const FlyIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: '100vh', opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 1, ease: 'easeInOut' }}
  >
    {children}
  </motion.div>
);

export default FlyIn;