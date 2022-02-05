import React from 'react'
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa'
import styles from '../styles/components/WavyHeader.module.css'

interface WavyHeaderProps {}

const WavyHeader: React.FC<WavyHeaderProps> = ({}) => {
  return (
    <>
      <div className={styles.container + ' grid content-center justify-center'}>
        <div className="grid grid-cols-2">
          <div className="flex flex-col content-end justify-center pl-60">
            <h1 className="mb-5 text-5xl font-semibold text-white">
              Association REVE
            </h1>
            <p className="font-medium text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus nobis laudantium voluptate nam deserunt nulla sunt a,
              asperiores consequatur repellat aut sit at repudiandae maxime
              cupiditate magnam pariatur rem ea. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Quia corrupti tempora temporibus
              libero impedit assumenda repellendus eos nulla velit, delectus
              voluptas, ducimus excepturi repudiandae ipsum unde quo deleniti
              explicabo sapiente.
            </p>
            <div className="mt-2 flex w-52 justify-between text-2xl text-white">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="grid content-center justify-center">
            <img
              className={styles.headerImage}
              src="reve-logo.png"
              // src="https://source.unsplash.com/1600x1050/?nature"
            />
          </div>
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
