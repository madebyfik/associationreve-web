import React from 'react'
import ActivityCard from './ActivityCard'

import styles from '../../styles/components/ActivityContainer.module.css'

interface ActivityContainerProps {}

const ActivityContainer: React.FC<ActivityContainerProps> = ({}) => {
  return (
    <div
      className={
        styles.container + ' flex flex-wrap items-center justify-between p-5'
      }
    >
      <ActivityCard title="Café Débat" image="coffee.png" />
      <ActivityCard title="Club Lecture" image="book.png" />
      <ActivityCard title="Théâtre d'improvisation" image="theatre.png" />
      <ActivityCard title="Évenement" image="activity.png" />
    </div>
  )
}

export default ActivityContainer
