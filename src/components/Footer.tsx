import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer 
      className="bg-black border-t border-red-900/20 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-sm text-zinc-500">
            © {new Date().getFullYear()} absolute.coder
          </div>
          <div className="flex space-x-4">
            <motion.a 
              href="https://github.com/absolutecoder01" 
              target="_blank"
              className="text-zinc-500 hover:text-red-700 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/volodymyr-kupak-07111235a/" 
              target='_blank'
              className="text-zinc-500 hover:text-red-700 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}