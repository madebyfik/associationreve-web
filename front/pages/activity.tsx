import React from 'react'
import NavBar from '../components/NavBar/NavBar'

import styles from '../styles/pages/activity.module.css'

interface activityProps {}

const activity: React.FC<activityProps> = ({}) => {
  return (
    <>
      <NavBar />
      <p className="mt-5 pt-5 text-center text-3xl font-extrabold">ACTIVITÉS</p>
      <div
        className={
          styles.container + ' flex flex-wrap items-center justify-center p-5'
        }
      >
        <div
          className={
            styles.activityContainer +
            ' flex flex-col justify-center rounded-lg border-2 p-10'
          }
        >
          <img src="coffee.png" width={300} />
          <p className="mt-5 text-center text-xl text-white">Café débat</p>
        </div>
        <div
          className={
            styles.activityContainer +
            ' flex flex-col justify-center rounded-lg border-2 p-10'
          }
        >
          <img src="book.png" />
          <p className="mt-5 text-center text-xl text-white">Club lecture</p>
        </div>
        <div
          className={
            styles.activityContainer +
            ' flex flex-col justify-center rounded-lg border-2 p-10'
          }
        >
          <img src="theatre.png" width={300} />
          <p className="mt-5 text-center text-xl text-white">
            Théâtre d'improvisation
          </p>
        </div>
        <div
          className={
            styles.activityContainer +
            ' flex flex-col  justify-center rounded-lg border-2 p-10'
          }
        >
          <img src="activity.png" width={300} />
          <p className="mt-5 text-center text-xl text-white">Évenement</p>
        </div>
      </div>
    </>
  )
}

export default activity
