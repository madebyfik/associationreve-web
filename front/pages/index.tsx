import Head from 'next/head'
import React from 'react'
import LeftInfo from '../components/Info/LeftInfo'
import RightInfo from '../components/Info/RightInfo'
import NavBar from '../components/NavBar/NavBar'
import Team from '../components/Team/Team'
import WavyHeader from '../components/WavyHeader'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Association Reve - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
      <LeftInfo
        title="Lorem ipsum dolor sit"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellat consequuntur nesciunt id eveniet, dolore similique,
          temporibus eius veniam repudiandae est facilis aperiam possimus non ea
          quas. Iste, laudantium veritatis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Consequuntur earum dolorum voluptatem
          quam hic excepturi nemo, error modi incidunt est eos amet nulla sequi
          beatae nisi reprehenderit vero velit sed?"
        image="https://source.unsplash.com/1600x1050/?wallpapers"
      />
      <Team />
      <RightInfo
        title="Lorem ipsum dolor sit"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellat consequuntur nesciunt id eveniet, dolore similique,
          temporibus eius veniam repudiandae est facilis aperiam possimus non ea
          quas. Iste, laudantium veritatis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Consequuntur earum dolorum voluptatem
          quam hic excepturi nemo, error modi incidunt est eos amet nulla sequi
          beatae nisi reprehenderit vero velit sed?"
        image="https://source.unsplash.com/1600x1050/?nature"
      />
    </>
  )
}

export default index
