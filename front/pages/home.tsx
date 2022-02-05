import Head from 'next/head'
import React from 'react'
import { NavBar } from '../components/NavBar'
import WavyHeader from '../components/WavyHeader'

interface homeProps {}

const home: React.FC<homeProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Association Reve - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
    </>
  )
}

export default home
