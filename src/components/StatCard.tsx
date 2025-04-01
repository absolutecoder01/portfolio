import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

export function StatCard({ icon, number, label }: StatCardProps) {
  return (
    <motion.div 
      className="border border-red-900/20 bg-black/50 p-6 rounded-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-red-700 mb-4">{icon}</div>
      <div className="text-3xl font-bold text-white mb-2">{number}</div>
      <div className="text-zinc-500 text-sm">{label}</div>
    </motion.div>
  );
}