import { Code2, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              <motion.span 
                className="text-white block"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Strategic.
              </motion.span>
              <motion.span 
                className="text-red-700 block"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Methodical.
              </motion.span>
              <motion.span 
                className="text-white block"
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.6 }}
              >
                Unstoppable.
              </motion.span>
            </h1>
            <motion.p 
              className="text-zinc-400 mb-8 text-lg"
              variants={fadeIn}
            >
              Full-Stack Developer specializing in crafting digital empires through code.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={fadeIn}
            >
              <Link to="projects" smooth={true} duration={500}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-red-900/20 border border-red-900 hover:bg-red-900/30 transition-colors rounded-sm flex items-center space-x-2"
                >
                  <Code2 className="w-4 h-4" />
                  <span>View Projects</span>
                </motion.button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 transition-colors rounded-sm flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="aspect-square rounded-full bg-gradient-to-br from-red-900/20 to-black border border-red-900/20 p-1"
              whileHover={{ rotate: 5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format"
                alt="Profile"
                className="rounded-full w-full h-full object-cover grayscale"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}