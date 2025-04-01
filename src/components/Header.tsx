import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTime } from '../hooks/useTime';

export function Header() {
  const time = useTime();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 w-full bg-black/50 backdrop-blur-sm border-b border-red-900/20 z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <Terminal className="w-5 h-5 text-red-700" />
          <span className="font-bold tracking-wider">absolute.coder</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-mono text-sm text-red-700"
        >
          {time}
        </motion.div>
      </div>
    </motion.header>
  );
}