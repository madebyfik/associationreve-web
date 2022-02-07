import Head from 'next/head'
import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import Team from '../components/Team/Team'
import TeamCard from '../components/Team/TeamCard'
import WavyHeader from '../components/WavyHeader'

import styles from '../styles/pages/index.module.css'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Association Reve - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
      <Team />
    </>
  )
}

export default index
