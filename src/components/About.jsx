import React from 'react'

//icons
import {  MdWebAsset } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";
import { SiAzuredevops } from "react-icons/si";
//colors
import {colors} from '../assets/utils/colors'

const About = () =>{
    return (
        <div className='w-full space-y-3 md:mt-10 h-5/6 flex-col-reverse flex md:flex-row justify-between pb-3  px-5 p-2 md:px-10 md:p-3'>
          {/* LEFT */}
         <div className='space-y-2 mt-5'>
         <div 
          style={{width:300}}
          className='flex items-center space-x-2 md:space-x-3 shadow-xl py-3 px-3 rounded-md' >
           <div 
           style={{height:54, width:54, backgroundColor:colors.orange, color:'white'}}
           className='flex justify-center items-center rounded-full'>
          <MdWebAsset size={32} />
           </div>
           <div>
            <h2 className='text-lg font-semibold'>Web development</h2>
            <small style={{color:colors.gray}} className='font-extralight'>76 projects</small>
           </div>
          </div>
          <div 
          style={{width:300}}
          className='flex items-center space-x-2 md:space-x-3 shadow-xl py-3 px-3 rounded-md' >
           <div 
           style={{height:54, width:54, color:'white'}}
           className='flex justify-center items-center rounded-full bg-teal-500'>
          
          <BiMobileAlt size={32}/>
           </div>
           <div>
            <h2 className='text-lg font-semibold'>Mobile Development</h2>
            <small style={{color:colors.gray}} className='font-extralight'>10 projects</small>
           </div>
          </div>
          <div 
          style={{width:300}}
          className='flex items-center space-x-2 md:space-x-3 shadow-xl py-3 px-3 rounded-md' >
           <div 
           style={{height:54, width:54, backgroundColor:colors.orange, color:'white'}}
           className='flex justify-center items-center rounded-full'>
          <SiAzuredevops size={32} />
           </div>
           <div>
            <h2 className='text-lg font-semibold'>DevOps</h2>
            <small style={{color:colors.gray}} className='font-extralight'>9 projects</small>
           </div>
          </div>
         </div>

         {/* RIGHT */}
         <div className='w-11/12 md:w-6/12 md:flex flex-col items-center'>
           <h2 
           style={{color:colors.black}}
           className='text-2xl font-extrabold'>What I do?</h2>
           <p 
           style={{color:colors.gray}}
           className='mt-3 flex-wrap font-light'>
           It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that 
            it has a more-or-less normal distribution of letters,
             as opposed to using
            'Content here, content here', making it look like readable English.
           </p>
           <div className='mt-5 w-full flex justify-between items-center'>
            <div>
              <h2 className='text-2xl font-extrabold'>285+</h2>
              <small style={{color:colors.gray}} className='font-light'>Projects Completed</small>
            </div>
            <div>
              <h2 className='text-2xl font-extrabold'>85+</h2>
              <small style={{color:colors.gray}} className='font-light'>Customers Satisfied</small>
            </div>

           </div>
         </div>
        </div>
    )
}

export default About