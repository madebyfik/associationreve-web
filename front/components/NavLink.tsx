import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
  link: string
  title: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <Link href={props.link}>
      <a className="w-full items-center justify-center rounded px-3 py-2 text-lg font-bold text-black hover:bg-sky-600 hover:text-white lg:inline-flex lg:w-auto ">
        {props.title}
      </a>
    </Link>
  )
}

export default NavLink
