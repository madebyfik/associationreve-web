import Head from 'next/head'
import React from 'react'
import { NavBar } from '../components/NavBar'
import TeamCard from '../components/TeamCard'
import WavyHeader from '../components/WavyHeader'

import styles from '../styles/pages/home.module.css'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Association Reve - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
      <div
        className={
          styles.containerEquipe + ' mt-10 flex flex-col items-center '
        }
      >
        <p className="text-center text-3xl font-extrabold">
          Une équipe de rêve
        </p>
        <div className="mt-5 flex w-1/2 flex-wrap justify-between p-5">
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
        </div>
        <div className="mt-5 flex w-1/2 flex-wrap justify-between p-5">
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
          <TeamCard
            image="spidey.jpg"
            title="Président"
            name="Furkan Tanriverdi"
            mail="furkantanriverdi@associationreve.com"
          />
        </div>
      </div>
    </>
  )
}

export default index
