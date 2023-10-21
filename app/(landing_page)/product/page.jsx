'use client'
import ContainerXl from '@/app/layouts/ContainerXl'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function page() {


  const product = [
    {
      image: "/images/stock/keete.png",
      heading: "One Finance",
      content: "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
      links: [{ name: "Try Demo", href: "/" }]

    },
    {
      image: "/images/stock/keete2.png",
      heading: "Console",
      content: "The central dashboard for your One Finance account. Gain insights into your trades and investments with in-depth reports and visualisations.",
      links: [{ name: "Try Demo", href: "/" }]

    },

    {
      image: "/images/stock/keete3.png",
      heading: "Coin",
      content: "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
      links: [{ name: "Try Demo", href: "/" }]

    },
    {
      image: "/images/stock/keete4.png",
      heading: "One Api",
      content: "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
      links: [{ name: "Try Demo", href: "/" }]

    },
    {
      image: "/images/stock/keete5.png",
      heading: "One Finance Mobile",
      content: "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
      links: [{ name: "Try Demo", href: "/" }]

    },
  ]

  return (
    <div className='min-h-screen'>
      <ContainerXl className='mt-4 p-2'>

        <div className='mb-8'>
          <h1 className=' mb-2 text-center text-4xl font-bold text-gray-600'>Technology</h1>
          <h1 className=' mb-2 text-center text-md'>Sleek, modern, and intuitive trading platforms</h1>
          <h1 className=' mb-2 text-center text-md'>Check out our investment offerings →</h1>
        </div>

        {product.map((product, index) => {
          return <div key={index} className='mb-8 p-2 md:flex '>

            <div className={` md:w-[50%] w-full p-3  flex ${(index % 2 == 1) ? "order-2 md:ms-2" : ""} `}>
              <div className="box min-h-[280px] mx-auto w-[400px]">
                <Image alt='image' height={1000} width={1000} className='w-full h-full' src={product.image} />
              </div>
            </div>

            <div className={` md:w-[50%] w-full p-3 flex md:ms-2 ${(index % 2 == 1) ? "" : ""}`}>

              <div className='m-auto'>
                <h1 className='text-2xl font-medium mb-2'>{product.heading}</h1>
                <p className='max-w-[400px] mb-3 text-gray-500'>{product.content}</p>
                <div className='flex w-[300px] justify-between '>
                  {product.links.map((link, index) => {
                    return <Link key={index} href={link.href} className='text-blue-500'>{link.name} →</Link>
                  })}

                </div>
              </div>

            </div>

            <div className="flex mt-5">

            </div>

          </div>
        })}


      

      </ContainerXl >
    </div >
  )
}

export default page