import React from 'react'
import ActivityCard from './ActivityCard'

import styles from '../../styles/components/ActivityContainer.module.css'

interface ActivityContainerProps {}

const ActivityContainer: React.FC<ActivityContainerProps> = ({}) => {
  return (
    <>
      <div className={styles.customShapeTop + ' mt-10'}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={styles.customShapeSvgTop}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFillTop}
          ></path>
        </svg>
      </div>
      <div className={styles.container + ' p-12'}>
        <p className=" p-5 text-center text-3xl font-extrabold text-white">
          DES ACTIVITÉS DIVERSES ET VARIÉES
        </p>
        <div className={' flex flex-wrap items-center justify-center'}>
          <ActivityCard title="Café Débat" image="coffee.png" />
          <ActivityCard title="Club Lecture" image="book.png" />
          <ActivityCard title="Théâtre d'improvisation" image="theatre.png" />
          <ActivityCard title="Évenement" image="activity.png" />
        </div>
      </div>
      <div className={styles.customShape}>
        <svg
          data-name="Layer 1"
          className={styles.customShapeSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </>
  )
}

export default ActivityContainer
