import React from 'react'

//assets
import Omoding from '../assets/images/darlio_pic.png'
import {colors} from '../assets/utils/colors'

//icons
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { MdMail } from "react-icons/md";
import { BsGithub} from "react-icons/bs";

const Intro = () => {
  return (
    <div className='w-full md:mt-10 h-5/6 md:flex justify-between pb-3  px-5 p-2 md:px-10 md:p-3'>
        {/* Left */}
        <div className='w-full mt-10 md:w-6/12 space-y-2 md:space-y-5'>
            <div 
            style={{color:colors.black}}
            className='text-2xl font-bold md:text-6xl md:pt-5 md:font-bold'>
                <h2 className="md:tracking-wide mb-2">Hey There,</h2>
                <h2 className="md:tracking-wide">I am Omoding.</h2>
            </div>
            <div 
            style={{color:colors.black}}
            className='md:text-xl md:pt-5 md:font-normal'>
                <h2 style={{color:colors.dark}} className="tracking-wide mb-2">A fullStack Software</h2>
                <h2 style={{color:colors.dark}} className="tracking-wide">Developer.</h2>
            </div>
            <div className='md:hidden block'>
            <p style={{color:colors.gray}} className='md:text-xl text-base font-extralight md:font-light'>I Spend most of time 
            coding outstanding projects for clients</p>
          </div>
            <div
            style={{color:colors.black}}
             className='md:pt-14 w-full flex space-x-1.5 md:space-x-3 items-center text-xl md:text-3xl'>
                <div style={{width:0}}></div>
                <div className='cursor-pointer hover:text-teal-500'><IoLogoLinkedin /></div>
                <div className='cursor-pointer hover:text-teal-500'><IoLogoTwitter /></div>
                <div className='cursor-pointer hover:text-teal-500'><BsGithub /></div>
                <div className='cursor-pointer hover:text-teal-500'><MdMail /></div>
                
                
            </div>
        </div>
        {/* Right */}
        <div className='w-full md:w-6/12 space-y-2 md:space-y-3'>
          <div className='w-full '>
            {/* image */}
            <img className="md:h-96 h-64" src={Omoding} style={{}} alt='profile' />
          </div>
          <div className='hidden md:block'>
            <p style={{color:colors.gray}} className='md:text-xl text-base font-extralight md:font-light'>I Spend most of time 
            coding outstanding projects for clients</p>
          </div>
        </div>
       
    </div>
  )
}

export default Intro