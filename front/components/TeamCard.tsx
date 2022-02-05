import React from 'react'
import styles from '../styles/components/TeamCard.module.css'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

interface TeamCardProps {
  image: string
  title: string
  name: string
  mail: string
}

const TeamCard: React.FC<TeamCardProps> = (props) => {
  return (
    <div className={styles.teamCard}>
      <img src={props.image} width={200} />
      <p className="mt-5 text-lg font-bold">{props.name}</p>
      <p className="text-blue-600">{props.title}</p>
      <div className="mt-3 flex w-16 justify-between text-2xl text-gray-500">
        <p>
          <a href="#">
            <BsInstagram />
          </a>
        </p>
        <p>
          <a href="#">
            <BsLinkedin />
          </a>
        </p>
      </div>
    </div>
  )
}

export default TeamCard
