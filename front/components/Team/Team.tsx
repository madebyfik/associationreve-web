import React from 'react'
import TeamCard from './TeamCard'

import styles from '../../styles/components/Team.module.css'

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
  return (
    <div
      className={styles.containerEquipe + ' mt-10 flex flex-col items-center '}
    >
      <p className="text-center text-3xl font-extrabold">Une équipe de rêve</p>
      <div className="mt-5 flex w-1/2 flex-wrap justify-around p-5">
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
  )
}

export default Team
