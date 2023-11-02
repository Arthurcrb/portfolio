import React, { useState } from 'react'
import styles from './Nav.module.scss'
import logo from '../../assets/img/logo-bocadev.png'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navIcon}>
        <a href="#header" aria-label="homepage" aria-current="page">
          <img src={logo} alt="Portfolio BocaDev développeur Web"></img>
        </a>
      </div>
      <button
        type="button"
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        aria-label="Toggle Navigation"
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles.navlinksContainer} ${isOpen ? styles.open : ''}`}
      >
        <a href="#header">Accueil</a>
        <a href="#about">A propos</a>
        <a href="#experience">Compétences</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Nav
