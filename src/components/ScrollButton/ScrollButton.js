import React, { useState, useEffect } from 'react'
import styles from './ScrollButton.module.scss' // Importez les styles du module

function ScrollButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      className={`${styles['scroll-button']} ${
        showButton ? styles['visible'] : ''
      }`}
      onClick={scrollToTop}
    ></button>
  )
}

export default ScrollButton
