'use client'
import ContainerXl from '@/app/layouts/ContainerXl'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function page() {

  const pricing = [
    {
      pricing: "0",
      name: "Lowest Brokerage",
      p: "Intraday, F&O, Currencies & Commodities"
    },
    {
      pricing: "100",
      name: "Highest Brokerage",
      p: "Intraday, F&O, Currencies & Commodities"
    },
    {
      pricing: "0",
      name: "For Account Maintenance",
      p: "For First Year"
    },
  ]

  const plan = [
    {
      name: "Basic Plan",
      image: "/images/stock/1.jpg",
      details: [{
        name: "",
        point: [
          "Investment : Minimum 25000",
          "Limits in Cash : 10-15 times",
          "Future : 7-10 times",
          "Option : 1 times",
        ]
      },
      {
        name: "Brokerage",
        point: [
          " Cash & future : 100 Rs/1 lakh (include tax)",
          " Option : 100 Rs/lot (include tax)",
        ]
      }]

    },
    {
      name: "PREMIUM PLAN",
      image: "/images/stock/2.jpg",
      details: [{
        name: "",
        point: [
          "Investment : Minimum 125000",
          "Limits in Cash : 15-25 times",
          "Future : 10-15 times",
          "Option : 2-3 times",
        ]
      },
      {
        name: "Brokerage",
        point: [
          " Free for 40 days",

        ]
      }]

    },
    {
      name: "MCX PLAN",
      image: "/images/stock/3.jpg",
      details: [{
        point: [
          "Investment : Minimum 70000",
          "Limits in Cash : 3x",
          "Gold : 125 k/log",
          "Silver : 95 k/log",
          "Base Metals : 70 k/log",
          "Energy : 15-35 k/log",
        ]
      },
      {
        name: "Brokerage",
        point: [
          " Gold & Silver : 1000 Rs/1 lakh (include tax)",
          " Base Metals: 500 Rs/lot",
          " Energy: 250 Rs/lot",
        ]
      }]

    },
    {
      name: "COMBO PLAN",
      image: "/images/stock/basket10.png",
      details: [{
        point: [
          "Investment : Minimum 251000",
          "Limits in Cash : 20-35 times",
          "Future : 10-25 times",
          "Option : 3-5 times",
          "Commodity : 7x",
        ]
      },
      {
        name: "Brokerage",
        point: [
          "Free for 65 days",
        ]
      }]

    },
  ]

  return (
    <div className='min-h-screen'>
      <h1 className='text-4xl font-bold  mt-7 text-center text-[#2c1f63] '>PRICING</h1>
      <p className='mt-4 text-gray-600 text-md text-center'>Free equity investments and flat ₹0 intraday and F&O trades</p>

      <ContainerXl>


        <div className='grid grid-cols-3  my-10 gap-4'>


          {pricing.map((pric, index) => {
            return <div key={index} className='p-2 py-4 '>
              <h1 className='text-center text-6xl font-bold'>{pric.pricing}</h1>
              <h2 className='text-center text-lg font-medium'>{pric.name}</h2>
              <p className='text-center text-gray-600'>{pric.p}</p>
            </div>
          })}



        </div>

        <h1 className='text-4xl font-bold  mt-7 text-center text-[#2c1f63]'>PLAN</h1>


        <div className="mt-5 grid gap-4 lg:grid-cols-4 md:grid-cols-2 p-2">


          {plan.map((plan, index) => {


            return <div key={index} className='border p-4 min-h-[550px] rounded-lg flex flex-col hover:shadow-xl transition cursor-pointer'>
              <div className='h-[200px] rounded-md border mb-3 overflow-hidden'>
                <Image alt='alt' height={400} width={600} className='object-cover h-full w-full' src={plan.image} />
              </div>
              <p className='text-md text-gray-600 text-center font-bold '>{plan.name}</p>

              {plan.details.map((details, index) => {

                return <ul key={index}>
                  <li className='font-bold my-3'>{details.name}</li>
                  {details.point.map((point, index) => {
                    return <li key={index} >{point}</li>
                  })}
                </ul>
              })}

              <Link href="/register" className='hover:bg-[#2c1f63]/90 mx-auto p-2 bg-[#2c1f63] rounded-md px-4 text-white mt-auto'>Get Started</Link>
            </div>
          })}



        </div>

        <div className='mt-8 text-center flex flex-col'>
          <h1 className='text-gray-800 font-bold  text-2xl'>Open One Finance Account</h1>
          <p className='mt-4 text-gray-500 text-center'>Modern platforms and apps and flat ₹0 intraday and F&O trades.</p>
          <Link href="/register" className='hover:bg-[#2c1f63]/90 mx-auto p-2 bg-[#2c1f63] rounded-md px-4 py-3 text-white my-5' >Sign Up Now</Link>
        </div>

        <div className='my-7'>
          <marquee className="bg-gray-950 p-3 text-white capitalize rounded-md flex">

            SPECIAL NOTE :
            <li className='inline-flex ms-8'>
              1. Withdrawal available only on Saturday within 4-8 hrs.
            </li>
            <li className='inline-flex ms-8'>
              2. 10 trading session must be compulsory for any withdrawal
            </li>
          </marquee>
        </div>

      </ContainerXl>
    </div>
  )
}

export default page