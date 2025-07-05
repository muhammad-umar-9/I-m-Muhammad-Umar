import React from 'react'
import { motion } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi'
import { toggleTheme, getTheme } from '../utils/analytics'

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(getTheme())

  const handleToggle = () => {
    const newTheme = toggleTheme()
    setTheme(newTheme)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="fixed top-20 right-4 w-12 h-12 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center z-40"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <HiSun size={24} className="text-yellow-500" />
      ) : (
        <HiMoon size={24} className="text-gray-700" />
      )}
    </motion.button>
  )
}

export default ThemeToggle
