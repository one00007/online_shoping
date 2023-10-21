'use client'
import Analytics from '@/app/components/Analytics'
import ContainerMd from '@/app/layouts/ContainerMd'

import Link from 'next/link'
import React, { useContext, useState } from 'react'
import TradeListItem from '@/app/components/TradeListItem'
import { Admincontext } from './layout'
import { useSession } from 'next-auth/react'
import Transaction from '@/app/components/Transaction'
import axios from 'axios'

function Page() {


    const { date, analytics, withdrawalReq } = useContext(Admincontext)

    const { data: session, status } = useSession()



    const CancelWithdrawal = async (id) => {

        await axios.delete(`/api/user/withdrawal/${id}`).then((response) => {

            if (response) {
                getWithdrawalHistory()
            }

        }).catch((error) => {
        })

    }


    const indianRupees = Intl.NumberFormat()

    return (
        <>

            <ContainerMd className="p-2 py-5" >

                <h2 className='mb-3 text-3xl font-medium capitalize'>Hello, {session?.user?.name.split(" ")[0]}</h2>
                <p className='text-gray-400 text-xs' >Track team progress here. You almost reach a goal!</p>

            </ContainerMd>

            <ContainerMd className="p-2 py-3 my-3 grid grid-cols-2 md:grid-cols-4 gap-3 border-b border-t" >

                {analytics?.map((info, index) => {


                    return <Analytics key={index} analytic={info.name} count={info.count} Icon={info.icon} />

                })}

            </ContainerMd>


            <ContainerMd className="p-2 py-3 my-3">
                <h2 className='font-medium'>Withdrawal Requests</h2>
                <div className='rounded-lg mt-3 max-h-[300px] overflow-y-scroll relative overflow-hidden'>
                    <table className='w-full overflow-x-scroll'>
                        <thead>
                            <tr>
                                <td className='font-medium uppercase'>
                                    Client Name
                                </td>
                                
                                <td className='font-medium uppercase'>
                                    Status
                                </td>
                                <td className='font-medium uppercase'>
                                    Amount
                                </td>
                                <td className='font-medium uppercase'>
                                    Date
                                </td>

                            </tr>
                        </thead>
                        <tbody>



                            {withdrawalReq?.map((transaction, index) => {

                                return <tr key={index} className='p-2  mb-3 rounded-md w-full'>
                                    <td className='p-2'>
                                        <span className='text-xs ms-auto text-gray-500 uppercase'>{transaction.name}</span>
                                    </td>

                                    <td className='p-2'>
                                        <span className={`p-2 rounded capitalize font-medium ${(transaction.status == "pending") ? "bg-red-50 text-red-500" : (transaction.status == "success") ? "bg-green-50 text-green-500" : "bg-red-500 text-white"} text-xs`}>{transaction.status}</span>
                                    </td>
                                    <td className='p-2'>
                                        <span className='text-xs ms-auto text-gray-500'>&#8377;{indianRupees.format(transaction.amount)}</span>
                                    </td>
                                    <td className='p-2'>
                                        <span className='text-xs ms-auto text-gray-500'>{transaction.date}</span>
                                    </td>
                                    {/* <td>
                                        <button className='text-white font-xs p-2 bg-red-600 rounded' onClick={() => { CancelWithdrawal(transaction._id) }} >Remove</button>
                                    </td> */}
                                    {/* <td className='p-2'>
                            <button className='bg-red-50 p-2 rounded font-medium text-red-500 text-xs hover:bg-red-500 hover:text-white transition' onClick={() => { CancelWithdrawal(transaction._id) }}>Cancel</button>
                          </td> */}
                                </tr>




                            })}


                        </tbody>
                    </table>
                </div>
            </ContainerMd >

            <ContainerMd className="p-2 py-3 my-3">
                <h2 className='font-medium'>Recently Added Funds</h2>
                <div className='border p-2 rounded-lg mt-3 min-h-[100px] max-h-[400px] overflow-y-scroll relative'>
                    <div className='flex sticky top-0 text-xs font-bold text-blue-500 hover:underline'>
                        <Link href="/" className='ms-auto me-4' >See All</Link>
                    </div>

                    {withdrawalReq?.map((request, index) => {
                        return <TradeListItem key={index} />
                    })}

                </div>
            </ContainerMd>
        </>
    )
}

export default Page