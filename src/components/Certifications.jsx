import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink, HiCalendar, HiAcademicCap, HiClock, HiX } from 'react-icons/hi'
import { certifications, certificationCategories, certificationStats } from '../data/certifications'

const Certifications = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCertification, setSelectedCertification] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const filteredCertifications = selectedCategory === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const CertificationCard = ({ certification, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="cert-card"
      onClick={() => setSelectedCertification(certification)}
    >
      <div className="relative overflow-hidden rounded-lg mb-4 h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center p-4">
          <img
            src={certification.issuerLogo}
            alt={certification.issuer}
            className="w-16 h-16 mx-auto mb-2 object-contain"
          />
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
            {certification.issuer}
          </h4>
        </div>
        
        {certification.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
        
        <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
          certification.level === 'Advanced' 
            ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            : certification.level === 'Intermediate'
            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
        }`}>
          {certification.level}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 line-clamp-2">
            {certification.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {certification.description}
          </p>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <HiCalendar size={16} />
            {certification.date}
          </div>
          <div className="flex items-center gap-1">
            <HiClock size={16} />
            {certification.duration}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {certification.skills.slice(0, 3).map((skill) => (
            <span key={skill} className="skill-chip text-xs">
              {skill}
            </span>
          ))}
          {certification.skills.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +{certification.skills.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <HiAcademicCap className="text-primary-500" size={16} />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {certification.type}
            </span>
          </div>
          
          <span className="text-primary-600 dark:text-primary-400 font-medium text-sm">
            View Details
          </span>
        </div>
      </div>
    </motion.div>
  )

  const CertificationModal = ({ certification, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              {certification.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <HiX size={24} />
            </button>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <img
                src={certification.issuerLogo}
                alt={certification.issuer}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {certification.issuer}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {certification.type}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    About This Certification
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {certification.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Skills Covered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <span key={skill} className="skill-chip text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="glass-card p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <HiCalendar className="text-primary-500" size={20} />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Completion Date
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{certification.date}</p>
                </div>
                
                <div className="glass-card p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <HiClock className="text-primary-500" size={20} />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Duration
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{certification.duration}</p>
                </div>
                
                <div className="glass-card p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <HiAcademicCap className="text-primary-500" size={20} />
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Level
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    certification.level === 'Advanced' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      : certification.level === 'Intermediate'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  }`}>
                    {certification.level}
                  </span>
                </div>
                
                {certification.credentialId && (
                  <div className="glass-card p-4 space-y-3">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Credential ID
                    </span>
                    <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">
                      {certification.credentialId}
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Certificate Preview */}
            {certification.image && certification.image.endsWith('.jpg') && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Certificate Preview
                </h3>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={certification.image}
                    alt={`${certification.title} Certificate`}
                    className="w-full h-auto max-h-96 object-contain bg-white"
                  />
                </div>
              </div>
            )}
            
            <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              {certification.verificationUrl !== '#' && (
                <a
                  href={certification.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <HiExternalLink size={20} />
                  Verify Certificate
                </a>
              )}
              {certification.pdfUrl && (
                <button
                  onClick={() => window.open(certification.pdfUrl, '_blank')}
                  className="btn-secondary flex items-center gap-2"
                >
                  <HiAcademicCap size={20} />
                  View PDF Certificate
                </button>
              )}
              {certification.image && certification.image.endsWith('.jpg') && (
                <button
                  onClick={() => window.open(certification.image, '_blank')}
                  className="btn-outline flex items-center gap-2"
                >
                  <HiExternalLink size={20} />
                  View Image
                </button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900">
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
              Certifications & Achievements
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Professional certifications and achievements that demonstrate my commitment to continuous learning
            </p>
          </motion.div>

          {/* Certification Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Certifications', value: certificationStats.totalCertifications, icon: '🏆' },
              { label: 'Featured', value: certificationStats.featuredCertifications, icon: '⭐' },
              { label: 'Categories', value: certificationStats.categories, icon: '📚' },
              { label: 'Skills Covered', value: certificationStats.skills, icon: '🎯' }
            ].map((stat, index) => (
              <div key={stat.label} className="glass-card p-6 text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-wrap justify-center gap-4">
              {certificationCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Certifications Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCertifications.map((certification, index) => (
                  <CertificationCard key={certification.id} certification={certification} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filteredCertifications.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No certifications found in this category.
                </p>
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always pursuing new certifications and learning opportunities to stay at the forefront
                of technology and enhance my skills.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/muhammad-umar-giki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View LinkedIn Profile
                </a>
                <button
                  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <CertificationModal
            certification={selectedCertification}
            onClose={() => setSelectedCertification(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Certifications
