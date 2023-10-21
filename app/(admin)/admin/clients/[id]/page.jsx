'use client'
import Container from '@/app/layouts/Container'
import React, { useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Tick from '@/public/icons/tick-circle.svg'
import Close from "@/public/icons/close-circle.svg"
import Dots from "@/public/icons/dots.svg"
import Delete from "@/public/icons/delete.svg"
import Edit from "@/public/icons/edit.svg"

function Page({ params }) {


    const indianRupees = Intl.NumberFormat('en-IN');


    const paramid = params.id
    const [funds, setFunds] = useState([])
    const [withdrawal, setWithdrawal] = useState([])

    const [user, setUser] = useState()

    const [balance, setbalance] = useState()

    const [allTrades, userTrades] = useState([])


    const [trade, setTrades] = useState({
        stockName: "",
        stockDate: "",
        option: "",
        stockType: "",
        lot: "",
        lotSize: "",
        buyPrice: "",
        sellingPrice: "",
        type: "",
        profit: "0",
        loss: "0",
        result: "",
        status: "",
        ltp: "0.05",
        brokrage: "0"

    })

    const [editMode, setEditMode] = useState(false)

    const editDataSet = (id) => {

        for (const trad of allTrades) {

            if (id == trad._id) {
                setTrades(trad)
                setEditMode(true)
            }
        }

    }

    const tradeInpuHandler = (e) => {
        const { name, value } = e.target

        setTrades((pre) => {
            return { ...pre, [name]: value }
        })

    }





    const getUserDetails = async () => {
        await axios.get(`/api/admin/clients/${params.id}`).then((response) => {
            if (response) {

                setUser(response.data.user)
                setFunds(response.data.addedFunds)
                setWithdrawal(response.data.withdrawalHistory)
                setbalance(response.data.userBalance)
                userTrades(response.data.usertrades)



            }

        })
    }



    const updateFundStatus = async (id, data) => {

        await axios.patch(`/api/admin/clients/${params.id}/${id}`, data).then((response) => {

            if (response) {
                getUserDetails()
            }

        })


    }

    const CancelWithdrawal = async (id) => {

        await axios.delete(`/api/user/withdrawal/${id}`).then((response) => {

            if (response) {
                getUserDetails()

            }

        }).catch((error) => {
        })

    }


    const addTrade = async (e) => {
        e.preventDefault()
        await axios.post(`/api/admin/clients/${params.id}`, trade).then((response) => {
            if (response.status) {
                getUserDetails()
            }
        }).catch((error) => {
            console.log('error')
        })

    }

    const updateTrade = async (e) => {
        e.preventDefault()
        await axios.patch(`/api/admin/clients/${params.id}`, trade).then((response) => {
            if (response.status) {
                getUserDetails()
            }
        }).catch((error) => {
            console.log('error')
        })

    }
    const deleteTrade = async (id) => {
        await axios.delete(`/api/admin/clients/remove/${id}`,).then((response) => {
            if (response.status) {
                console.log(response)
                getUserDetails()
            }
        }).catch((error) => {
            console.log('error')
        })

    }

    const [username, setusername] = useState()


    const updateUsername = async () => {
        await axios.post(`/api/admin/clients/username/${params.id}`, { username: username }).then((response) => {
            if (response) {
                getUserDetails()
            }
        }).catch((error) => {

        })

    }


    const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });


    useEffect(() => {

        const getUserDetails = async () => {
            await axios.get(`/api/admin/clients/${paramid}`).then((response) => {
                if (response) {

                    setUser(response.data.user)
                    setFunds(response.data.addedFunds)
                    setWithdrawal(response.data.withdrawalHistory)
                    setbalance(response.data.userBalance)
                    userTrades(response.data.usertrades)


                }

            })
        }

        getUserDetails()

    }, [paramid])




    return (
        <Container className="p-2">
            <h1 className='text-lg font-bold'>Client Activity  </h1>

            <div className='grid mt-4 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:grid-rows-[250px_600px_600px]'>

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
                        <Link href={`/admin/profile/${user?._id}`} className='text-xs px-5 rounded-full bg-[#2d1e65] border border-2 border-white text-white py-1.5' >Profile</Link>
                    </div>
                </div>

                <div className='grid gap-2 grid-cols-1 grid-rows-[80px_auto]'>

                    <div className='rounded-lg border p-3'>
                        <h1 className='text-gray-500 text-sm mb-1'>Balance</h1>
                        <h1 className='text-gray-950 text-lg font-bold'>&#8377; {indianRupees.format(balance)}</h1>
                    </div>



                    <div className='rounded-lg flex border p-2'>
                        <div className='m-auto flex flex-col'>
                            <label >Username :{username}</label>
                            <input type="text" required className='bg-gray-100 outline-0 p-3 rounded-lg' name='username' onChange={(e) => { setusername(e.target.value) }} />
                            <button className='outline-0 mt-2 hover:bg-gray-950 bg-gray-600 text-white rounded-lg p-2' onClick={updateUsername}>Update</button>
                        </div>

                    </div>

                </div>

                <div className='border bg-gray-50 rounded-lg col-span-1 md:col-span-2 xl:col-span-1 row-span-3 overflow-y-scroll'>
                    <div className='p-3 py-2 bg-gray-50 border-b sticky top-0'>
                        <div className='flex justify-between py-2'>
                            <p className='text-xs'> Buy Avg Price</p>
                            <p className='text-xs'>Sell Avg Price</p>
                            <p className='text-xs'>Todays Gain <br /> & Loss/LTP</p>
                        </div>
                    </div>



                    {allTrades?.map((trade, index) => {

                        const date = new Date(trade.stockDate)

                        return <div key={index} className='bg-white p-2 m-1 rounded shadow'>
                            <div className='flex justify-between'>
                                <span className='text-xs p-1 mb-2 px-4 bg-gray-800 text-gray-100 rounded-md inline-block'>{trade?.status}</span>
                                <span className='text-xs p-1 mb-2 px-4 bg-yellow-600 text-gray-100 rounded-md inline-block'>&#8377;{trade?.brokrage}</span>
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
                            <div className='pb-3 border-b border-b'>
                                <h1 className='text-xs'><span className='font-bold'>{trade.lot}</span> Lot (1 Lot = {trade.lotSize}) | <span className='font-medium p-1 bg-gray-200 rounded-sm'>{trade.type}</span></h1>
                            </div>
                            <div className='flex justify-between py-2'>
                                <h1 className='text-sm font-bold' >&#8377;{trade.buyPrice}</h1>
                                <h1 className='text-sm font-bold' >&#8377;{trade.sellingPrice}</h1>
                                <h1 className='text-sm font-bold' >&#8377;{trade?.ltp}</h1>
                            </div>
                            <div className='p-1 flex'>
                                <button className='relative ms-auto inline-block h-[20px] group/item w-[50px] bg-gray-50 rounded' >
                                    <Dots className="absolute w-full h-full  top-0" />
                                    <div className='absolute bg-white invisible group-hover/item:visible p-1 shadow-lg right-0 bottom-0 rounded'>
                                        <button onClick={() => { deleteTrade(trade._id) }} className='w-full flex text-xs items-center text-white p-2 hover:bg-gray-100 rounded'>
                                            <span className='me-3'>
                                                <Delete className='text-red-600' />
                                            </span>
                                            <span className='text-gray-800 font-bold'>
                                                Delete
                                            </span>
                                        </button>
                                        <button onClick={() => { editDataSet(trade?._id) }} className='w-full flex text-xs items-center text-white p-2 hover:bg-gray-100 rounded'>
                                            <span className='me-3'>
                                                <Edit className='text-green-600' />
                                            </span>
                                            <span className='text-gray-800 font-bold'>
                                                Edit
                                            </span>
                                        </button>
                                    </div>
                                </button>

                            </div>
                        </div>
                    })}



                </div>

                <div className='border col-span-1 md:col-span-2 rounded-lg overflow-hidden flex flex-col'>
                    <div className='p-3 py-2 bg-gray-50 sticky top-0'>
                        <h1>Add New Trade</h1>
                    </div>

                    <form onSubmit={editMode ? updateTrade : addTrade}>

                        <div className='p-3'>


                            <div className='grid gap-3 grid-cols-3'>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Stock Name</label>
                                    <input required onChange={tradeInpuHandler} name='stockName' value={trade.stockName} type="text" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Expiry</label>
                                    <input required onChange={tradeInpuHandler} name='stockDate' value={trade.stockDate} type="date" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Strike Price</label>
                                    <input required onChange={tradeInpuHandler} name='option' value={trade.option} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                            </div>

                            <div className='grid gap-3 grid-cols-3'>

                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Lot</label>
                                    <input required onChange={tradeInpuHandler} name='lot' value={trade.lot} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Lot Size</label>
                                    <input required onChange={tradeInpuHandler} name='lotSize' value={trade.lotSize} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Stock Type</label>
                                    <select required onChange={tradeInpuHandler} name="stockType" value={trade.stockType} className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' id="">
                                        <option value="CE">CE</option>
                                        <option value="PE">PE</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid gap-3 grid-cols-3'>

                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Buy Prince</label>
                                    <input required onChange={tradeInpuHandler} name='buyPrice' value={trade.buyPrice} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Selling Price</label>
                                    <input required onChange={tradeInpuHandler} name='sellingPrice' value={trade.sellingPrice} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Type</label>
                                    <select required onChange={tradeInpuHandler} name='type' value={trade.type} className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' id="">
                                        <option value="">select</option>
                                        <option value="Intraday">Intraday</option>
                                        <option value="Positional">Positional</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid gap-3 grid-cols-3'>

                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Profit</label>
                                    <input required onChange={tradeInpuHandler} name='profit' value={trade.profit} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Loss</label>
                                    <input required onChange={tradeInpuHandler} name='loss' value={trade.loss} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Result</label>
                                    <select required onChange={tradeInpuHandler} name='result' value={trade.result} className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' id="">
                                        <option value="">select</option>
                                        <option value="loss">Loss</option>
                                        <option value="profit">Profit</option>
                                    </select>
                                </div>
                            </div>
                            <div className='grid gap-3 grid-cols-3'>

                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Status</label>
                                    <select required onChange={tradeInpuHandler} name='status' value={trade.status} className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' id="">
                                        <option value="">select</option>
                                        <option value="SQUARED-OFF">SQUARED-OFF</option>
                                        <option value="OPEN">OPEN</option>
                                    </select>
                                </div>

                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >LTP</label>
                                    <input required onChange={tradeInpuHandler} name='ltp' value={trade.ltp} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                                <div className='p-2 flex flex-col'>
                                    <label className='text-sm mb-2' >Brokrage</label>
                                    <input required onChange={tradeInpuHandler} name='brokrage' value={trade.brokrage} type="number" className='w-full p-3 rounded ouline-0 bg-gray-50 focus:outline-0 border ' />
                                </div>
                            </div>


                            <button type='submit' className='m-auto p-2 bg-green-600 text-white rounded-lg px-4 mb-4 w-full'  >Add</button>
                        </div>
                    </form>


                </div>




                <div className='overflow-y-scroll col-span-1 md:col-span-2 rounded-lg'>
                    <div className='p-3 py-2 bg-gray-50 sticky top-0'>
                        <h1>Balance Request</h1>
                    </div>

                    {funds?.map((fund, index) => {
                        return <div key={index} className='p-3 flex py-2 bg-black text-white my-2 mx-1 rounded'>
                            <div className='me-2'>
                                <div className='m-auto p-1 flex bg-gray-900/90 rounded h-[30px] w-[30px]'>
                                    {(fund.status == "success") ? <Tick className='h-full w-full text-green-600' /> : (fund.status == "pending") ? <Close className='h-full w-full text-red-600' /> : <Close className='h-full w-full text-red-600' />}

                                </div>
                            </div>
                            <div className=''>
                                <h1 className='' >&#8377; {indianRupees.format(fund.amount)}  </h1>
                            </div>
                            <div className='ms-auto flex flex-col'>
                                <span className='text-xs text-right'>Date : {fund.date}</span>
                                <span className='text-xs mt-2 text-right'>Time : {fund.time}</span>
                            </div>
                            <div className='ms-2'>
                                {(fund.status == "success") ?
                                    <button className='  text-xs bg-red-100/20 text-red-600 px-2 rounded w-full mt-2 block' onClick={() => { updateFundStatus(fund._id, { status: "pending" }) }} >Reject</button>
                                    :
                                    <button className='  text-xs bg-green-100/20 text-green-600 px-2 rounded w-full block ' onClick={() => { updateFundStatus(fund._id, { status: "success" }) }} >Accept</button>

                                }

                            </div>

                        </div>
                    })}

                </div>

            </div>
        </Container >
    )
}

export default Page