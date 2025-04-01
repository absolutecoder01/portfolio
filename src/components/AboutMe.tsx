import { motion } from 'framer-motion';

export function AboutMe() {
  return (
    <motion.section 
      className="py-20 bg-zinc-900/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-white"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-black border border-red-900/20 rounded-sm p-8"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <motion.p className="text-white mb-4">
              Hello! My name's Volodymyr. I'm a passionate developer from Poland with a love for creating dynamic and user-friendly applications. 
              My journey in tech began with a fascination for problem-solving and a desire to build innovative solutions.
            </motion.p>
            <motion.p className="text-white mb-4">
            My front-end expertise includes HTML, CSS, JavaScript, React, TypeScript, and Tailwind CSS, allowing me to create dynamic and responsive user interfaces. On the back-end, I work with Python, Java, and C# to build robust and scalable applications. 
            </motion.p>
            <motion.p className="text-white mb-4">
              In my free time, I love exploring new technologies, contributing to open-source projects, and sharing knowledge with others.
            </motion.p>
            <motion.p className="text-white mb-4">
            I am passionate about continuous learning and enjoy sharing knowledge with others in the tech community. <br/> <br/> Let's connect and build something extraordinary together!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}