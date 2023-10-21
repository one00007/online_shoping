'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Divider from '@/app/components/Divider'
import Google from '@/public/icons/google.svg'
import Close from '@/public/icons/close-circle.svg'
import axios from 'axios'
import { SyncLoader } from 'react-spinners';
import { redirect } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'
import Logo from '@/app/components/Logo'
import Eye from '@/public/icons/eye.svg'
import EyeSlash from '@/public/icons/eye-slash.svg'



function Page() {

    const { data: session, status } = useSession()








    const [error, setStatus] = useState()
    const [revelPassword, setRevel] = useState(false)


    const [loading, setLoading] = useState(false)

    const [user, setuser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const inputHandler = (e) => {
        const { name, value } = e.target
        setuser((pre) => {
            return { ...pre, [name]: value }
        })
    }

    const registerHandler = async () => {


        if (user.password == user.cpassword) {
            setLoading(true)

            await axios.post('/api/register', user).then((response) => {
                setLoading(false)
                if (response.data.status.isError) {
                    setStatus(response.data.status)
                } else {
                    setStatus(response.data.status)


                    console.log(response.data)
                    const singin = async () => {
                        await signIn("credentials", { username: response.data.user.username, password: response.data.user.password, redirect: true, callbackUrl: '/profileupdate' })
                    }

                    singin()



                }




            }).catch((error) => {
                console.log(error)
            })
        } else {
            setStatus({ isError: true, massage: "please enter both password same" })
        }
    }




    return (
        <div className='p-6 bg-white rounded-lg m-auto z-20'>

            <Logo />

            {error ?
                <div className={`mb-5 ${error.isError ? "bg-red-600" : "bg-green-600"}  p-3 rounded flex error-box capitalize shadow-md`}>
                    <span className='text-white text-xs my-auto me-auto'>{error.massage}</span>
                    <div className='h-[25px] w-[25px]'>
                        <Close className="text-white h-full w-full cursor-pointer" onClick={() => { setStatus(false) }} />
                    </div>
                </div>
                : ""
            }
            <h1 className='text-xl font-serif font-bold mb-5'>Register</h1>


            <div className='grid gap-2 grid-cols-2 mb-4'>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <span className='font-medium mb-2 text-gray-500' >First Name</span>
                    </div>
                    <input onChange={inputHandler} name='firstName' type="text" className='w-[200px] p-2 border rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <span className='font-medium mb-2 text-gray-500' >Last Name</span>
                    </div>
                    <input onChange={inputHandler} name='lastName' type="text" className='w-[200px] p-2 border rounded-md' />
                </div>
            </div>
            <div className='grid mb-4'>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <span className='font-medium mb-2 text-gray-500' >Email</span>
                    </div>
                    <input onChange={inputHandler} name='email' type="text" className='p-2 border rounded-md' />
                </div>
            </div>
            <div className='grid gap-2 grid-cols-2 mb-4 relative'>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <span className='font-medium mb-2 text-gray-500' >Password</span>
                    </div>
                    <input onChange={inputHandler} name='password' type={revelPassword ? "text" : "password"} className='w-[200px] p-2 border rounded-md' />
                </div>
                <div className='flex flex-col'>
                    <div className="flex justify-between">
                        <span className='font-medium mb-2 text-gray-500' >Comfirm Password</span>
                    </div>
                    <input onChange={inputHandler} name='cpassword' type={revelPassword ? "text" : "password"} className='w-[200px] p-2 border rounded-md pe-16' />
                </div>
                <button className='absolute right-3 bottom-2  text-sm cursor-pointer h-[24px] w-[24px]' onClick={() => { setRevel(!revelPassword) }} >{revelPassword ? <EyeSlash className='h-full w-full text-gray-600' /> : <Eye className='h-full w-full text-gray-600' />}</button>

            </div>
            <div className='mb-3'>
                <button className='w-full font-bold bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600' onClick={registerHandler} >{loading ? <SyncLoader color="#fff" size={5} /> : "Register"}</button>

            </div>

            <div className='flex'>
                <Link href='login' className='text-xs text-center mx-auto'>Alread have an Account?</Link>
            </div>
        </div >
    )
}

export default Page