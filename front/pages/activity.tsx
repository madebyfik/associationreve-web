import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import ActivityCard from '../components/Activity/ActivityCard'

import styles from '../styles/pages/activity.module.css'
import ActivityContainer from '../components/Activity/ActivityContainer'

interface activityProps {}

const activity: React.FC<activityProps> = ({}) => {
  return (
    <>
      <NavBar />
      {/* <p className="mt-5 pt-5 text-center text-3xl font-extrabold">ACTIVITÉS</p> */}
      <ActivityContainer />
    </>
  )
}

export default activity
