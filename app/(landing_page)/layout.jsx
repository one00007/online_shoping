'use client'
import React, { useState } from 'react'
import ContainerFull from '../layouts/ContainerFull'
import Image from 'next/image'
import Link from 'next/link'
import ContainerXl from '../layouts/ContainerXl'
import Logo from '../components/Logo'
import Send from '@/public/icons/send-1.svg'
import Menu from '@/public/icons/menu.svg'
import CloseBox from '@/public/icons/close-square.svg'
import Location from '@/public/icons/location.svg'
import { usePathname } from 'next/navigation'
import company from '../state'

function Layout({ children }) {

    const pathname = usePathname()
    const [isOpen, setSidebar] = useState(false)

    const link = [
        {
            linkname: "home",
            path: "/"
        },
        {
            linkname: "about",
            path: "/about"
        },
        {
            linkname: "product",
            path: "/product"
        },
        {
            linkname: "pricing",
            path: "/pricing"
        },
        {
            linkname: "contact",
            path: "/contact"
        },
    ]

    return (
        <>
            <ContainerFull className='flex flex-col min-h-screen relative' >
                {/* header */}
                <ContainerFull className="shadow sticky top-0 bg-white z-10" >
                    <ContainerXl className="mx-auto p-2 flex">
                        <div className='flex items-center'>

                            <div className='h-[40px] w-auto '>
                                <Image alt='image' height={1000} width={1000} className='object-cover w-full h-full' src={'/images/stock/logo.png'} />
                            </div>
                            {/* <h1 className='ms-2 font-bold'>1 Finance</h1> */}

                        </div>

                        <div className='my-auto ms-auto hidden md:flex'>
                            {link.map((link, index) => {

                                return <Link href={link.path} key={index} className={` ${(pathname == link.path) ? "bg-[#2c1f63] text-white" : ""} capitalize transition hover:bg-gray-200 px-3 py-2 rounded-lg ms-4 text-sm text-gray-600  font-medium`}>{link.linkname}</Link>
                            })}

                        </div>

                        <div className='ms-auto my-auto flex'>
                            <Link href='/register' className=' md:hidden lg:block border border-2 border-[#2c1f63] text-[9px] sm:text-xs bg-[#2c1f63] py-3 px-5 text-white rounded-lg' >Open Demat</Link>
                            <Link href='/login' className='ms-2 border border-2 border text-[9px] sm:text-xs py-3 px-5 font-bold rounded-lg' >Login</Link>
                            <button className='w-[45px] sm:block md:hidden h-[45px] ms-3 rounded-lg border' onClick={() => { setSidebar(!isOpen) }}>
                                {isOpen ?
                                    <CloseBox className='m-auto' />
                                    :
                                    <Menu className='m-auto' />
                                }
                            </button>
                        </div>
                    </ContainerXl>
                </ContainerFull>
                {/* header */}

                <ContainerFull>

                    {children}
                </ContainerFull>


                {/* footer */}

                <ContainerFull className='bg-black text-white  py-8 mt-auto'>
                    <ContainerXl >
                        <div className='pb-4 border-b border-gray-500 grid gap-4 lg:grid-cols-4 md:grid-cols-2 px-3'>

                            <div className=''>
                                <Link href='/' className='block p-1 mb-5 h-[50px] w-[170px]'>
                                    <Image alt='image' height={1000} width={1000} className='object-cover w-full h-full' src={'/images/stock/logo.png'} />
                                </Link>
                                <p className='mt-3 text-sm text-gray-400'>We are a diversified company specialized in providing comprehensive trading solutions for individuals and businesses.</p>
                                <div className='mt-3 flex'>

                                    <div className='cursor-pointer rounded-lg p-1  h-[40px] w-[40px]'>
                                        <Image alt='image' height={300} width={300} className='h-full w-full' src='/images/stock/facebook.png' />
                                    </div>
                                    <div className='cursor-pointer rounded-lg p-1  h-[40px] w-[40px]'>
                                        <Image alt='image' height={300} width={300} className='h-full w-full' src='/images/stock/instagram.png' />
                                    </div>
                                    <div className='cursor-pointer rounded-lg p-1  h-[40px] w-[40px]'>
                                        <Image alt='image' height={300} width={300} className='h-full w-full' src='/images/stock/twiter.png' />
                                    </div>
                                    <div className='cursor-pointer rounded-lg p-1  h-[40px] w-[40px]'>
                                        <Image alt='image' height={300} width={300} className='h-full w-full' src='/images/stock/youtube.png' />
                                    </div>

                                </div>
                            </div>


                            <div className='flex flex-col'>
                                <h3 className='font-bold mb-3 '>Quick Links</h3>
                                {link.map((link, index) => {
                                    return <Link key={index} className='text-sm mb-3 text-gray-400 hover:text-white capitalize' href={link.path} >{link.linkname}</Link>
                                })}

                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold mb-3 '>Pages</h3>
                                <Link className='text-sm mb-3 text-gray-400 hover:text-white' href='/' >FAQs</Link>
                                <Link className='text-sm mb-3 text-gray-400 hover:text-white' href='/' >Pricing</Link>
                                <Link className='text-sm mb-3 text-gray-400 hover:text-white' href='/' >Partners</Link>
                                <Link className='text-sm mb-3 text-gray-400 hover:text-white' href='/' >Support Center</Link>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='font-bold mb-3 '>Newsletter</h3>

                                <div className='flex'>
                                    <div className='h-[60px] w-[60px] rounded p-1.5'>

                                        <Image alt='image' height={400} width={400} className='h-full w-full' src='/images/stock/call.png' />
                                    </div>
                                    <div>
                                        <p className='text-gray-100 text-sm mb-1'>Need Help? 24/7</p>
                                        <p className='text-gray-100 text-md font-bold'>{company.contact}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-[30px] w-[30px] rounded flex'>
                                        <Location className='h-[80%] m-auto w-[80%] m-auto text-white' />

                                    </div>
                                    <div>
                                        <p className='text-gray-100 text-sm mb-1'>4-1-1240/2, Bogulkunta, Abids <br /> Hyderabad, Telangana 500001</p>
                                    </div>

                                </div>

                                <div className='rounded-lg flex overflow-hidden w-fit h-[40px] mt-4 text-gray-500'>
                                    <input placeholder='Your email address' type="text" className='p-2 w-[85%] h-full focus:outline-0' />
                                    <button className='w-[15%] bg-gray-500 h-full flex hover:bg-green-600 transition'>
                                        <Send className='m-auto text-white' />
                                    </button>
                                </div>
                            </div>

                        </div>

                        <div className='py-5'>
                            <h2 className='text-sm text-gray-400'> <span className='text-gray-300 font-bold'>{company.name} Copyright ©</span>  2023 {company.name} Company  All rights reserved.</h2>
                        </div>

                    </ContainerXl>
                </ContainerFull>

                {/* footer */}

                <div className={`sidebar z-20 md:hidden block fixed left-0 h-screen w-[250px]  ${isOpen ? "translate-x-[0px]" : "translate-x-[-260px]"}  transition bg-white top-0 shadow-r shadow-xl flex flex-col`}>
                    <div className='flex flex-col'>
                        <div className='my-5'>
                            <Logo />
                        </div>

                        <div className='flex flex-col'>

                            {link.map((link, index) => {
                                return <Link onClick={() => { setSidebar(!isOpen) }} key={index} href={link.path} className={`${(link.path == pathname) ? "bg-[#2c1f63] text-white" : ""} p-3 hover:bg-gray-200 text-sm text-gray-600 hover:text-[#2c1f63] font-medium capitalize`}>{link.linkname}</Link>
                            })}
                        </div>


                        <div className='absolute bottom-8 left-6'>
                            <Link href='/register' className=' md:hidden lg:block md:text-xs border text-[10px]  border-2 border-[#2c1f63]  bg-[#2c1f63] py-3 px-5 text-white rounded-lg' >Open Demat</Link>
                            <Link href='/login' className='ms-2 border border-2 border text-[10px] md:text-xs py-3 px-5 font-bold rounded-lg' >Login</Link>
                        </div>

                    </div>
                </div>


            </ContainerFull>
        </>
    )
}

export default Layout