import React, { useState } from 'react'
import {useLocation,Link} from 'react-router-dom'
import Button from './Button';
const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"/service"},
      {name:"ABOUT",link:"/about"},
      {name:"BLOG'S",link:"/blog"},
      {name:"CONTACT",link:"/contact"},
    ];
    const location = useLocation();
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 mb-8'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-teal-500 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        NEEL Averse
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link
                to={link.link}
                className={`text-gray-800 hover:text-gray-400 duration-500 ${location.pathname === link.link ? 'text-teal-500 font-bold' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))
        }

        <Button>
          Login
        </Button>
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar