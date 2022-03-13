import React from 'react'
import styles from '../../styles/components/TeamCard.module.css'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

interface TeamCardProps {
  image: string
  title: string
  name: string
  mail: string
  linkedinLink: string
  instagramLink: string
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
  return (
    <div
      className={
        styles.teamCard +
        ' m-5 flex flex-col items-center justify-center text-center'
      }
    >
      <img src={props.image} width={200} />
      <p className="mt-5 text-lg font-bold">{props.name}</p>
      <p className="text-gray-500">{props.title}</p>
      {/* <div className="mt-3 flex w-16 justify-between text-2xl text-gray-300">
        <p>
          <a target="_blank" href={props.instagramLink}>
            <BsInstagram />
          </a>
        </p>
        <p>
          <a target="_blank" href={props.linkedinLink}>
            <BsLinkedin />
          </a>
        </p>
      </div> */}
    </div>
  )
}

export default TeamCard
