import Head from 'next/head'
import React from 'react'
import ActivityContainer from '../components/Activity/ActivityContainer'
import FootBar from '../components/FootBar/FootBar'
import LeftInfo from '../components/Info/LeftInfo'
import RightInfo from '../components/Info/RightInfo'
import NavBar from '../components/NavBar/NavBar'
import Team from '../components/Team/Team'
import WavyHeader from '../components/WavyHeader'

import styles from '../styles/pages/index.module.css'

interface indexProps {}

const index: React.FC<indexProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Rêve Pour l'Avenir - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
      <div id="introduction">
        <LeftInfo
          title="Rêve pour l'avenir"
          paragraph="Le Réseau d'étudiants visionnaires et engagés est une association
          située à Grenoble dont l'objectif est de promouvoir l'éducation, le
          développement personnel des étudiants ainsi que leur intégration dans
          la vie professionnelle. Rejoignez notre équipe pour bénéficier de tous
          nos services."
          image="association_reve_presentation.jpg"
        />
      </div>
      <div id="activity">
        <ActivityContainer />
        <LeftInfo
          title="Café Débat"
          paragraph="C'est un lieu d'échanges et de débat libre, respectant les opinions de
          chacun sur un sujet différent à chaque fois. Nous proposons 3 sujets
          différents sur lesquels chaque participant a le pouvoir de voter, le sujet
          qui aura reçu le plus de votes sera sélectionné. Les principaux acteurs
          étant nos membres, l'inévitable café-débat offre également un grand
          moment de rencontre et de réflexion."
          image="cafe_debat.jpeg"
        />
        <RightInfo
          title="Club Lecture"
          paragraph="Le club de lecture est l'activité idéale pour nos lecteurs. Une fois par
          mois, pendant environ deux heures, nous nous réunissons pour passer
          du temps et discuter de littérature avec d'autres amateurs. Venez
          partager votre passion et passer un bon moment avec nos adhérents !"
          image="club_lecture_presentation.jpeg"
        />

        <LeftInfo
          title="Théatre d'improvisation"
          paragraph="Cette nouvelle activité, qui est une forme d'improvisation dans laquelle
          nous jouons une ou plusieurs scènes non répétées, nous permet
          d'ignorer spontanément les jugements des autres, d'accepter nos
          propres idées et de faire confiance à nous-mêmes. Grâce aux
          nombreuses activités proposées, le théâtre d'improvisation vous
          permettra de gagner en confiance et en créativité."
          image="theatre_impro_presentation.jpeg"
        />
        <RightInfo
          title="Évenement"
          paragraph="Quoi de mieux que des événements pour faire connaissance avec nos
          membres et partager un moment de convivialité ? Entre le Laser game
          en début d'année, où le rire et la compétition étaient au rendez-vous,
          l'escape game où nous avons résolu des énigmes et les nombreux
          restaurants que nous avons partagés ensemble, l'association Reve fait
          de son mieux pour créer un lien qui nous unit, sans oublier le grand
          voyage à Strasbourg et la visite du Conseil de l'Europe, un moment
          de découverte. Le meilleur reste à venir !"
          image="evenement_presentation.jpeg"
        />
      </div>
      <div id="team">
        <Team />
      </div>
      <div
        id="subscribe"
        className={
          styles.helloAssoContainer +
          ' mt-12 flex flex-col items-center justify-center p-5'
        }
      >
        <p className="mb-5 text-5xl font-semibold">Devenir Adhérent ?</p>
        <p className="text-justify text-3xl">
          Vous pouvez dès maintenant devenir adhérent en remplissant le
          formulaire ci-dessous
        </p>
        <iframe
          scrolling="auto"
          src="https://www.helloasso.com/associations/reseau-des-etudiants-visionnaires-et-engages/adhesions/formulaire-d-adhesion/widget"
          className={styles.helloAssoFrame + ' mt-12'}
        ></iframe>
      </div>

      <FootBar />
    </>
  )
}

export default index
