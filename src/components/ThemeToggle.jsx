import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, setIsDark } = useTheme();

  return (
    <motion.button
      className="w-14 h-7 bg-gray-200 rounded-full p-1 dark:bg-gray-700 relative focus:outline-none"
      onClick={() => setIsDark(!isDark)}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 28 : 0,
          rotate: isDark ? 360 : 0,
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          animate={{
            rotate: isDark ? 360 : 0
          }}
          transition={{ duration: 0.5 }}
        >
          {isDark ? (
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
              className="text-yellow-400"
            />
          ) : (
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              className="text-gray-600"
            />
          )}
        </motion.svg>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;