import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { data } from '../data/profile_data';

const Navbar = () => {
  const navItems = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-200 bg-white shadow-lg dark:bg-gray-800"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <motion.div 
            className="flex items-center flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold playfair">
              <span className="text-transparent bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text">Madhu</span>
              {' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text">Kinnera</span>
            </h1>
          </motion.div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-pink-400"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
            <motion.button
           onClick={() => {
               window.open(data.navbar.resume_link,'_blank');
          
          }}
          
              className="inline-flex items-center h-8 px-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 dark:bg-pink-500 dark:hover:bg-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;