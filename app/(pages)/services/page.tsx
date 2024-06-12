import Link from 'next/link'
import { CloudServices, Services } from '../../../constants/index'
import React from 'react'

const page = () => {
  return (
    <section className='px-5 py-10'>
      <h1 className='text-3xl leading-10 md:text-[2rem] text-primary text-center font-semibold'>Explore Our Expert Cloud Consulting & Training Services</h1>

      <div className="mt-10 flex flex-col items-center justify-center">
        <div className='flex flex-col md:flex-row gap-10 w-[90%] md:w-[70%]'>
          {Services.map((service) =>  (
            <div className='bg-secondary p-4 rounded-xl flex flex-col gap-4'>
              <service.icon size={50} className=' text-primary' />
              <h1 className='text-text_color font-bold text-lg'>{service.category}</h1>
              <p className='text-gray-500 text-center'>{service.description}</p>
            </div>
          ))}
        </div>
        <h1 className='text-primary text-[1.6rem] font-semibold text-center mt-14'>Cloud Services</h1>
        <div className='flex items-center justify-center w-full mt-10'>
        <div className='flex flex-col md:flex-row flex-wrap gap-10 justify-center'>
          {CloudServices.map((service) => (
            <div className='bg-secondary p-4 rounded-xl flex flex-col gap-4 w-full md:w-[30%]'>
              <service.icon size={50} className=' text-primary' />
              <h1 className='text-text_color font-bold text-lg'>{service.title}</h1>
              <p className='text-gray-500 text-center'>{service.description}</p>
              </div>
          ))}          
        </div>
        </div>

        <p className="text-white rounded-xl mt-14 text-lg border py-2 px-4 bg-primary"><Link href="/contact" className="font-semibold cursor-pointer">Book your free consultation Here Now!!</Link></p>
      </div>
    </section>
  )
}

export default page