// import Link from 'next/link'

import React from 'react'
import { Link } from 'react-scroll'
interface NavLinkProps {
  // link: string
  title: string
  styleData: string
  to: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const handleSetInactive = () => {}

  return (
    // <Link href={props.link}>
    <Link to={props.to} spy={true} smooth={true} offset={-70} duration={500}>
      <a
        className={
          props.styleData +
          ' h-auto w-auto items-center justify-center px-3 py-2 text-lg font-bold text-black hover:cursor-pointer lg:w-auto'
        }
      >
        {props.title}
      </a>
    </Link>
  )
}

export default NavLink
