import React, { useEffect } from 'react'
import { updateScrollProgress } from '../utils/analytics'

const ScrollProgressBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      updateScrollProgress()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="scroll-progress-bar"></div>
  )
}

export default ScrollProgressBar
