import React from 'react'
import styles from '../../styles/components/ActivityCard.module.css'

interface ActivityCardProps {
  title: string
  image: string
}

const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  return (
    <div
      className={
        styles.activityContainer + ' flex flex-col justify-center  p-10'
      }
    >
      <img src={props.image} width={300} />
      <p className="mt-5 text-center text-xl font-bold text-white">
        {props.title}
      </p>
    </div>
  )
}

export default ActivityCard
