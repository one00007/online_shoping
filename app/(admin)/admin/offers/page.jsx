'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import Link from 'next/link'
import { useEffect } from 'react'
import axios from 'axios'
import Gift from '@/public/icons/gift.svg'
import { Admincontext } from '../layout'

function Page() {

    const { users } = useContext(Admincontext)

    const [offer, setoffer] = useState({
        plane: "",
        amount: "",
        benefit: [],
        time: "",
        user: "",
    })

    const [alloffers, setoffers] = useState([])

    const [benefit, setBenifit] = useState('')



    const banefithandler = (e) => {
        const { name, value } = e.target
        if (name == 'benefit')
            setBenifit(value)

    }
    const offerHandler = (e) => {
        const { name, value } = e.target
        setoffer((pre) => {
            return { ...pre, [name]: value }
        })
    }

    const addbenefit = () => {
        setoffer((pre) => {
            return { ...pre, benefit: [...pre.benefit, benefit] }
        })
        setBenifit('')
    }

    const addoffer = () => {
        axios.post("/api/admin/offer", offer).then((response) => {
            if (response) {
                setoffer({
                    plane: "",
                    amount: "",
                    benefit: [],
                    time: "",
                    user: "",
                })
            }
        })
    }
    const getoffers = () => {
        axios.get("/api/admin/offer", offer).then((response) => {
            setoffers(response.data)
        })
    }

    useEffect(() => {
        getoffers()

    }, [])


    const deleteoffer = (id) => {
        axios.delete(`/api/admin/offer/${id}`, offer).then((response) => {
            if (response) {
                getoffers()
            }
        })
    }


    return (
        <Container className="p-2">
            <h1 className='text-lg font-bold'>Manage Offers</h1>


            <div className='grid mt-4 gap-4 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 '>

                <div className='p-4 flex'>
                    <div className='m-auto p-6 shadow w-[400px] rounded relative'>
                        {offer?.plane ?
                            <div className='h-[40px] w-[40px] absolute right-5 bg-blue-600 p-2 rounded-lg text-white'>
                                <Gift class='h-full w-full' />
                            </div>
                            : ""}
                        <h1 className='font-bold capitalize mb-2 text-xl'>{offer?.plane}</h1>
                        {offer?.amount ?
                            <h1 className='font-bold capitalize mb-2 text-2xl text-slate-600'>&#8377;{offer?.amount}</h1>
                            : ""}
                        {(offer?.benefit?.length < 1) ? "" :
                            < div className='mb-2 rounded-md h-full p-2 bg-gray-100'>
                                {offer?.benefit?.map((benefit, index) => {
                                    return <li key={index} className='mb-2 ms-5'>{benefit}</li>
                                })}
                            </div>
                        }
                        <h1 className='text-gray-800'>{offer?.time}</h1>
                    </div>
                </div>

                <div className='p-4 rounded shadow-lg min-h-[400px]'>
                    <h1 className='text-white bg-gray-600 p-2 w-fit px-5 rounded'>Add Offer</h1>
                    <div className='w-full mt-4'>
                        <div >
                            <label className='text-slate-600 font-bold' >Plane Name</label>
                            <input name='plane' value={offer.plane} onChange={offerHandler} type="text" className='block mt-3 p-3 w-full rounded bg-slate-100' />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div >
                            <label className='text-slate-600 font-bold' >Amount</label>
                            <input name='amount' value={offer.amount} onChange={offerHandler} type="number" className='block mt-3 p-3 w-full rounded bg-slate-100' />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div >
                            <label className='text-slate-600 font-bold' >Benefit</label>
                            <div className='grid'>
                                <input name='benefit' value={benefit} onChange={banefithandler} type="text" className='block mt-3 p-3 w-full rounded bg-slate-100' />
                                <button className='bg-black px-4 text-white h-[30px] ' onClick={addbenefit}>add</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div >
                            <label className='text-slate-600 font-bold' >Time</label>
                            <input name='time' value={offer.time} onChange={offerHandler} type="text" className='block mt-3 p-3 w-full rounded bg-slate-100' />
                        </div>
                    </div>
                    <div className='w-full mt-4'>
                        <div >
                            <label className='text-slate-600 font-bold' >User</label>
                            <select onChange={offerHandler} name="user" id="" className='block mt-3 p-3 w-full rounded bg-slate-100'>
                                {users?.map((user, index) => {
                                    return <option key={index} value={user.username}>{user.username.slice(3, user.username.length)}</option>
                                })}
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 ">

                        <button onClick={addoffer} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                            Button
                        </button>

                    </div>

                </div>



            </div>
            <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>

                {alloffers?.map((offer, index) => {
                    return <div key={index} className=' p-6 shadow rounded relative h-fit '>
                        {offer?.plane ?
                            <div className='h-[40px] w-[40px] absolute right-5 bg-blue-600 p-2 rounded-lg text-white'>
                                <Gift class='h-full w-full' />
                            </div>
                            : ""}
                        <h1 className='font-bold capitalize mb-2 text-xl'>{offer?.plane}</h1>
                        {offer?.amount ?
                            <h1 className='font-bold capitalize mb-2 text-2xl text-slate-600'>&#8377;{offer?.amount}</h1>
                            : ""}
                        {(offer?.benefit?.length < 1) ? "" :
                            < div className='mb-2 rounded-md h-full p-2 bg-gray-100'>
                                {offer?.benefit?.map((benefit, index) => {
                                    return <li key={index} className='mb-2 ms-5'>{benefit}</li>
                                })}
                            </div>
                        }
                        <h1 className='text-gray-800'>{offer?.time}</h1>
                        <button className='bg-red-600 text-white p-2 rounded-md w-full mt-2' onClick={() => { deleteoffer(offer?._id) }}>Delete</button>
                    </div>
                })}
            </div>
        </Container >
    )
}

export default Page