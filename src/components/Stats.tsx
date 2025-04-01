import { Shield, Cpu, Code2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { StatCard } from './StatCard';

export function Stats() {
  return (
    <motion.section 
      className="py-20 bg-zinc-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard icon={<Shield />} number="1+" label="Year Experience" />
          <StatCard icon={<Cpu />} number="2+" label="Projects Completed" />
          <StatCard icon={<Code2 />} number="5" label="Technologies Mastered" />
          <StatCard icon={<Terminal />} number="∞" label="Lines of Code" />
        </div>
      </div>
    </motion.section>
  );
}