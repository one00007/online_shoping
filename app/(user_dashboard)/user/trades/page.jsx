'use client'
import Container from '@/app/layouts/Container'
import React, { useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../layout'
function Page() {

  // const [user, setUser] = useState()
  const { user, balance, trades, result } = useContext(UserContext)
  const indianRupees = Intl.NumberFormat('en-IN');
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });





  return (
    <Container className="p-2">
      <h1 className='text-lg font-bold uppercase'>Portfolio</h1>

      <div className='grid mt-4 gap-3 grid-cols-1  lg:grid-cols-2 xl:grid-cols-2 md:grid-rows-[250px_400px]'>

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
          </div>
          <div className='flex justify-center'>
            <Link href={`/admin/clients/${user?._id}`} className='text-xs px-5 rounded-full bg-[#fff] border border-2 border-white text-[#2d1e65] py-1.5 ms-2 font-bold hover:bg-gray-50' >Activity</Link>
          </div>
        </div>

        <div className='grid gap-2 grid-cols-2 '>

          <div className='rounded-lg bg-white border p-3 md:p-8 '>
            <h1 className='text-gray-500 text-sm md:text-4xl mb-3 md:mb-9 md:text-center'>Available Balance</h1>
            <h1 className='text-gray-950 text-lg md:text-4xl md:text-center font-bold'>&#8377; {indianRupees.format(balance)}</h1>
          </div>

          <div className={(result?.profit > result.loss) ? "rounded-lg bg-white p-3 border md:p-8" : "border rounded-lg bg-white p-3 md:p-8"}>

            {(result?.profit < result.loss) ?
              <>
                <h1 className='text-gray-500 text-sm md:text-4xl mb-3 md:mb-9 md:text-center'>Total Profit & Loss</h1>
                <h1 className='text-red-600 text-lg lg:text-4xl md:text-center font-bold'>&#8377; {indianRupees.format(result?.profit - result?.loss)}</h1>
              </>
              :
              <>
                <h1 className='text-gray-500 text-sm md:text-4xl mb-3 md:mb-9 md:text-center'>Total Profit & Loss</h1>
                <h1 className='text-green-600 text-lg md:text-4xl md:text-center font-bold'> &#8377; {indianRupees.format(result?.profit - result?.loss)}</h1>
              </>

            }
          </div>



        </div>

        <div className='border bg-gray-50 rounded-lg bg-white lg:col-span-2 xl:col-span-2 row-span-2 overflow-y-scroll'>
          <div className='p-3 py-2 bg-gray-50 border-b sticky top-0'>

            <div className='flex justify-between py-2'>
              <p className='text-xs'> Buy Avg Price</p>
              <p className='text-xs'>Sell Avg Price</p>
              <p className='text-xs'>Todays Gain <br /> & Loss/LTP</p>
            </div>
          </div>



          {trades?.map((trade, index) => {
            const date = new Date(trade.stockDate)
            const tradedate = new Date(trade.today)
            const today = new Date()

            if (today.toLocaleDateString() == tradedate.toLocaleDateString()) {
              return <div key={index} className='bg-white p-2 m-1 rounded shadow'>
                <div>
                  <span className='text-xs p-1 mb-2  bg-gray-800 text-gray-100 rounded-md inline-block'>{trade?.status}</span>
                </div>
                <div className='flex justify-between mb-3'>
                  <h1>
                    <span className='uppercase text-sm font-bold'>{trade.stockName}</span>
                    {/* <span className='text-xs text-gray-800 ms-1'>{trade?.stockDate}</span> */}

                    <span className='ms-1 text-sm font-bold uppercase'>{trade.option}</span>
                    <span className='ms-1 text-sm font-bold uppercase'>{trade.stockType}</span>

                    <span className='text-xs text-gray-800 uppercase ms-1'>{formatter.format(date).split(" ")[1].slice(0, 2)}</span>
                    <span className='text-xs text-gray-800 uppercase ms-1'>{formatter.format(date).split(" ")[0].slice(0, 3)}</span>
                    <span className='text-xs text-gray-800 uppercase ms-1'>{formatter.format(date).split(" ")[2].slice(2, 4)}</span>
                  </h1>


                  {(trade.result == 'profit') ? <h1 className='text-green-600'>&#8377;{trade.profit}</h1> : <h1 className='text-red-600'>- &#8377;{trade.loss}</h1>}
                </div>
                <div className='pb-3 border-b'>
                  <h1 className='text-xs'><span className='font-bold'>{trade.lot}</span> Lot (1 Lot = {trade.lotSize}) | <span className='font-medium p-1 bg-gray-200 rounded-sm'>{trade.type}</span></h1>
                </div>
                <div className='flex justify-between py-2'>
                  <h1 className='text-sm font-bold' >&#8377;{trade.buyPrice}</h1>
                  <h1 className='text-sm font-bold' >&#8377;{trade.sellingPrice}</h1>
                  <h1 className='text-sm font-bold' >&#8377;{trade.ltp}</h1>
                </div>

              </div>
            }

          })}



        </div>


      </div>
    </Container>
  )
}

export default Page