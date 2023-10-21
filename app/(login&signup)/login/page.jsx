'use client'
import React from 'react'
import Link from 'next/link'
import Divider from '@/app/components/Divider'
import Google from '@/public/icons/google.svg'
import { useState } from 'react'
import Close from '@/public/icons/close-circle.svg'
import { getProviders, signIn, useSession } from "next-auth/react"
import { redirect } from 'next/navigation'
import { SyncLoader } from 'react-spinners'
import Logo from '@/app/components/Logo'
import Eye from '@/public/icons/eye.svg'
import EyeSlash from '@/public/icons/eye-slash.svg'



function Page() {

    const [error, setStatus] = useState()
    const [loading, setLoading] = useState(false)

    const [revelPassword, setRevel] = useState(false)

    //if session available redirect to  page
    const { data: session, status } = useSession()
    if (session) {
        redirect("/admin")
    }
    //if session available redirect to  page

    const [credential, setCredential] = useState({
        username: "",
        password: "",

    })


    const inputhandler = (e) => {
        const { name, value } = e.target

        setCredential((pre) => {
            return { ...pre, [name]: value }
        })

    }

    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        const result = await signIn("credentials", { username: credential.username, password: credential.password, redirect: false, callbackUrl: '/' })
        if (result?.ok) {
            setLoading(false)
        } else {
            setStatus({ isError: true, massage: result.error })
            setLoading(false)
        }
    }



    return (
        <div className='p-8 bg-white rounded-lg m-auto z-20'>

            <Logo />

            {error ?
                <div className={` mb-5 ${error.isError ? "bg-red-600" : "bg-green-600"}  p-3 rounded flex error-box capitalize shadow-md`}>
                    <span className='text-white text-xs my-auto me-auto'>{error.massage}</span>
                    <div className='h-[25px] w-[25px]'>
                        <Close className="text-white h-full w-full cursor-pointer" onClick={() => { setStatus(false) }} />
                    </div>
                </div>
                : ""
            }

            <h1 className='text-xl font-serif font-bold mb-5 '>Login</h1>

            <div className='flex flex-col mb-8'>
                <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Client Id</span>
                    <span className='text-sm' >Need an account? <Link href='/register' className='font-medium text-green-500'>Sign up</Link></span>
                </div>
                <input onChange={inputhandler} type="text" name='username' className='w-[300px] p-3 border rounded-md' />
            </div>
            <div className='flex flex-col mb-8 relative'>
                <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Password</span>
                </div>
                <input onChange={inputhandler} type={revelPassword ? "text" : "password"} name='password' className='w-[300px] p-3 pe-20 border rounded-md' />
                <button className='absolute right-3 bottom-3.5  text-sm cursor-pointer h-[24px] w-[24px]' onClick={() => { setRevel(!revelPassword) }} >{revelPassword ? <EyeSlash className='h-full w-full text-gray-600' /> : <Eye className='h-full w-full text-gray-600' />}</button>
            </div>

            <div className='mb-4'>
                <button className='w-full font-bold bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600' onClick={handleLogin} >{loading ? <SyncLoader color="#fff" size={5} /> : "Login"}</button>
            </div>

            <div className='flex justify-between'>
                <Link href='register' className='text-xs text-center mx-auto'>Create Account</Link>
                <Link href='reset' className='text-xs text-center mx-auto'>Forgot Password</Link>
            </div>
        </div>
    )
}

export default Page