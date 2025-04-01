import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
}

export function ProjectCard({ title, description, tech, image }: ProjectCardProps) {
  return (
    <motion.div 
      className="group relative border border-red-900/20 bg-black/50 rounded-sm overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" />
      </div>
      <div className="relative p-8">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <motion.span 
              key={i} 
              className="px-3 py-1 bg-red-900/20 text-red-400 text-sm rounded-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
        <motion.a 
          href="https://github.com/absolutecoder01"
          target="_blank" 
          rel="noopener noreferrer" 
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ rotate: 45 }}
        >
          <ExternalLink className="w-5 h-5 text-red-700" />
        </motion.a>
      </div>
    </motion.div>
  );
}