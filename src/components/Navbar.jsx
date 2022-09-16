import React from 'react'

import { BsTelephonePlus } from "react-icons/bs";
import { RiMenu5Fill } from "react-icons/ri";
import { colors } from '../assets/utils/colors';

const Navbar = () => {
  return (
    <div 
    style={{flex:1}}
    className='w-full flex justify-between items-center border-b-2 pb-3  px-5 p-2 md:px-10 md:p-3'>
        <div style={{flex:1}}>
            <h2 
            className='text-3xl text-teal-500'
            style={{fontFamily:"dancing script", fontWeight:700}}>Omoding</h2>
        </div>
       <div
       style={{flex:2,color:colors.black}}
        className=' hidden md:flex justify-between items-center'>
            <h3 
            className='hover:text-teal-500 cursor-pointer font-semibold'
            style={{textTransform:'uppercase'}}
            >Services</h3>
            <h3 
            className='hover:text-teal-500 cursor-pointer font-semibold'
            style={{ textTransform:'uppercase'}}>Works</h3>
            <h3
            className='hover:text-teal-500 cursor-pointer font-semibold'
             style={{ textTransform:'uppercase'}}>Notes</h3>
            <h3 
            className='hover:text-teal-500 cursor-pointer font-semibold'
            style={{ textTransform:'uppercase'}}>Experience</h3>
       </div>
       <div className='hidden md:flex items-center justify-end space-x-2'
        style={{flex:1}}>
            <div>
            <h6 className='font-semibold' style={{color:colors.dark}}>+2567851247779</h6>
            </div>
            <div
            style={{backgroundColor:"white"}}
            className='shadow-lg cursor-pointer
             hover:shadow-2xl text-teal-500 
             hover:font-semibold transition-all 
             p-2 flex justify-center 
             items-center rounded-full'>
            <BsTelephonePlus />
            </div>
       </div>
       <div  style={{backgroundColor:"white"}}
            className=' md:hidden shadow-lg cursor-pointer 
            hover:shadow-2xl text-teal-500
             hover:font-semibold 
            transition-all p-2 flex
             justify-center items-center rounded-full'>
       <RiMenu5Fill />
       </div>
    </div>
  )
}

export default Navbar