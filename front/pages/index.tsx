import Head from 'next/head'
import React from 'react'
import ActivityContainer from '../components/Activity/ActivityContainer'
import FootBar from '../components/FootBar/FootBar'
import LeftInfo from '../components/Info/LeftInfo'
import RightInfo from '../components/Info/RightInfo'
import NavBar from '../components/NavBar/NavBar'
import Team from '../components/Team/Team'
import WavyHeader from '../components/WavyHeader'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPersonSnowboarding,
  faMasksTheater,
  faBookOpenReader,
  faMugHot,
} from '@fortawesome/free-solid-svg-icons'

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
        title="L'équipe en détail"
        paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          repellat consequuntur nesciunt id eveniet, dolore similique,
          temporibus eius veniam repudiandae est facilis aperiam possimus non ea
          quas. Iste, laudantium veritatis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Consequuntur earum dolorum voluptatem
          quam hic excepturi nemo, error modi incidunt est eos amet nulla sequi
          beatae nisi reprehenderit vero velit sed?"
        image="https://source.unsplash.com/1600x1050/?nature"
      />
      <ActivityContainer />
      <div className="mt-5 flex flex-wrap">
        <div className="flex w-1/2 flex-col p-10">
          <p className="text-2xl font-bold">
            Café Débat <FontAwesomeIcon icon={faMugHot} />
          </p>
          <div>
            <img
              width={600}
              src="https://source.unsplash.com/1600x1050/?architecture"
            />
          </div>
          <p className="text-xl">
            Text 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos incidunt velit laborum exercitationem eum quod nostrum
            temporibus animi optio, necessitatibus, molestias et commodi non,
            eligendi veritatis. Rem, doloremque ea. Iste! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Dicta recusandae totam placeat
            modi consequuntur architecto tempora quis natus molestias iure quam
            neque, voluptates quasi mollitia aut velit rem ab itaque.
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-end p-10">
          <p className="text-2xl font-bold">
            Club Lecture <FontAwesomeIcon icon={faBookOpenReader} />
          </p>
          <div>
            <img
              width={600}
              src="https://source.unsplash.com/1600x1050/?film"
            />
          </div>
          <p className="text-right text-xl">
            Text 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos incidunt velit laborum exercitationem eum quod nostrum
            temporibus animi optio, necessitatibus, molestias et commodi non,
            eligendi veritatis. Rem, doloremque ea. Iste! Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Dolorem sit natus ea adipisci
            iste ullam rem? Cupiditate, iure. Fugit ipsum quae doloremque iusto
            excepturi velit doloribus, aliquam cum alias minus!
          </p>
        </div>
        <div className="w-1/2 p-10">
          <p className="text-2xl font-bold">
            Théatre D'improvisation <FontAwesomeIcon icon={faMasksTheater} />
          </p>
          <div>
            <img
              width={600}
              src="https://source.unsplash.com/1600x1050/?people"
            />
          </div>
          <p className="text-xl">
            Text 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos incidunt velit laborum exercitationem eum quod nostrum
            temporibus animi optio, necessitatibus, molestias et commodi non,
            eligendi veritatis. Rem, doloremque ea. Iste! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Labore cum dolore ullam, quidem
            iusto veritatis quas corporis quaerat totam nam quod at animi eum
            provident doloremque numquam ad repellendus molestiae?
          </p>
        </div>
        <div className="flex w-1/2 flex-col items-end p-10">
          <p className="text-2xl font-bold">
            Évenement <FontAwesomeIcon icon={faPersonSnowboarding} />
          </p>
          <div>
            <img
              width={600}
              src="https://source.unsplash.com/1600x1050/?entrepreneur"
            />
          </div>
          <p className="text-right text-xl">
            Text 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quos incidunt velit laborum exercitationem eum quod nostrum
            temporibus animi optio, necessitatibus, molestias et commodi non,
            eligendi veritatis. Rem, doloremque ea. Iste! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis veniam, maxime
            blanditiis vel eligendi nobis dolor debitis laboriosam eaque
            perferendis magnam quidem dolore mollitia modi delectus maiores
            iusto facere doloremque.
          </p>
        </div>
      </div>

      <FootBar />
    </>
  )
}

export default index
