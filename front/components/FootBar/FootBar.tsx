import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import styles from '../../styles/components/FootBar.module.css'

interface FootBarProps {}

const FootBar: React.FC<FootBarProps> = ({}) => {
  return (
    <footer
      className={
        styles.Footer + ' flex flex-col items-center justify-center p-5'
      }
    >
      <p className="text-xl"> © 2022 Assocation Reve</p>
      <p className="text-xl">
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
  )
}

export default FootBar
