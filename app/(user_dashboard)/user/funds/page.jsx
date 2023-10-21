'use client'
import Container from '@/app/layouts/Container'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useContext } from 'react'
import { UserContext } from '../layout'
import axios from 'axios'
import { SyncLoader } from 'react-spinners'
import Close from '@/public/icons/close-circle.svg'
import Logo from '@/app/components/Logo'
import Link from 'next/link'


function Page() {

  const indianRupees = Intl.NumberFormat('en-IN');

  const { user, balance } = useContext(UserContext)


  const [loading, setLoading] = useState(false)
  const [error, setStatus] = useState()
  const [qr, setQr] = useState(false)

  const [paymentHistory, setPaymentHistory] = useState([])


  const getPaymentHistory = async () => {
    await axios.get("/api/user/fund").then((response) => {
      if (response) {
        setPaymentHistory(response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }


  useEffect(() => {

    getPaymentHistory()
  }, [])



  const newDate = new Date()
  const date = newDate.toDateString().split(" ")
  const transactionDate = `${date[2]} ${date[1]} ${date[3]}`

  const [amount, setAmount] = useState({
    name: "",
    amount: "",
    date: "",
    time: "",
    status: ""
  })


  const addamount = async (e) => {

    const time = `${(newDate.getHours().toString().length > 1) ? newDate.getHours() : `0${newDate.getHours()}`}:${(newDate.getMinutes().toString().length > 1) ? newDate.getMinutes() : `0${newDate.getMinutes()}`}`

    const { name, value } = e.target
    setAmount((pre) => {
      return { ...pre, [name]: value, name: user.name, date: transactionDate, time: time, status: "pending" }
    })
  }

  const predefineAmount = (amount, name) => {

    const time = `${(newDate.getHours().toString().length > 1) ? newDate.getHours() : `0${newDate.getHours()}`}:${(newDate.getMinutes().toString().length > 1) ? newDate.getMinutes() : `0${newDate.getMinutes()}`}`

    setAmount((pre) => {
      return { name: name, amount: amount, name: user.name, date: transactionDate, time: time, status: "pending" }
    })

  }


  const addFund = async () => {
    setLoading(true)
    await axios.post('/api/user/fund', amount).then((response) => {
      // setStatus(response.data.status)
      setQr(true)

      setLoading(false)
    }).catch((error) => {
      console.log(error)
    })

  }



  return (
    <Container className="p-2 ">
      <h1 className='text-lg font-bold text-center uppercase'>Add Fund</h1>

      <div className="mt-4 flex flex-col h-full  h-[500px] ">

        {qr ?

          <>
            <div className=" rounded-lg p mx-auto w-fit bg-black text-white flex">
              <div className='md:h-[100px] h-[80px] overflow-hidden w-[290px] md:w-[400px] bg-gray-500 rounded'>
                <Link href='#' className='block  mb-5 h-full mx-auto w-full'>
                  <Image alt='alt' height={1000} width={1000} className='object-cover  h-full' src={'/images/stock/logo.jpeg'} />
                </Link>
              </div>

            </div>

            <div className='mt-5 p-1 mx-auto h-[300px]  w-[300px]'>
              <Image alt='qr' src='/images/stock/NEWQR.png' className='h-full w-full' width={400} height={400} />
            </div>
            <div className='bg-white px-5 p-3 rounded-full mt-4 w-fit mx-auto'>
              <h1 className='font-medium text-center text-sm'>Upi: premchand.gehlot@paytm</h1>

            </div>
            <button className='mt-4 p-3 bg-black text-white mx-auto rounded-full px-6' >Easy To Pay</button>
          </>

          :

          <>
            <div className='m-auto w-full'>
              <div className="border rounded-lg p-4 mx-auto w-full sm:w-[520px] bg-black text-white">
                <p><span className='text-gray-400' >Trading Balance</span> &#8377; {indianRupees.format(balance)}</p>
                <div className='mt-3 flex flex-col relative'>
                  <label className='text-xs text-gray-400' >Enter Amount</label>
                  <input id='amount' type="number" value={amount.amount} name="amount" onChange={addamount} placeholder='&#8377; 0' className='bg-gray-800 rounded-md mt-1 p-4 focus:border-0 focus:outline-none' />
                  <div className='absolute right-0 h-[30px] w-[50px] bg-[#1f2937] top-8'>

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

                <div className='mt-4 flex justify-between'>
                  <button className='text-xs px-6 py-2 rounded bg-gray-800 ' onClick={() => { predefineAmount(10000, user.name) }} >+ &#8377; {indianRupees.format(10000)}</button>
                  <button className='text-xs px-6 py-2 rounded bg-gray-800 ' onClick={() => { predefineAmount(15000, user.name) }} >+ &#8377; {indianRupees.format(15000)}</button>
                  <button className='text-xs px-6 py-2 rounded bg-gray-800 ' onClick={() => { predefineAmount(25000, user.name) }} >+ &#8377; {indianRupees.format(25000)}</button>
                </div>

              </div>
            </div>
            <button className='bg-black  text-gray-200 hover:bg-[#1f2937] mt-2 p-4 mx-auto rounded-md w-full sm:w-[520px]' onClick={() => { (amount.amount >= 5000 && amount.amount > "") ? addFund() : setStatus({ isError: true, massage: "Please Enter Minimum Amount " }) }} >{loading ? <SyncLoader color="#fff" size={5} /> : "Add Fund"}</button>



            <div className='m-auto max-h-[420px] w-full md:w-[600px] overflow-y-scroll'>


              <div className='bg-white flex p-2 sticky top-0 mt-5'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <td className='font-medium uppercase p-2 text-xs'>
                        Transaction Id
                      </td>
                      <td className='font-medium uppercase p-2 text-xs'>
                        Status
                      </td>
                      <td className='font-medium uppercase p-2 text-xs'>
                        Amount
                      </td>
                      <td className='font-medium uppercase p-2 text-xs'>
                        Date
                      </td>

                    </tr>
                  </thead>
                  <tbody>



                    {paymentHistory?.map((transaction, index) => {

                      return <tr key={index} className='border p-2  mb-3 rounded-md w-full'>
                        <td className='p-2'>
                          <span className='text-xs ms-auto text-gray-500 uppercase'>WIDH{transaction._id.slice(1, 10)}</span>
                        </td>
                        <td className='p-2'>
                          <span className={`p-2 rounded font-medium ${(transaction.status == "pending") ? "bg-red-50 text-red-500" : (transaction.status == "success") ? "bg-green-50 text-green-500" : "bg-red-500 text-white"} text-xs`}>{transaction.status}</span>
                        </td>
                        <td className='p-2'>
                          <span className='text-xs ms-auto text-gray-500'>&#8377;{indianRupees.format(transaction.amount)}</span>
                        </td>
                        <td className='p-2'>
                          <span className='text-xs ms-auto text-gray-500'>{transaction.date}</span>
                        </td>
                        {/* <td className='p-2'>
                            <button className='bg-red-50 p-2 rounded font-medium text-red-500 text-xs hover:bg-red-500 hover:text-white transition' onClick={() => { CancelWithdrawal(transaction._id) }}>Cancel</button>
                          </td> */}
                      </tr>




                    })}


                  </tbody>
                </table>
              </div>
            </div>
          </>

        }


      </div>
    </Container>
  )
}

export default Page