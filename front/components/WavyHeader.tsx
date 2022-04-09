import React from 'react'

import { SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si'
import styles from '../styles/components/WavyHeader.module.css'

interface WavyHeaderProps {}

const WavyHeader: React.FC<WavyHeaderProps> = ({}) => {
  return (
    <>
      <div
        className={
          styles.container +
          ' flex flex-wrap content-center justify-center pt-20'
        }
      >
        <div
          className={
            styles.headerText +
            ' flex w-1/2 flex-col content-center justify-center'
          }
        >
          <h1 className="mb-5 text-4xl font-semibold text-white">
            Bienvenue à l'ASSOCIATION REVE
          </h1>
          <p className="text-xl font-medium text-white">
            Bienvenue sur notre site internet. Découvrir et en apprendre plus
            sur qui nous sommes, nos objectifs, les activités que l’on
            organise... vous êtes à la bonne adresse !
          </p>
          <div className="mt-5 flex w-52 justify-between text-2xl text-white">
            <a target="_blank" href="https://instagram.com/associationreve">
              <SiInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/association-reve-298711222/?originalSubdomain=fr"
            >
              <SiLinkedin />
            </a>
            <a href="mailto:revepourlavenir@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
        <div
          className={
            styles.headerImage + ' flex w-1/2 content-center justify-center'
          }
        >
          <img
            src="reve-logo.png"
            // src="https://source.unsplash.com/1600x1050/?nature"
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

export default WavyHeader
