import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink";

const navItems = [
    {path: '/about', text: 'About'},
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'},
];


const Navbar = async () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
       <Link href='/'>
        <HomeIcon size={24} className='flex items-center mr-2' />
        <span>Home</span>
       </Link>

        <div className="flex flex-1"></div>

        {
            navItems.map((item, index) => (
                <ActiveLink key={index} {...item} />
            ))
        }
    </nav>
  )
}

export default Navbar
