import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiTrendingUp, HiLightBulb, HiHeart } from 'react-icons/hi'
import { personalInfo, interests, funFacts } from '../data/personal'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const achievements = [
    {
      icon: HiTrendingUp,
      title: "Academic Growth",
      description: "Improved from 2.6 SGPA to 3.0 CGPA through dedication and hard work",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: HiAcademicCap,
      title: "Google Certified",
      description: "Completed Google Advanced Data Analytics Certificate program",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: HiLightBulb,
      title: "Innovation",
      description: "Built 6+ projects spanning web development, data analysis, and AI",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: HiHeart,
      title: "Passion",
      description: "Dedicated to leveraging technology for positive impact",
      color: "from-red-400 to-orange-500"
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get to know the person behind the code and the journey that shaped my passion for data and AI
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="w-full max-w-md mx-auto">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-400 p-1 shadow-xl">
                    <img
                      src={personalInfo.images.profile}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">3.0</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Current CGPA</div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-text">2024</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Google Certified</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{personalInfo.currentYear}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Year at GIKI</div>
                </div>
                <div className="glass-card p-4 text-center">
                  <div className="text-2xl font-bold gradient-text">{personalInfo.expectedGraduation}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Expected Graduation</div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Introduction */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio.introduction}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio.journey}
                </p>
              </div>

              {/* Education */}
              <div className="glass-card p-6 space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                  <HiAcademicCap className="text-primary-500" />
                  Education
                </h4>
                <div>
                  <div className="font-medium text-gray-800 dark:text-gray-200">
                    {personalInfo.program}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {personalInfo.university}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {personalInfo.academic.improvement}
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  What I Do
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio.expertise}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {personalInfo.bio.goals}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center space-y-4 group"
                >
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
              Interests & Passions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{interest.icon}</span>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {interest.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {interest.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
              Fun Facts
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-4 text-center"
                >
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Quote */}
          <motion.div variants={itemVariants} className="text-center">
            <blockquote className="text-xl italic text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              "{personalInfo.bio.personal}"
            </blockquote>
            <cite className="text-primary-600 dark:text-primary-400 font-medium mt-4 block">
              - {personalInfo.name}
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
