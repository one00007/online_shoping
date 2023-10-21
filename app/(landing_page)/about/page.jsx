import ContainerXl from '@/app/layouts/ContainerXl'
import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div className='min-h-screen'>
      <ContainerXl className='mt-4 p-2'>

        <div className='grid gap-4 md:grid-cols-2 flex'>

          <div className="my-auto">
            <p className='uppercase text-sm font-bold mb-9'>Trading Journey</p>
            <h1 className='text-4xl font-bold max-w-[400px] mb-4'>Achieve more with better workflows</h1>

            <p className='mb-3'>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>

            <p className='mb-3'>Magna dolor luctus at egestas sapien
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis ultrice auctor congue varius magnis
              Volute turpis dolores and sagittis congue</p>
          </div>
          <div className="">

            <div className='max-w-[600px] max-h-[600px]  flex'>

              <Image alt='service' height={500} width={500} src='/images/stock/img06.png' className='m-auto' />

            </div>
          </div>

        </div>



        <div className=' flex flex-col my-7'>

          <h1 className='text-5xl font-bold mx-auto max-w-[700px] text-center mb-8'>We make your trading gain more profit at a glance</h1>

          <div className='mt-3 grid gap-6 md:grid-cols-2'>

            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/Untitled.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Market Research</h1>
                <p className='text-gray-600 mt-3'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociisser auctor and tempus feugiat impedit felis cursus correction augue mauris blandit ipsum</p>
              </div>

            </div>
            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/tradingmastary.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Trading Mastery</h1>
                <p className='text-gray-600 mt-3'>Our expert services empower investors with market insights and strategies, ensuring success in every trade. Join us today and excel in stock trading.</p>
              </div>

            </div>
            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/solution.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Comprehensive Stock Trading Solutions</h1>
                <p className='text-gray-600 mt-3'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociisser auctor and tempus feugiat impedit felis cursus correction augue mauris blandit ipsum</p>
              </div>

            </div>
            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/portfolio.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Your Gateway to Profitable Investments</h1>
                <p className='text-gray-600 mt-3'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociisser auctor and tempus feugiat impedit felis cursus correction augue mauris blandit ipsum</p>
              </div>

            </div>
            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/contact.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>Investor&rsquo;s Delight</h1>
                <p className='text-gray-600 mt-3'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociisser auctor and tempus feugiat impedit felis cursus correction augue mauris blandit ipsum</p>
              </div>

            </div>
            <div className="flex">
              <div className='me-3 icon-box w-[70px] h-[70px] shrink-0'>
                <Image alt='image' src='/images/stock/about/tradingsolution.png' height={200} width={200} />
              </div>
              <div>
                <h1 className='text-2xl font-bold'>TradeWise Services</h1>
                <p className='text-gray-600 mt-3'>Porta semper lacus cursus feugiat primis ultrice ligula risus ociisser auctor and tempus feugiat impedit felis cursus correction augue mauris blandit ipsum</p>
              </div>

            </div>

          </div>

        </div>

        <div className='my-7'>
          <marquee className="bg-gray-950 p-3 text-white capitalize rounded-md">fastest working platform in india ( Authorised by NSE )</marquee>
        </div>


      </ContainerXl>
    </div>
  )
}

export default page