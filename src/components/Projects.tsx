import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <motion.section 
      className="py-20"
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
          Classified Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="REST Session Controller App"
            description="An application that allows you to connect to a server, display sessions, and manage them. Developed as part of practice at Streamsoft"
            tech={['C#', '.NET', 'RestSharp']}
            image="restController.jpeg"
          />
          <ProjectCard 
            title="Starry Sky Designer App"
            description="Design stunning starry skies for your car. Developed during freelancing."
            tech={['React', 'TypeScript', 'Tailwindcss']}
            image="stars-for-car-ceiling-v0-d4p6bwerbf7e1.webp"
          />
          <ProjectCard 
            title="Streamsoft Services Overview"
            description="A web application showcasing the services of Streamsoft. Developed during practice at Streamsoft."
            tech={['React', 'TypeScript', 'Tailwindcss']}
            image="streamsoft_services.png"
          />
          <ProjectCard 
            title="Modern GUI Notepad"
            description="Simple notepad with 'modern' dark theme."
            tech={['Java', 'Java Swing', 'Flatlaf']}
            image="notepad_showcase.png"
          />
        </div>
        <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-white"
          initial={{ x: -20 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
        >
          <br/>
          Current projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard 
            title="StudyFlow"
            description="The app helps users plan their studies, track their progress, and organize their materials. Perfect for students, pupils, or independent learners."
            tech={['React', 'Tailwindcss', 'Java', 'SpringBoot']}
            image="under_construction.png"
          />
          <ProjectCard 
            title="e-Senior"
            description="e-Senior is a web application that allows teaching older people how to use modern technologies. Implemented as a social project within the ZwolnieniZTeorii program."
            tech={['React', 'TypeScript', 'Tailwindcss']}
            image="e-senior.png"
          />
        </div>
      </div>
      </div>
    </motion.section>
  );
}
