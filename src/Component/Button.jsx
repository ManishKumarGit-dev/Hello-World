import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-teal-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-teal-500 
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button