// Analytics and Local Storage Utilities

// Page Views Analytics
export const getPageViews = () => {
  const views = localStorage.getItem('portfolio-page-views')
  return views ? parseInt(views) : 0
}

export const incrementPageViews = () => {
  const currentViews = getPageViews()
  const newViews = currentViews + 1
  localStorage.setItem('portfolio-page-views', newViews.toString())
  return newViews
}

// Theme Management
export const getTheme = () => {
  return localStorage.getItem('theme') || 'light'
}

export const setTheme = (theme) => {
  localStorage.setItem('theme', theme)
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export const toggleTheme = () => {
  const currentTheme = getTheme()
  const newTheme = currentTheme === 'light' ? 'dark' : 'light'
  setTheme(newTheme)
  return newTheme
}

// Scroll Progress
export const updateScrollProgress = () => {
  const scrolled = window.scrollY
  const maxHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrolled / maxHeight) * 100
  
  document.documentElement.style.setProperty('--scroll-progress', `${progress}%`)
  return progress
}

// Smooth Scroll to Element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    })
  }
}

// Form Validation
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateForm = (formData) => {
  const errors = {}
  
  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long'
  }
  
  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }
  
  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

// Local Storage for Contact Form
export const saveContactDraft = (formData) => {
  localStorage.setItem('contact-draft', JSON.stringify(formData))
}

export const getContactDraft = () => {
  const draft = localStorage.getItem('contact-draft')
  return draft ? JSON.parse(draft) : {}
}

export const clearContactDraft = () => {
  localStorage.removeItem('contact-draft')
}

// Intersection Observer for Animations
export const createObserver = (callback, options = {}) => {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options })
}

// Debounce Function
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle Function
export const throttle = (func, limit) => {
  let inThrottle
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Copy to Clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea')
    textArea.value = text
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
    return true
  }
}

// Format Date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Generate Random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Check if Element is in Viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Animation Delays
export const getAnimationDelay = (index, baseDelay = 0.1) => {
  return index * baseDelay
}

// Device Detection
export const isMobile = () => {
  return window.innerWidth <= 768
}

export const isTablet = () => {
  return window.innerWidth > 768 && window.innerWidth <= 1024
}

export const isDesktop = () => {
  return window.innerWidth > 1024
}

// Performance Monitoring
export const measurePerformance = (name) => {
  if (window.performance && window.performance.mark) {
    window.performance.mark(name)
  }
}
