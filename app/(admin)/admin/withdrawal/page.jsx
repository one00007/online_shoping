'use client'
import ContainerXl from '@/app/layouts/ContainerXl'
import React, { useEffect, useState } from 'react'
import { Admincontext } from '../layout'
import { useContext } from 'react'
import axios from 'axios'

function Page() {

    const { withdrawalReq } = useContext(Admincontext)

    const [withdrawaledit, setWithdrawalEdit] = useState({
        _id: "",
        email: "",
        name: "",
        amount: "",
        date: "",
        time: "",
        status: "",
        cancelReason: "",

    })

    useEffect(() => {
        console.log(withdrawalReq)
    }, [])


    const setedit = (id) => {

        withdrawalReq.filter((items) => {
            if (id == items._id) {
                setWithdrawalEdit(items)
            }
        })

    }

    const edithandler = (e) => {
        const { name, value } = e.target

        setWithdrawalEdit((pre) => {
            return { ...pre, [name]: value }
        })

    }

    const update = (e) => {
        e.preventDefault()

        axios.patch('/api/user/withdrawal/', withdrawaledit).then((response) => {
            console.log(response)
            if (response) {
                setWithdrawalEdit({
                    _id: "",
                    email: "",
                    name: "",
                    amount: "",
                    date: "",
                    time: "",
                    status: "",
                    cancelReason: "",

                })
            }
        }).catch((error) => {
            console.log(error)
        })

    }

    return (
        <>
            <ContainerXl className='p-4 border'>
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">

                    <div className="border p-4">
                        <form onSubmit={update}>
                            <h1 className='text-white bg-gray-600 p-2 w-fit px-5 rounded'>Edit Withdrawal</h1>
                            <div className='w-full mt-4'>
                                <div >
                                    <label className='text-slate-600 font-bold' >email</label>
                                    <input required type="text" name='email' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.email} />
                                </div>
                                <div >
                                    <label className='text-slate-600 font-bold' >name</label>
                                    <input required type="text" name='name' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.name} />
                                </div>
                                <div >
                                    <label className='text-slate-600 font-bold' >amount</label>
                                    <input required type="text" name='amount' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.amount} />
                                </div>
                                <div >
                                    <label className='text-slate-600 font-bold' >date</label>
                                    <input required type="text" name='date' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.date} />
                                </div>
                                <div >
                                    <label className='text-slate-600 font-bold' >time</label>
                                    <input required type="text" name='time' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.time} />
                                </div>
                                <div className='flex flex-col' >
                                    <label className='text-slate-600 font-bold' >status</label>
                                    <select name="status" className='block mt-3 p-3 w-full rounded bg-slate-100' defaultValue={withdrawaledit.status} onChange={edithandler} >
                                        <option value="success">success</option>
                                        <option value="failed">failed</option>
                                        <option value="pending">pending</option>
                                    </select>
                                </div>
                                <div >
                                    <label className='text-slate-600 font-bold' >cancelReason</label>
                                    <input type="text" required={(withdrawaledit.status == "failed") ? true : false} name='cancelReason' className='block mt-3 p-3 w-full rounded bg-slate-100' onChange={edithandler} value={withdrawaledit.cancelReason} />
                                </div>
                            </div>
                            <button type="submit" class=" mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                        </form>
                    </div>

                    <div className="border p-4 min-h-[700px] max-h-[600px] overflow-y-scroll">
                        <h1 className='font-bold'>Withdral Requests</h1>

                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Client Name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Amount
                                        </th>
                                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>


                                    {withdrawalReq?.map((req, index) => {
                                        return <tr key={index} class="border-b border-gray-200 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                                {req.name}
                                            </th>
                                            <td class="px-6 py-4">
                                                &#8377;{req.amount}.00
                                            </td>
                                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {req.status}
                                            </td>
                                            <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                                {req.date}
                                            </td>
                                            <td class="px-6 py-4">
                                                <button onClick={() => { setedit(req._id) }}>Edit</button>
                                            </td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>
                        </div>



                    </div>

                </div>

            </ContainerXl>
        </>
    )
}

export default Page