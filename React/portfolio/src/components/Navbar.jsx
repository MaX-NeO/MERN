import { User2 } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
    ]
    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-purple-500 shadow-md shadow-purple-700 rounded-sm">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white'> Mohanraj M</div>
                    <div className='w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className='font-bold text-xl text-white'>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                            {/* <Link to={'/projects'}>
                                <li className='font-bold text-xl text-white'>Projects</li>
                            </Link>
                            <Link to={'/contact'}>
                                <li className='font-bold text-xl text-white'>Contact</li>
                            </Link> */}
                        </ul>
                        <User2 className='h-9 w-9 text-white rounded-full border-2 border-white' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar