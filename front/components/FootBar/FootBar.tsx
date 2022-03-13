import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/components/FootBar.module.css'

interface FootBarProps {}

const FootBar: React.FC<FootBarProps> = ({}) => {
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
      <footer
        className={
          styles.Footer + ' flex flex-col items-center justify-center p-5'
        }
      >
        <p className="text-xl font-bold"> © 2022 Assocation Reve</p>
        <p className="text-xl">contact@revepourlavenir.fr</p>
        <p className="mt-5 text-xl">
          made with <FontAwesomeIcon icon={faHeart} /> by{' '}
          <a
            target="_blank"
            className="italic underline"
            href="https://www.fikretkurklu.com"
          >
            fikretkurklu
          </a>
        </p>
      </footer>
    </>
  )
}

export default FootBar
