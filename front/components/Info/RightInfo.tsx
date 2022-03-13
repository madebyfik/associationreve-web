import React from 'react'

import styles from '../../styles/components/RightInfo.module.css'

interface RightInfoProps {
  title: string
  paragraph: string
  image: string
}

const RightInfo: React.FC<RightInfoProps> = (props) => {
  return (
    <div
      className={
        styles.container + ' mt-5 flex flex-wrap content-center justify-center'
      }
    >
      <div className={styles.image + ' flex w-1/2 justify-end p-20'}>
        <img width={600} src={props.image} className="rounded-lg" />
      </div>
      <div className={styles.text + ' flex w-1/2 flex-col justify-center p-20'}>
        <p className="mb-5 text-3xl font-semibold">{props.title}</p>
        <p className="text-justify text-xl">{props.paragraph}</p>
      </div>
    </div>
  )
}

export default RightInfo
