import { motion } from 'framer-motion';
import { data } from '../data/profile_data';

const About = () => {
  return (
    <section id="about" className="transition-colors duration-200 bg-gray-50 dark:bg-gray-800">
      <motion.div 
        className="relative h-[300px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={data.about.hero_backgrond_url}
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-800"></div>
      </motion.div>
      <div className="relative z-10 px-4 pb-20 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl playfair gradient-text">About Me</h2>
          <div className="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row">
            <motion.div 
              className="w-48 h-48 overflow-hidden rounded-full shadow-xl ring-4 ring-white dark:ring-gray-700"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={data.about.profile_image_url}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div 
              className="max-w-2xl text-left"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
               {data.about.description}
              </p>
              <motion.div 
                className="flex gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
  
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;