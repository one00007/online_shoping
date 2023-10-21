'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { UserContext } from '../layout'
import { SyncLoader } from 'react-spinners';
import Close from '@/public/icons/close-circle.svg'
import Tick from '@/public/icons/tick-circle.svg'




function Page() {


  const indianRupees = Intl.NumberFormat('en-IN');

  const { user, balance } = useContext(UserContext)

  const [loading, setLoading] = useState(false)
  const [error, setStatus] = useState()

  const newDate = new Date()
  // const date = `${newDate.getDate()}-${(newDate.getMonth().toString().length > 2) ? newDate.getMonth() : `0${newDate.getMonth()}`}-${newDate.getFullYear()}`

  const date = newDate.toDateString().split(" ")
  const transactionDate = `${date[2]} ${date[1]} ${date[3]}`

  const [withdrawalHistory, setHistory] = useState([])

  const [transaction, setTransaction] = useState({
    name: "",
    amount: "",
    date: "",
    time: "",
    status: ""
  })

  const getWithdrawalHistory = async () => {
    await axios.get("/api/user/withdrawal").then((response) => {
      setHistory(response.data)

    })
  }

  useEffect(() => {



    getWithdrawalHistory()

  }, [])



  const transactionHandler = (e) => {

    const time = `${(newDate.getHours().toString().length > 1) ? newDate.getHours() : `0${newDate.getHours()}`}:${(newDate.getMinutes().toString().length > 1) ? newDate.getMinutes() : `0${newDate.getMinutes()}`}`

    const { name, value } = e.target

    setTransaction((pre) => {
      return { ...pre, [name]: value, name: user.name, date: transactionDate, time: time, status: "pending" }
    })

    console.log(transaction)


  }




  const withdrawal = async () => {

    if (balance < transaction.amount) {

      setStatus({ isError: true, massage: `Insufficient funds. Please check your wallet balance. You are attempting to withdraw ₹ ${indianRupees.format(transaction.amount)}.00, but your wallet only contains ₹ ${indianRupees.format(balance)}.00` })

    } else {


      setLoading(true)
      await axios.post('/api/user/withdrawal', transaction).then((response) => {
        setStatus(response.data.status)
        setLoading(false)
        if (response) {
          getWithdrawalHistory()
        }
      }).catch((error) => {
        console.log(error)
      })
    }


  }

  const CancelWithdrawal = async (id) => {

    await axios.delete(`/api/user/withdrawal/${id}`).then((response) => {

      if (response) {
        getWithdrawalHistory()
      }

    }).catch((error) => {
    })

  }



  return (
    <Container className="p-2 min-h-screen ">
      <h1 className='text-lg font-bold uppercase'>Withdrawal History</h1>


      <div className='mt-4 grid gap-4 md:grid-cols-1 '>

        <div className='p-2  h-full'>

          <div className='p-4 bg-black text-white rounded-md  bottom-[100px] '>

            <p className='text-gray-300 text-sm' >Withdrawal Request</p>


            <div className='mt-3 flex flex-col relative'>
              <label className='text-xs text-gray-400' >Enter Amount</label>
              <input id='amount' type="number" name="amount" value={transaction.amount} onChange={transactionHandler} placeholder='&#8377; 0' className='bg-gray-800 rounded-md mt-1 p-4 focus:border-0 focus:outline-none' />
              <div className='absolute right-0 h-[30px] w-[50px] bg-[#1f2937] top-8'>

              </div>
              <button className='bg-green-500 text-gray-200  mt-2 p-4 mx-auto rounded-md w-full' onClick={withdrawal}>{loading ? <SyncLoader color="#fff" size={5} /> : "Withdraw Fund"}</button>

            </div>

          </div>


          {error ?
            <div className={`mb-5 mt-2 ${error.isError ? "bg-red-600" : "bg-green-600"}  p-3 rounded flex error-box capitalize shadow-md`}>
              <span className='text-white text-xs my-auto me-auto'>{error.massage}</span>
              <div className='h-[25px] w-[25px]'>
                <Close className="text-white h-full w-full cursor-pointer" onClick={() => { setStatus(false) }} />
              </div>
            </div>
            : ""
          }

          <div className='bg-white p-4 mt-4 rounded-lg'>
            <h1 className='font-bold text-gray-950'>
              SPECIAL NOTE :
            </h1>
            <ul className='list-disc ps-5 text-gray-700 text-sm mt-3 md:text-md'>
              <li>
                Withdrawal available only on Saturday within 4-8 hrs.
              </li>
              <li>
                10 trading session must be compulsory for any withdrawal
              </li>
            </ul>

          </div>

        </div>


        <div className='max-h-[700px] px-2 overflow-y-scroll relative'>

          <div className='rounded-lg bg-white flex p-4 sticky top-0 flex flex-col'>
            <h1 className='mb-3 font-bold'>Withdrawal History</h1>


            {withdrawalHistory?.map((history, index) => {
              return <div className='border-b p-3' key={index}>
                <div>
                  <span className='text-xs text-slate-500'>{history.date} at {history.time}</span>
                </div>
                <div className='py-2 flex'>
                  <div className='border w-[60px] me-2 rounded-md bg-gray-50'>

                  </div>
                  <div>
                    <h1 className='uppercase'>One Finance</h1>
                    <h3 className='uppercase text-sm'>{history._id.slice(5, 10)}</h3>
                  </div>
                  <div className='ms-auto'>
                    <h1 className='uppercase text-end'>&#8377; {history?.amount}</h1>
                    <h3 className={`${(history?.status == "failed") ? "bg-red-50 text-red-600" : (history?.status == "pending") ? "bg-orange-50 text-orange-600" : (history?.status == "success") ? "bg-green-60 text-green-600" : ""} uppercase text-xs p-2  rounded-full`}>{history?.status}</h3>
                  </div>
                </div>

                {history?.cancelReason ?
                  <div className={`${(history?.status == "pending") ? "bg-orange-50" : (history?.status == "failed") ? "bg-red-50" : (history?.status == "reject") ? "" : ""} p-4 flex`}>

                    {(history.status == "failed") ?
                      <div className='h-[40px] shrink-0 w-[40px] me-2 text-red-600'>
                        <Close className='h-full w-full' />
                      </div> : (history.status == 'approved') ? <div className='h-[40px] shrink-0 w-[40px] me-2 text-green-600'>
                        <Tick className='h-full w-full' />

                      </div> : ""}

                    <p className='text-xs'>{history?.cancelReason}</p>
                  </div>
                  : ""}
              </div>
            })}


          </div>








        </div>



      </div>

    </Container >
  )
}

export default Page