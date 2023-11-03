import React, { useState } from 'react';
import data from '../../assets/data.json';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <section id="portfolio">
      <div className={styles.sectionPortfolio}>
        <h2 className={styles.titlePortfolio}>Portfolio</h2>

        <div className={styles.tabs}>
          <div
            role="tablist"
            aria-label="tabs component"
            className={styles.tabsBtnContainer}
          >
            <button
              role="tab"
              aria-controls="panel-1"
              id="tab-1"
              type="button"
              aria-selected={activeTab === 0 ? 'true' : 'false'}
              tabIndex={activeTab === 0 ? '0' : '-1'}
              className={
                activeTab === 0
                  ? `${styles.tab} ${styles.activeTab}`
                  : styles.tab
              }
              onClick={() => handleTabClick(0)}
            >
              Projets Front-end
            </button>
          </div>

          <div
            id="panel-1"
            role="tabpanel"
            tabIndex="0"
            aria-labelledby="tab-1"
            className={
              activeTab === 0
                ? `${styles.tabContent} ${styles.activeTabContent}`
                : styles.tabContent
            }
          >
            <div className={styles.portfolioContainer}>
              {data.map(({ id, image, title, github, demo, text, hasDemo }) => {
                return (
                  <article key={id} className={styles.portfolioItem}>
                    <div className={styles.card1}>
                      <div className={styles.portfolioItemImage}>
                        <img src={image} alt={title} />
                      </div>
                      <h3>{title}</h3>
                      <div className={styles.portfolioItemCta}>
                        <a
                          href={github}
                          className={styles.btn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Github
                        </a>
                        {hasDemo && (
                          <a
                            href={demo}
                            className={styles.btnPrimary}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                    <div className={styles.card2}>
                      <p>{text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
