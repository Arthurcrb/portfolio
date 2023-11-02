import React from 'react'
import styles from './Header.module.css'
// import Socials from '../Socials/Socials'
import heroImage1024 from '../../assets/img/black-cubes-26201.jpeg'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <>
      <header>
        {/* <Socials /> */}

        <div className={styles.containerHeader} id="header">
          <div className={styles.hero}>
            <img
              srcSet={heroImage1024}
              alt="background développeur web"
              className={styles.heroImage}
            />
            <Nav />
            <div className={styles.box}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className={styles.content}>
                <h1 className={styles.titlePortfolio}>Portfolio</h1>

                <h3 className={styles.subTitle}>
                  Intégrateur / Développeur Web
                </h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
