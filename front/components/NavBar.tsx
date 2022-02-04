import Link from 'next/link'
import React, { useState } from 'react'

import styles from '../styles/components/NavBar.module.css'
import NavLink from './NavLink'

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className="flex flex-wrap items-center bg-sky-100 p-3">
      <Link href="/home">
        <a className="logo-image mr-4 inline-flex items-center p-2">
          {/* <svg
            className="mr-2 h-8 w-8 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          <img src="student.svg" width={60} className="mr-3" />
          <span
            className={styles.title + ' text-2xl font-medium tracking-tight'}
          >
            ASSOCIATION REVE
          </span>
        </a>
      </Link>
      <button
        onClick={handleClick}
        className=" ml-auto inline-flex rounded p-3 text-black outline-none hover:bg-sky-600 hover:text-white lg:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <NavLink link="/home" title="Accueil" />
          <NavLink link="/activity" title="Activité" />
          <NavLink link="/contact" title="Contact" />
        </div>
      </div>
    </nav>
  )
}
