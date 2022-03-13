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
        <title>Association Reve - Accueil</title>
      </Head>
      <NavBar />
      <WavyHeader />
      <LeftInfo
        title="Rêve pour l'avenir"
        paragraph="Le Réseau d'Étudiant.es Visionnaires et Engagé.es est une association située à Grenoble dont l'objectif est de promouvoir l'éducation, le développement personnel et culturel des étudiant.es ainsi que leur intégration dans la vie professionnelle."
        image="association_reve_presentation.jpg"
      />
      <ActivityContainer />
      <LeftInfo
        title="Café Débat"
        paragraph="C'est un lieu d'échange et de débat libre, respectant les opinions
        de chacun sur un sujet différent à chaque fois. En fonction des
        questions proposées, le café-débat ne sera pas seulement un exercice
        philosophique, mais aussi un exercice démocratique. Nous proposons 3
        thèmes différents sur lesquels chaque participant a le pouvoir de
        voter. Le sujet ayant reçu le plus de votes sera sélectionné pour le
        café-débat. Venez parler et écouter les autres, on se sent moins
        seul quand d'autres partagent nos expériences !"
        image="cafe_debat.jpeg"
      />
      <RightInfo
        title="Club Lecture"
        paragraph="Un club de lecture est un groupe de personnes qui lisent et
        discutent de livres sur la base d'un thème ou d'une liste de
        lecture. Une fois par mois, pendant environ deux heures, ils se
        réunissent pour passer du temps et discuter de littérature avec
        d'autres passionnés. Sans compter tous les moments consacrés à la
        lecture tout au long du mois. Venez partager votre passion et passer
        un agréable moment avec nos lecteurs !"
        image="club_lecture_presentation.jpeg"
      />

      <LeftInfo
        title="Théatre d'improvisation"
        paragraph="Le théâtre d'improvisation est une forme d'improvisation dans
        laquelle vous jouez une ou plusieurs scènes non répétées. Cela vous
        permet d'ignorer spontanément les jugements des autres, d'accepter
        vos propres idées et de faire confiance à vous-même et aux autres.
        Grâce aux nombreuses activités proposées, le théâtre d'improvisation
        vous permet de gagner en confiance et en créativité. Découvrez nos
        activités et venez nous rejoindre !"
        image="theatre_impro_presentation.jpeg"
      />
      <RightInfo
        title="Évenement"
        paragraph="L’objectif de notre association étant de permettre l’ancrage d’un réseau universitaire et professionnel, nous mettons tout en œuvre pour entretenir ce lien qui nous unit. Des moments de convivialités sont au rendez-vous à l’occasion de nos diverses activités et évènements."
        image="evenement_presentation.jpeg"
      />
      <Team />
      <div
        className={
          styles.helloAssoContainer +
          ' flex flex-col items-center justify-center p-5'
        }
      >
        <p className="mb-5 mt-5 text-5xl font-semibold">Devenir Adhérent ?</p>
        <p className="text-justify text-3xl">
          Vous pouvez dès maintenant devenir adhérent en remplissant le
          formulaire ci-dessous
        </p>
        <iframe
          scrolling="auto"
          src="https://www.helloasso.com/associations/reseau-des-etudiants-visionnaires-et-engages/adhesions/formulaire-d-adhesion/widget"
          className={styles.helloAssoFrame + ' mt-12'}
        ></iframe>
        {/* <p className="mt-5 text-5xl text-blue-900 underline underline-offset-8">
          <a
            target="_blank"
            href="https://www.helloasso.com/associations/reseau-des-etudiants-visionnaires-et-engages/adhesions/formulaire-d-adhesion"
          >
            HELLO ASSO
          </a>
        </p> */}
        {/* <p className="mt-12 text-justify text-xl text-gray-600">
          Pour plus d'informations, contactez-nous :{' '}
          <span className="text-blue-900 underline underline-offset-8">
            contact@revepourlavenir.fr
          </span>
        </p> */}
      </div>

      <FootBar />
    </>
  )
}

export default index
