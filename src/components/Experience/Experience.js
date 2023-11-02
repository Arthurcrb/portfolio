import React from 'react'
import styles from './Experience.module.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience" className={styles.competences}>
      <h2 className={styles.competences}>Compétences</h2>

      <div className={styles.experienceContainer}>
        <div>
          <h3>Frontend Development </h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>HTML</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>CSS</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>SASS</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>JavaScript</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>Bootstrap</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>React</h4>
                <small className={styles.textLight}>Expérimenté</small>
              </div>
            </article>
          </div>
        </div>

        <div>
          <h3>Backend Development</h3>
          <div className={styles.experienceContent}>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>PHP</h4>
                <small className={styles.textLight}>Intermédiaire</small>
              </div>
            </article>
            <article className={styles.experienceDetails}>
              <BsPatchCheckFill className={styles.experienceDetailsIcon} />
              <div>
                <h4>MySQL</h4>
                <small className={styles.textLight}>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
