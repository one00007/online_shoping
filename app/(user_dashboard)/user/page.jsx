'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import axios from 'axios'
import Link from 'next/link'
import { UserContext } from './layout'
import Image from 'next/image'
import Speedo from '@/public/icons/choise/speedometer.svg'
import Insurance from '@/public/icons/choise/insurance.svg'
import Ipo from '@/public/icons/choise/ipo.svg'
import Mf from '@/public/icons/choise/mf.svg'
import Secureproduct from '@/public/icons/choise/secureproduct.svg'
import Eventcalculator from '@/public/icons/tools/eventcalculator.svg'
import Margincalculator from '@/public/icons/tools/margincalculator.svg'
import Brokerage from '@/public/icons/tools/brokeragecalculator.svg'


function Page() {


  const { user, balance, result } = useContext(UserContext)

  const indianRupees = Intl.NumberFormat('en-IN');

  const SipDetails = [
    {
      headline: "Aggressive",
      content: "Min Amount 3,300",
      info: "146% Abs. Return in 3yrs",
      image: "/images/stock/money.jpg",
      fund: "SIP",
    },
    {
      headline: "Wealth Creator",
      content: "Min Amount 3,000",
      info: "131% Abs. Returns in 3yrs",
      image: "/images/stock/walth.jpg",
      fund: "SIP",
    },
    {
      headline: "Aggressive Returns",
      content: "Min Amount 15,000",
      info: "146% Abs. Returns in 3yrs",
      image: "/images/stock/1.jpg",
      fund: "Lumpsum",
    },
    {
      headline: "Wealth Builder",
      content: "Min Amount 15,000",
      info: "123% Abs. Returns in 3yrs",
      image: "/images/stock/01.png",
      fund: "Lumpsum",
    },
    {
      headline: "The Tax Saviour",
      content: "Min Amount 15,000",
      info: "103% Abs. Return in 3yrs",
      image: "/images/stock/basket1.png",
      fund: "Lumpsum",
    },
    {
      headline: "Moderate",
      content: "Min Amount 15,000",
      info: "103% Abs. Returns in 3yrs",
      image: "/images/stock/basket2.png",
      fund: "Lumpsum",
    },
    {
      headline: "Consumption Story",
      content: "Min Amount 20,000",
      info: "112% Abs. Returns in 3yrs",
      image: "/images/stock/basket3.png",
      fund: "Lumpsum",
    },
    {
      headline: "Go With Index",
      content: "Min Amount 10,000",
      info: "77% Abs. Returns in 3yrs",
      image: "/images/stock/basket4.png",
      fund: "Lumpsum",
    },
    {
      headline: "Conservative",
      content: "Min Amount 15,000",
      info: "83% Abs. Returns in 3yrs",
      image: "/images/stock/basket5.png",
      fund: "Lumpsum",
    },
    {
      headline: "Svatantra",
      content: "Min Amount 15,000",
      info: "16% Abs. Returns in 3yrs",
      image: "/images/stock/basket6.png",
      fund: "Lumpsum",
    },

  ]

  return (
    <Container className="p-2 ">

      <h1 className='text-3xl font-medium mb-3 capitalize '>Hi {user?.firstName}</h1>
      <p className='text-gray-400 text-md' >Track progress here. You almost reach a goal!  </p>

      <div className='grid mt-4 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:grid-rows-[250px_430px]'>

        <div className='p-2 py-5 bg-[#2e1d67] rounded-lg'>
          <div>
            <div className="user-profile-image mx-auto  h-[80px] w-[80px] border bg-gray-50 border-white border-4 rounded-full relative ">
              <ProfileImage />
              <div className={`absolute h-[23px] w-[23px] rounded-full border border-4 border-white ${user?.status ? "bg-green-500" : "bg-red-500"} right-0 bottom-0`}>
              </div>
            </div>
          </div>
          <div className='my-5'>
            <h1 className='text-sm text-center font-medium text-white'>{user?.name}</h1>
            <p className='text-gray-400 text-xs text-center'>{user?.email}</p>
            <p className='text-gray-400 text-xs text-center'>{user?.username}</p>
          </div>
          <div className='flex justify-center'>
            <Link href={`/admin/clients/${user?._id}`} className='text-xs px-5 rounded-full bg-[#fff] border border-2 border-white text-[#2d1e65] py-1.5 ms-2 font-bold hover:bg-gray-50' >Activity</Link>
          </div>
        </div>

        <div className='grid gap-2 grid-cols-2 grid-rows-[80px_auto]'>

          <div className='rounded-lg border p-3 bg-white'>
            <h1 className='text-gray-500 text-sm mb-1'>Available Balance</h1>
            <h1 className='text-gray-950 text-lg font-bold'>&#8377; {indianRupees.format(balance)}</h1>
          </div>
          <div className={(result?.profit > result.loss) ? "rounded-lg p-3 bg-white border " : "border rounded-lg p-3 bg-white"}>

            {(result?.profit > result.loss) ?
              <>
                <h1 className='text-gray-500 text-sm mb-1'>Total Profit & Loss</h1>
                <h1 className='text-gray-950 text-lg text-gray-600 font-bold text-green-600'>&#8377; {indianRupees.format(result?.profit - result?.loss)}</h1>
              </>
              :
              <>
                <h1 className='text-gray-500 text-sm mb-1'>Total Profit & Loss</h1>
                <h1 className='text-gray-950 text-red-600 text-lg font-bold '>&#8377; {indianRupees.format(result?.profit - result?.loss)}</h1>
              </>
            }
          </div>



          <div className='rounded-lg  p-3 px-5  bg-[#1b1464] text-white flex col-span-2 '>
            <h1 className='text-xl'>Start your algorithmic
              trading with <span className='text-[#f7ec2f]'>Stratezy</span> <br /><Link href='/' className='text-xs bg-[#f7ec2f] text-[#1b1464] p-1 rounded px-4'>Explore</Link> </h1>

            <div className='shrink-0 w-[170px]  ms-auto mt-auto'>
              <Image alt='target' height={600} width={600} src='/images/stock/target2.png' />
            </div>
          </div>

        </div>

        <div className='rounded-lg col-span-1 md:col-span-2 xl:col-span-1 row-span-3 overflow-y-scroll bg-white p-1'>
          <div className='p-3 py-2 sticky top-0'>
            <h1 className='font-bold '>MF Basket</h1>
          </div>

          {SipDetails.map((details, index) => {


            return <div key={index} className=' mb-2 mt-1 border rounded-md p-2 grid gap-2 grid-rows-[75px] grid-cols-[118px_auto]'>

              <div className='rounded-md overflow-hidden'>
                <Image alt='profile-image' src={details.image} className='h-full w-full object-cover' height={500} width={500} />
              </div>

              <div className="relative">
                <span className='px-4 rounded-full p-1 bg-gray-100 text-xs font-bold absolute right-1 top-1 text-gray-800'>{details.fund}</span>
                <h1 className='font-bold text-md mb-2' >{details.headline}</h1>
                <p className='text-gray-600 text-sm mb-2'>{details.content}</p>
                <p className='text-xs '>{details.info}</p>

              </div>

            </div>
          })}

        </div>
        <div className='col-span-1 md:col-span-2 rounded-lg flex flex-col'>
          <div className='p-6 h-full'>


            <div className='border h-full w-full rounded-xl p-6 bg-white'>
              <div className='flex'>
                <div className='border flex bg-blue-200 text-blue-600 h-[55px] rounded-xl me-3 w-[55px] border'>
                  <Speedo className='m-auto' />
                </div>
                <div>
                  <h1 className='font-bold'>Smart Beta Basket</h1>
                  <p>ETF</p>
                </div>
              </div>
              <p className='mt-3 max-w-[400px] text-gray-500'>This basket provides exposure to smart beta factors such as value and low volatility via...</p>

              <div className='mt-3 flex justify-between'>
                <div>
                  <p className='text-gray-400'>Min Amount</p>
                  <h2 className='mt-3 font-bold'>$954.83</h2>
                </div>
                <div>
                  <p className='text-gray-400'>CAGR (5 yr)</p>
                  <h2 className='mt-3 font-bold text-green-600'>4.43%</h2>

                </div>



              </div>
              <div className='pt-4 border-t'>
                4023 users invested in this basket.
              </div>
            </div>

          </div>
        </div>
        <div className='col-span-1 md:col-span-2 rounded-lg flex flex-col p-4 bg-white'>
          <h1 className='font-bold text-xl mb-3 uppercase'>Diversify</h1>
          <div className='grid gap-2 md:grid-cols-7 grid-rows-2 h-full'>




            <div className='rounded-lg  p-3 px-5  bg-[#bee9d5] flex md:col-span-3'>
              <h1 className='text-2xl'> <span className='font-bold'>ETF</span>, A long terms  <br />investment strategy  <br />to build wealth <br /> overtime </h1>
              <div className='shrink-0 w-[90px]  ms-auto mt-auto'>
                <Image alt='target' height={400} width={400} src='/images/stock/05.png' />
              </div>
            </div>

            <div className='rounded-lg  p-3 px-5  bg-[#beb8fe] flex md:col-span-4'>
              <h1 className='text-2xl'> Best curated <br /> <span className='font-bold'>thematic basket</span> <br /> for you </h1>
              <div className='shrink-0 w-[90px]  ms-auto mt-auto'>
                <Image alt='target' height={400} width={400} src='/images/stock/02.png' />
              </div>
            </div>

            <div className='rounded-lg  p-3 px-5  bg-[#ffd248] flex md:col-span-4'>
              <h1 className='text-2xl'>Invest in your <br />
                <span className='font-bold'>dreams</span> and achieve <br />
                your <span className='font-bold'>Financial</span> <br />
                <span className='font-bold'>Goals</span></h1>
              <div className='shrink-0 w-[90px]  ms-auto mt-auto'>
                <Image alt='target' height={400} width={400} src='/images/stock/target.png' />
              </div>
            </div>

            <div className='rounded-lg  p-3 px-5  bg-[#8ebaf9] flex md:col-span-3'>
              <h1 className='text-2xl'>Fundamental <br /> calls by our <br /> finacial <br /> expert</h1>
              <div className='shrink-0 w-[90px]  ms-auto mt-auto'>
                <Image alt='target' height={400} width={400} src='/images/stock/03.png' />
              </div>
            </div>





          </div>
        </div>

        <div className='col-span-1 md:col-span-3 rounded-lg flex flex-col bg-white p-4'>
          <h1 className='font-bold mb-3 uppercase text-xl'>Smart Investments</h1>

          <div className='mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3'>

            <div className='p-2 h-[130px] flex flex-col'>
              <span className='h-fit w-fit flex m-auto bg-[#f4f3f8] rounded-xl p-5'>
                <Mf className='m-auto' />
              </span>
              <h1 className='text-center'>Mutual Funds</h1>
            </div>
            <div className='p-2 h-[130px] flex flex-col'>
              <span className='h-fit w-fit flex m-auto bg-[#f4f3f8] rounded-xl p-5'>
                <Insurance className='m-auto' />
              </span>
              <h1 className='text-center'>Insurance</h1>
            </div>
            <div className='p-2 h-[130px] flex flex-col'>
              <span className='h-fit w-fit flex m-auto bg-[#f4f3f8] rounded-xl p-5'>
                <Ipo className='m-auto' />
              </span>
              <h1 className='text-center'>Invest in IPO</h1>
            </div>
            <div className='p-2 h-[130px] flex flex-col'>
              <span className='h-fit w-fit flex m-auto bg-[#f4f3f8] rounded-xl p-5'>
                <Secureproduct className='m-auto' />
              </span>
              <h1 className='text-center'>Secured Products</h1>
            </div>

          </div>

        </div>




      </div>


      <div className=" mt-3 col-span-1 md:col-span-2 p-4 border border-[#a9e5cd] rounded-lg grid md:grid-cols-3 grid-cols-2 flex align-items-center justify-center col-span-2 bg-[#f2fbf7]">

        <div className='flex'>
          <div className='m-auto '>

            <div className="h-[80px] flex mx-auto w-[80px] rounded-full bg-[#d0edd9] border-4 border-[#005f35]">
              <span className='m-auto font-bold text-xl text-[#005f35]'>88%</span>

            </div>
            <p className='mt-3  text-center font-bold text-[#005f35]'>Success Ratio</p>

          </div>
        </div>

        <div className='flex'>
          <div className='m-auto'>
            <h1 className='font-bold text-2xl'>Our Top Picks</h1>
            <h1 className='text-xs'>Research Calls By Our Experts For All Type Of Traders</h1>
          </div>

        </div>
        <button className='bg-[#004393] m-auto p-3 py-2 text-white rounded-md hover:bg-[#004393]/80 md:col-span-1 col-span-2 md:w-auto w-full mt-4 '>See All Calls</button>
        <div>

        </div>

      </div>

      <div className='p-4 bg-white mt-4 rounded-md'>
        <h1 className='text-xl font-bold'>Tools</h1>
        <div className='mt-3 p-2 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

          <div className="border p-8 border hover:border-blue-600 transition flex cursor-pointer rounded-xl border-gray-300 h-[110px]">

            <div className='my-auto grid grid-cols-2 '>
              <div className="logo h-[50px] w-[50px] flex bg-[#e4e9f8] border me-3 rounded-xl">
                <Brokerage className='m-auto' />
              </div>
              <div>
                <h1 className='font-bold'>Brokerage</h1>
                <h1 className='font-bold'>Calculator</h1>
              </div>
            </div>

          </div>

          <div className="border p-8 border hover:border-blue-600 transition flex cursor-pointer rounded-xl border-gray-300 h-[110px]">

            <div className='my-auto grid grid-cols-2 '>
              <div className="logo h-[50px] w-[50px] flex bg-[#e4e9f8] border me-3 rounded-xl">
                <Eventcalculator className='m-auto' />
              </div>
              <div>
                <h1 className='font-bold'>Event</h1>
                <h1 className='font-bold'>Calendar</h1>
              </div>
            </div>

          </div>

          <div className="border p-8 border hover:border-blue-600 transition flex cursor-pointer rounded-xl border-gray-300 h-[110px]">

            <div className='my-auto grid grid-cols-2 '>
              <div className="logo h-[50px] w-[50px] flex bg-[#e4e9f8] border me-3 rounded-xl">
                <Margincalculator className='m-auto' />
              </div>
              <div>
                <h1 className='font-bold'>Margin</h1>
                <h1 className='font-bold'>Calculator</h1>
              </div>
            </div>

          </div>

        </div>
      </div>

    </Container>
  )
}

export default Page