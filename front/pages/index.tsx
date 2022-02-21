import Head from 'next/head'
import React from 'react'
import ActivityContainer from '../components/Activity/ActivityContainer'
import FootBar from '../components/FootBar/FootBar'
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
      <p className="m-5 p-5 text-center text-3xl font-extrabold">
        DES ACTIVITÉS DIVERSES ET VARIÉS
      </p>
      <ActivityContainer />
      <div className="flex flex-wrap">
        <div className="w-1/2 p-10">
          <p className="text-2xl font-bold">Café Débat</p>
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
        <div className="w-1/2 p-10">
          <p className="text-2xl font-bold">Club Lecture</p>
          <p className="text-xl">
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
          <p className="text-2xl font-bold">Théatre D'improvisation</p>
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
        <div className="w-1/2 p-10">
          <p className="text-2xl font-bold">Évenement</p>
          <p className="text-xl">
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
