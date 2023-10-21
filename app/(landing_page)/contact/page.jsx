import ContainerXl from '@/app/layouts/ContainerXl'
import React from 'react'
import Image from 'next/image'
import Phone from '@/public/icons/contact/phone-simple.svg'
import Mail from '@/public/icons/contact/mail.svg'
import Clock from '@/public/icons/contact/clock.svg'
import Location from '@/public/icons/contact/location.svg'
import company from '@/app/state'

function page() {
  return (
    <>
      <div className='bg-gray-100'>
        <ContainerXl>
          <div className='grid md:grid-cols-2 px-3'>
            <div className='lg:h-[600px] flex'>
              <h1 className='md:my-auto my-8 mx-auto md:ms-auto xl:text-7xl md:text-left  text-center text-5xl  font-bold'>
                We’re here!
                <br />
                Let’s have a talk
              </h1>

            </div>
            <div className='h-[600px] md:flex hidden'>

              <div className='w-fit lg:h-[550px] h-[400px]  mx-auto mt-auto'>
                <Image src='/images/avatar/calling.png' height={400} width={400} alt='calling' className='h-full w-full' />
              </div>

            </div>

          </div>
        </ContainerXl>
        <ContainerXl className='px-3 pb-3'>
          <div className='mb-5 rounded-lg overflow-hidden lg:flex bg-white'>
            <div className=' text-white rounded-lg p-10 w-full lg:w-[500px] bg-black shrink-0'>
              <h1 className='text-2xl font-bold mb-10'>Contact information</h1>

              <div className='flex mb-14'>
                <div className='flex items-center shrink-0 w-[130px] '>
                  <div className="me-2 icon h-[36px] w-[36px]">
                    <Phone className='w-full h-full' />
                  </div>
                  <h1 className='font-bold text-xl'>Phone</h1>

                </div>
                <div className="items-center flex ">
                  <p className='text-gray-200 text-sm'>{company.contact}</p>
                </div>
              </div>

              <div className='flex mb-14'>
                <div className='flex items-center shrink-0 w-[130px]'>
                  <div className="me-2 icon h-[36px] w-[36px]">
                    <Clock className='w-full h-full' />
                  </div>
                  <h1 className='font-bold text-xl'>Open</h1>

                </div>
                <div className=" items-center ">
                  <p className='text-gray-200 text-sm '>Monday to Friday : 9:00 AM to 6:00 PM</p>
                  <p className='text-gray-200 text-sm '>Saturday         : 10:00 AM to 4:00 PM
                  </p>
                </div>
              </div>

              <div className='flex mb-14'>
                <div className='flex items-center shrink-0 w-[130px]'>
                  <div className="me-2 icon h-[36px] w-[36px]">
                    <Mail className='w-full h-full' />
                  </div>
                  <h1 className='font-bold text-xl'>Email</h1>

                </div>
                <div className=" items-center flex">
                  <p className='text-gray-200 text-sm'>{company.email}</p>
                </div>
              </div>

              <div className='flex '>
                <div className='flex items-center shrink-0 w-[130px]'>
                  <div className="me-2 icon h-[36px] w-[36px]">
                    <Location className='w-full h-full' />
                  </div>
                  <h1 className='font-bold text-xl'>Office</h1>

                </div>
                <div className=" items-center flex">
                  <p className='text-gray-200 text-sm'>{company.address}</p>
                </div>
              </div>

            </div>

            <div className='p-10 w-full flex flex-col'>
              <h1 className='text-2xl font-bold mb-10'>Write to Us</h1>
              <div className='grid grid-cols-2 gap-8 w-full'>

                <div className='flex flex-col'>
                  <label className='font-bold mb-2 text-xl' >First Name</label>
                  <input type="text" className=' border-b border-black p-3 focus:outline-0 ' />
                </div>

                <div className='flex flex-col'>
                  <label className='font-bold mb-2 text-xl' >Last Name</label>
                  <input type="text" className=' border-b border-black p-3 focus:outline-0 ' />
                </div>

                <div className='flex flex-col'>
                  <label className='font-bold mb-2 text-xl' >Email</label>
                  <input type="text" className=' border-b border-black p-3 focus:outline-0 ' />
                </div>

                <div className='flex flex-col'>
                  <label className='font-bold mb-2 text-xl' >Mobile</label>
                  <input type="text" className=' border-b border-black p-3 focus:outline-0 ' />
                </div>

                <div className='flex flex-col col-span-2'>
                  <label className='font-bold mb-2 text-xl' >Your Question</label>
                  <p className='text-gray-400'>Enter text here</p>
                  <textarea name="" id="" cols="30" className=' border-b border-black p-3 focus:outline-0 ' rows="3"></textarea>
                </div>

              </div>

              <button className='mt-3 ms-auto bg-black p-3 px-7 rounded-md text-white'>Send</button>

            </div>
          </div>
        </ContainerXl>
      </div>

      <div className='mt-4 bg-white mt-16'>

        <ContainerXl className='p-2'>

          <div className='p-6 py-14 rounded bg-gray-100 grid lg:grid-cols-3 gap-4'>

            <div className='flex'>
              <h1 className='m-auto text-2xl font-bold'>Support Related Queries</h1>
            </div>

            <div className="flex items-center justify-center	">
              <div className="flex items-center">
                <div className="me-3 icon h-[40px] w-[40px]">
                  <Phone className="h-full w-full text-gray-700" />
                </div>
                <p className='text-gray-600'>{company.contact}</p>

              </div>
            </div>

            <div className="flex items-center justify-center	">
              <div className="flex items-center">
                <div className="me-3 icon h-[40px] w-[40px]">
                  <Mail className="h-full w-full text-gray-700" />
                </div>
                <p className='text-gray-600'>{company.email}</p>

              </div>
            </div>

          </div>

        </ContainerXl>



        <ContainerXl className="mt-16 grid lg:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-4 p-2">


          <div className='bg-gray-100 rounded-lg'>
          <div className=' p-6'>
            <div className="icon h-[50px] w-[50px]   ">
              <Location className='h-full w-full ' />
            </div>
            <h1 className='font-medium text-2xl mt-3'>Corporate Office</h1>
            <p className='mt-3 w-[280px]'>
              4-1-1240/2, Bogulkunta, Abids
              Hyderabad, Telangana 500001
            </p>
          </div>
          </div>

          <div className='bg-gray-100 rounded-lg'>
            <div className=' p-6'>
              <div className="icon h-[50px] w-[50px]">
                <Clock className='h-full w-full' />
              </div>
              <h1 className='font-medium text-2xl mt-3'>Business Hours</h1>
              <p className='mt-3 '>
                Mon - Fri : 9.00 AM to 6.00 PM
                <br />
                Saturday  : 10.00 AM to 4.00 PM

              </p>
            </div>
          </div>

          <div className='bg-gray-100 rounded-lg'>

            <div className=' p-6'>
              <div className="icon h-[50px] w-[50px]">
                <Phone className='h-full w-full' />
              </div>
              <h1 className='font-medium text-2xl mt-3'>Cyber Security</h1>
              <p className='mt-3'>
                {company.contact}
                <br />
                {company.email}
              </p>
            </div>


          </div>

        </ContainerXl>



        <div>
          <div className='w-full h-[480px] mt-20' >
            <div id="canvas-for-googlemap"><iframe
              className="w-full h-[480px]" frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=4-1-1240/2,+Bogulkunta,+Abids+Hyderabad,+Telangana+500001&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page