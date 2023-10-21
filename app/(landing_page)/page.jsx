'use client'
import React from 'react'
import ContainerFull from '../layouts/ContainerFull'
import ContainerLg from '../layouts/ContainerLg'
import Link from 'next/link'
import ContainerXl from '../layouts/ContainerXl'
import Image from 'next/image'
import Trust from '@/public/icons/homepage/sheiled2.svg'
import User from '@/public/icons/homepage/user.svg'
import Download from '@/public/icons/homepage/download.svg'
import Auth from '@/public/icons/homepage/auth.svg'
import Menudot from '@/public/icons/menudot.svg'
import company from '../state'


function page() {


  const stocks = [
    "NSE",
    "BSE",
    "MCX",
    "MSEI",
    "NCDEX",
    "CDSL",
    "NDSL",
    "SEBI",
    "RBI",
    "IRDA",
  ]

  return (
    <>
      {/* <div className='h-[700px]' style={{ background: "url(/images/stock/landing.jpg)", backgroundSize: "cover" }}> */}
      <div className='h-[700px] relative overflow-hidden' >


        <div className='h-full flex w-full bg-black/30 '>
          <div className='m-auto flex flex-col'>
            <h1 className='text-center mx-auto text-4xl font-bold text-white '>Welcome to {company.name}</h1>
            <h1 className='text-center mx-auto text-4xl font-bold text-white'>Start Your Journey With {company.name} </h1>
            <Link href='/login' className='mt-3 bg-green-500 mx-auto p-3 px-5 rounded text-white font-medium hover:bg-green-600 transition mt-7'>Get Started</Link>
          </div>
          <div className="absolute h-full w-full bg-gray-950 -z-10">
            <video className='w-full h-full object-cover' autoPlay="autoplay" loop muted>
              <source src="/uploads/market.mp4" type="video/mp4"></source>
              <source src="/uploads/market.webm" type="video/webm" />
            </video>
          </div>
        </div>

      </div>


      <div className='text-center  mt-4 bg-white p-5'>
        <ContainerXl className='my-20'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

            <div className=''>
              <div className='h-full w-fit md:w-[480px] mx-auto bg-white'>
                <Image alt='' src='/images/mobile.jpeg' className='h-full w-full object-cover' height={400} width={400} />
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='w-[400px] my-auto lg:me-auto mx-auto'>

                <h1 className='font-bold text-4xl mb-3 lg:text-left text-center' >What is a Demat Account?</h1>
                <p className='leading-6 text-lg lg:text-left text-center'>Demat Account facilitates the holding of shares and
                  securities in electronic format. A Demat Account
                  holds all the investments of an individual whether
                  shares, ETFs, mutual funds, etc in one place. Initially,
                  opening a Demat Account was a time-consuming
                  process, but with Angel One, it is easy and hassle-free.
                  Open a free Demat Account with Angel One today and
                  enjoy a wide range of benefits.</p>
              </div>
            </div>

          </div>
        </ContainerXl>

        <ContainerXl className="p-10">

          <div className="mt-3 font-bold text-4xl md:text-6xl ">One Platform for Seamless User Experience</div>

          <div className='mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[260px] h-[260px] '>
                <Image alt='images' src='/icons/homepage/1.jpeg' className='h-full w-full' height={200} width={200} />
              </div>

              <h1 className='text-center  font-bold text-2xl mt-4'>Quick Account</h1>
              <h1 className='text-center  font-bold text-2xl '>Opening Process</h1>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[260px] h-[260px] '>
                <Image alt='images' src='/icons/homepage/2.jpeg' className='h-full w-full' height={200} width={200} />
              </div>

              <h1 className='text-center  font-bold text-2xl mt-4'>Robust & Secure</h1>
              <h1 className='text-center  font-bold text-2xl '>Platforms</h1>

            </div>
            {/* grid items */}
            {/* grid items */}

            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[260px] h-[260px] '>
                <Image alt='images' src='/icons/homepage/4.jpeg' className='h-full w-full' height={200} width={200} />
              </div>

              <h1 className='text-center  font-bold text-2xl mt-4'>Year of</h1>
              <h1 className='text-center  font-bold text-2xl '>Trust</h1>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[260px] h-[260px] '>
                <Image alt='images' src='/icons/homepage/5.jpeg' className='h-full w-full' height={200} width={200} />
              </div>

              <h1 className='text-center  font-bold text-2xl mt-4'>Seamless Digital</h1>
              <h1 className='text-center  font-bold text-2xl '>Platform</h1>

            </div>
            {/* grid items */}

          </div>
        </ContainerXl>


        <ContainerXl className='my-10'>
          {/* <div className=" font-bold text-2xl md:text-4xl text-center my-6 ">Why Join Us</div> */}
          <div className=" font-bold text-4xl md:text-6xl text-center my-6 ">What makes {company.name} Distinct & Why join us</div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

            <div className=''>
              <div className='h-full w-[480px] mx-auto bg-white'>
                <Image alt='' src='/images/one.jpeg' className='h-full w-full object-cover' height={400} width={400} />
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='mx-auto lg:me-auto max-w-[430px] flex mb-8'>
                <div className='w-[40px] shrink-0 h-[40px] bg-[#3f5bd9] rounded-full me-4 flex'>
                  <Menudot className='h-6 w-6 text-white m-auto' />
                </div>
                <div>
                  <h1 className='font-bold text-lg mb-3 text-start'>Customer Excellence</h1>
                  <p className='text-slate-500 text-start'>The new-age technologies summed up with our
                    commitment and dedication has made us a trusted
                    partner to our clients</p>
                </div>
              </div>
              <div className='mx-auto lg:me-auto max-w-[430px] flex mb-8'>
                <div className='w-[40px] shrink-0 h-[40px] bg-[#3f5bd9] rounded-full me-4 flex'>
                  <Menudot className='h-6 w-6 text-white m-auto' />
                </div>
                <div>
                  <h1 className='font-bold text-lg mb-3 text-start'>Transparency</h1>
                  <p className='text-slate-500 text-start'>We believe in transparency at every step of your
                    investment process.</p>
                </div>
              </div>
              <div className='mx-auto lg:me-auto max-w-[430px] flex mb-8'>
                <div className='w-[40px] shrink-0 h-[40px] bg-[#3f5bd9] rounded-full me-4 flex'>
                  <Menudot className='h-6 w-6 text-white m-auto' />
                </div>
                <div>
                  <h1 className='font-bold text-lg mb-3 text-start lg:text-start'>Quick Account Opening</h1>
                  <p className='text-slate-500 text-start lg:text-start'>Fastest working platform (Authorised By NSE), Linked Account open within 2 to 5 working hours</p>
                </div>
              </div>
              <div className='mx-auto lg:me-auto max-w-[430px] flex mb-8'>
                <div className='w-[40px] shrink-0 h-[40px] bg-[#3f5bd9] rounded-full me-4 flex'>
                  <Menudot className='h-6 w-6 text-white m-auto' />
                </div>
                <div>
                  <h1 className='font-bold text-lg mb-3 text-start'>Documents Required</h1>
                  <p className='text-slate-500 text-start'>Aadhar card, Pan card, Cancel cheque/ Account Passbook/ 3 months Acc. statment</p>
                </div>
              </div>
            </div>

          </div>
        </ContainerXl>

      </div>

      <div className='text  mt-4 bg-white p-5'>

        <ContainerXl className="p-10">

          <h1 className="mt-3 font-bold text-4xl md:text-6xl text-center ">Happy Customers</h1>

          <div className='mt-10 grid gap-3 lg:grid-cols-2 md:grid-cols-1 grid-cols-1'>
            {/* grid items */}
            <div>
              <h1 className='text-left mb-2 font-bold text-xl'>Mr. Sandeep Kaithwas Mumbai</h1>
              <div className='flex md:flex-row flex-col bg-[#eaebff] rounded-lg p-5'>
                <div className='shrink-0 me-4 rounded-lg bg-gray-50 w-[150px] h-[150px] overflow-hidden'>
                  <Image alt='images' src="/images/clients/cus1.jpg" className='h-full w-full object-cover' height={500} width={500} />
                </div>
                <p className='md:mt-0 mt-3' >

                  It has been a great experience to be
                  associated with such brokers who value
                  their clients money and provide expert
                  and first-hand advice to their clientele.
                  Undoubtedly one of the best Capital
                  Market Advisory services

                </p>
              </div>


            </div>
            {/* grid items */}
            {/* grid items */}
            <div>
              <h1 className='text-left mb-2 font-bold text-xl'>Ms. Seema Nahar Delhi</h1>
              <div className='flex md:flex-row flex-col  bg-[#eaebff] rounded-lg p-5'>
                <div className='shrink-0 me-4 rounded-lg bg-gray-50 w-[150px] h-[150px] overflow-hidden'>
                  <Image alt='images' src="/images/clients/cus2.jpg" className='h-full w-full object-cover' height={500} width={500} />

                </div>
                <p className='md:mt-0 mt-3' >

                  Angel One is the best. From Demat
                  Account Opening to Online Trading
                  Products. Its the only thing you will need
                  to enter and trade in Indian Share Market

                </p>
              </div>


            </div>
            {/* grid items */}

          </div>
        </ContainerXl>

      </div>


      <div className='text-center text-white bg-[#3f5bd9] py-20 min-h-[600px]'>

        <ContainerXl className=" py-20">

          <h1 className='text-4xl'>Trust</h1>
          <div className="mt-3 font-bold text-2xl md:text-6xl ">LEGACY OF COMMITTED EXCELLENCE</div>
          <p className='text-sm md:text-2xl mt-3 px-3'>Serving 40 Lack happy customer over 25 years. And the list keeps growing</p>

          <div className='mt-10 grid gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[50px]  relative -left-3 h-[50px] mb-5 scale-150 bottom-3'>
                <Trust className='' />
              </div>

              <h1 className='text-center text-4xl font-bold mt-4'>25+</h1>
              <h1 className='text-xl text-center mt-0'>Year of Trust</h1>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[50px]  relative -left-3 h-[50px] mb-5 scale-150 bottom-3'>
                <User className='' />
              </div>

              <h1 className='text-center text-4xl font-bold mt-4'>40 Lac +</h1>
              <h1 className='text-xl text-center mt-0'>Registered Users</h1>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[50px]  relative -left-3 h-[50px] mb-5 scale-150 bottom-3'>
                <Auth className='' />
              </div>

              <h1 className='text-center text-4xl font-bold mt-4'>10 K +</h1>
              <h1 className='text-xl text-center mt-0'>Authorised Person</h1>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col'>

              <div className='mx-auto w-[50px]  relative -left-3 h-[50px] mb-5 scale-150 bottom-3'>
                <Download className='' />
              </div>

              <h1 className='text-center text-4xl font-bold mt-4'>70 Lac +</h1>
              <h1 className='text-xl text-center mt-0'>App Download</h1>

            </div>
            {/* grid items */}
          </div>
        </ContainerXl>

      </div>


      <div className='text-center  mt-4 bg-white p-5'>

        <ContainerXl className="p-20">

          <div className="mt-3 font-bold text-4xl md:text-6xl ">Awards & Recognition</div>

          <div className='mt-10 grid gap-3 lg:grid-cols-4 md:grid-cols-2 grid-cols-1'>
            {/* grid items */}
            <div className='flex flex-col rounded-lg p-5 cursor-pointer'>
              <div className='mx-auto w-[120px] h-[120px]'>
                {/* <Award className='w-full h-full text-[#2b52ff] ' /> */}
                <Image alt='images' src='/icons/award2.png' height={200} width={200} />
              </div>
              <h1 className='text-2xl font-bold mt-5'>Fortune India, 2022</h1>
              <p className="text-lg">
                Rising Star for Outstanding Growth</p>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col rounded-lg p-5'>
              <div className='mx-auto w-[120px] h-[120px] relative -top-2'>
                {/* <Award className='w-full h-full text-[#2b52ff]' /> */}
                <Image alt='images' src='/icons/award5.png' height={200} width={200} />

              </div>
              <h1 className='text-2xl font-bold mt-5'>BSE 2022</h1>
              <p className="text-lg">
                Best Performer in the Equity <br /> Retail Segment</p>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col rounded-lg p-5'>
              <div className='mx-auto w-[120px] h-[120px]'>
                <Image alt='images' src='/icons/award6.png' height={200} width={200} />
                {/* <Award className='w-full h-full text-[#2b52ff]' /> */}
              </div>
              <h1 className='text-2xl font-bold mt-5'>Gold at Indian Digital Awards</h1>
              <p className="text-lg">
                India Digital Awards, IAMAI 2022</p>

            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col rounded-lg p-5 cursor-pointer'>
              <div className='mx-auto w-[120px] h-[120px]'>
                {/* <Award className='w-full h-full text-[#2b52ff] ' /> */}
                <Image alt='images' src='/icons/award8.png' height={200} width={200} />
              </div>
              <h1 className='text-2xl font-bold mt-5'>MCX 2021</h1>
              <p className="text-lg">
                Leading Member of Exchange</p>

            </div>
            {/* grid items */}


          </div>
        </ContainerXl>

      </div>



      <div className='text-center  mt-4 p-5 bg-blue-600'>

        <ContainerXl className="p-10">


          <div className='mt-10 grid gap-6 lg:grid-cols-5 md:grid-cols-3  grid-cols-2'>

            {stocks.map((stock) => {
              return <div key={stock} className='p-6 h-[80px] flex rounded-2xl  bg-[#f7ec2f] cursor-pointer transition hover:shadow-xl hover:-translate-y-4 '>
                <h1 className='md:text-3xl text-xl text-blue-600 font-bold m-auto '>{stock}</h1>
              </div>
            })}



          </div>
        </ContainerXl>

      </div>



      <div className='text-center  mt-4 bg-white p-5'>

        <ContainerXl className="p-10">

          <div className="mt-3 font-bold text-4xl ">Partner Product</div>

          <div className='mt-10 grid gap-3 lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
            {/* grid items */}
            <div className='flex flex-col  rounded-lg p-5'>
              <div className='mx-auto w-[150px] h-[150px] overflow-hidden rounded-lg '>
                <Image alt='' src='/icons/products/1.png' height={500} width={500} />
              </div>

              <h1 className='text-xl font-bold mt-3'>Modern Algos</h1>
            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col  rounded-lg p-5'>
              <div className='mx-auto w-[150px] h-[150px] overflow-hidden rounded-lg '>
                <Image alt='' src='/icons/products/2.png' height={500} width={500} />
              </div>

              <h1 className='text-xl font-bold mt-3'>AlgosBulls</h1>
            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col  rounded-lg p-5 '>
              <div className='mx-auto w-[150px] h-[150px] overflow-hidden rounded-lg'>
                <Image alt='' src='/icons/products/3.jpg' height={500} width={500} />
              </div>

              <h1 className='text-xl font-bold mt-3'>QuantsApp</h1>
            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col  rounded-lg p-5'>
              <div className='mx-auto w-[150px] h-[150px] overflow-hidden rounded-lg'>
                <Image alt='' src='/icons/products/5.png' height={500} width={500} />
              </div>

              <h1 className='text-xl font-bold mt-3'>Stocks Emoji</h1>
            </div>
            {/* grid items */}
            {/* grid items */}
            <div className='flex flex-col  rounded-lg p-5'>
              <div className='mx-auto w-[150px] h-[150px] overflow-hidden rounded-lg'>
                <Image alt='' src='/icons/products/4.jpg' height={500} width={500} />
              </div>

              <h1 className='text-xl font-bold mt-3'>Stockants</h1>
            </div>
            {/* grid items */}

          </div>
        </ContainerXl>

      </div>




    </>
  )
}

export default page