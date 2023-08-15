import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img  className='w-[500px] mx-auto my-4' src= {Laptop} alt='/'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego and published by Rockstar Games. 
                    A successor to 2004's Red Dead Revolver, it is the second game in the Red Dead series. 
                    Red Dead Redemption is set during the decline of the American frontier in the year 1911 and follows John Marston, 
                    a former outlaw whose wife and son are taken hostage by the government in ransom for his services as a hired gun.
                     Having no other choice, Marston sets out to bring three members of his former gang to justice.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
