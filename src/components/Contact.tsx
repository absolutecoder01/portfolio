import { motion } from 'framer-motion';

export function Contact() {
  const emailAddress = "absolute.coder01@gmail.com";
  const subject = "Mission Details";
  const body = "Please find the mission details attached.";

  const handleEmailRedirect = () => {
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
          Secure Communication Channel
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-black border border-red-900/20 rounded-sm p-8"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div className="mb-4">
              <h3 className="text-lg font-semibold text-red-700">Codename:</h3>
              <p className="text-white">absolute.coder01</p>
            </motion.div>
            <motion.div className="mb-4">
              <h3 className="text-lg font-semibold text-red-700">Encrypted Email:</h3>
              <p className="text-white">{emailAddress}</p>
            </motion.div>
            <motion.div className="mb-4">
              <h3 className="text-lg font-semibold text-red-700">Message Content:</h3>
              <p className="text-white">Your mission details will be transmitted securely.</p>
            </motion.div>
            <motion.button 
              className="w-full px-6 py-3 bg-red-900/20 border border-red-900 hover:bg-red-900/30 transition-colors rounded-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEmailRedirect}
            >
              TRANSMIT MESSAGE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}