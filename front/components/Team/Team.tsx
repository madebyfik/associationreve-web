import React from 'react'
import TeamCard from './TeamCard'

import styles from '../../styles/components/Team.module.css'

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
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
      <div
        className={
          styles.containerEquipe + ' flex flex-col items-center pt-10 pb-10'
        }
      >
        <p className="text-center text-3xl font-extrabold">
          UNE ÉQUIPE DE RÊVE
        </p>
        <div className="mt-5 flex w-1/2 flex-wrap justify-around p-5">
          <TeamCard
            image="furkantanriverdi.jpeg"
            title="Président"
            name="Furkan TANRIVERDI"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink="https://www.linkedin.com/in/tanriverdi-furkan-31a03a151/"
            instagramLink="https://www.instagram.com/mr_furkan_tanriverdi/"
          />
          <TeamCard
            image="abdulsamettanriverdi.jpeg"
            title="Vice Président"
            name="Abdulsamet TANRIVERDI"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink="https://www.linkedin.com/in/abdul-samet-tanriverdi-7708b2168/"
            instagramLink="#"
          />
          <TeamCard
            image="elifhirlak.jpg"
            title="Secrétaire"
            name="Elif HIRLAK"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink=""
            instagramLink="https://www.instagram.com/elif_hrlk/"
          />
          <TeamCard
            image="melinda.jpeg"
            title="Responsable Partenariat"
            name="Melinda AVCU"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink=""
            instagramLink="https://www.instagram.com/eam_yahs/"
          />
          <TeamCard
            image="esra.jpeg"
            title="Responsable Éducation"
            name="Esra BESLI"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink=""
            instagramLink="https://www.instagram.com/eam_yahs/"
          />
          <TeamCard
            image="chaymae.jpeg"
            title="Responsable Communication"
            name="Chaymae RAHMANI"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink=""
            instagramLink="https://www.instagram.com/eam_yahs/"
          />
          <TeamCard
            image="emredagdemir.jpg"
            title="Pôle Culturel"
            name="Emre DAGDEMIR"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink="https://www.linkedin.com/in/emre-dagdemir-a622ba19b/"
            instagramLink="https://www.instagram.com/emrethealchemist/"
          />
          <TeamCard
            image="ramazanakyol.jpeg"
            title="Pôle Évenementiel"
            name="Ramazan AKYOL"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink="https://www.linkedin.com/in/ramazan-akyol-1b6331227/"
            instagramLink="https://www.instagram.com/ramo_akyol/"
          />
          <TeamCard
            image="selim.jpeg"
            title="Trésorier"
            name="Selim ÇETINTAS"
            mail="furkantanriverdi@associationreve.com"
            linkedinLink=""
            instagramLink="https://www.instagram.com/eam_yahs/"
          />
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

export default Team
