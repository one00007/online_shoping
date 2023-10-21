'use client'
import React, { createContext } from 'react'
import { usePathname } from 'next/navigation'
import ClientSidebar from '@/app/components/ClientSidebar'
import ContainerFull from '@/app/layouts/ContainerFull'
import ProfileImage from '@/app/components/ProfileImage'
import Container from '@/app/layouts/Container'
import Link from 'next/link'
import ProfileCircle from '@/public/icons/profile-circle.svg'
import SearchIcon from '@/public/icons/search-normal-1.svg'
import Logout from '@/public/icons/logout-1.svg'
import Setting from '@/public/icons/setting-2.svg'
import Home from '@/public/icons/home.svg'
import Menu from '@/public/icons/menu.svg'
import Divider from '@/app/components/Divider'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { useEffect } from 'react'
import axios from 'axios'
import Trade from '@/public/icons/trend-up.svg'
import Profile from '@/public/icons/profile-circle.svg'
import Money from '@/public/icons/money.svg'
import Gift from '@/public/icons/gift.svg'
import Image from 'next/image'
import Form from '@/public/icons/form.svg'

export const UserContext = createContext()

function Layout({ children }) {
    const pathname = usePathname()
    const [isSidebar, setSidebar] = useState(false)
    const [isSearch, setSearch] = useState(false)
    const [balance, setBalance] = useState()
    const [result, setResult] = useState({ profit: 0, loss: 0 })


    const [user, setUser] = useState()
    const [trades, setTrades] = useState([])

    useEffect(() => {

        const getUserDetails = async () => {
            await axios.get(`/api/user`).then((response) => {
                setUser(response.data.user)
                setBalance(response.data.successAmount)
                setTrades(response.data.usertrades)
                setResult({ profit: response.data.totalProfit, loss: response.data.totalLoss })

            })
        }
        getUserDetails()
    }, [])


    const [links, setLinks] = useState([
        { page: "Home", href: "/user", icon: Home },
        { page: "Profile", href: "/user/profile", icon: Profile },
        { page: "Trades", href: "/user/trades", icon: Trade },
        { page: "Add Fund", href: "/user/funds", icon: Money },
        { page: "Withdrawal", href: "/user/withdrawal", icon: Profile },
        { page: "Offers", href: "/user/offers", icon: Gift },
    ])

    return (
        <>
            <UserContext.Provider value={{ user, balance, trades, result }}>

                <div className='h-screen flex overflow-hidden relative bg-gray-100'>

                    <ClientSidebar links={links} />

                    <div className='w-full overflow-y-scroll '>
                        <ContainerFull className={`${(pathname == "/admidn") ? "hidden" : "py-2 bg-white/70 backdrop-blur-xl sticky top-0 z-10"}`}>
                            <Container className="p-2 flex" >
                                <div className='flex items-center text-[white] rounded-md me-auto lg:hidden'>
                                    <Link href='/' className='block p-1 h-[40px] w-[140px]'>
                                        <Image alt='image' height={1000} width={1000} className='object-cover w-full h-full' src={'/images/stock/logo.png'} />
                                    </Link>
                                </div>
                                <div className='ms-auto flex'>




                                    <div className="rounded-full h-[40px] w-[40px] bg-gray-100 block  p-2 cursor-pointer me-2" onClick={() => { setSearch(!isSearch) }}>
                                        <SearchIcon className='h-full w-full' />
                                    </div>

                                    <div className='h-[40px] w-[40px] bg-gray-100 rounded-full cursor-pointer relative group/item'>

                                        <ProfileImage />

                                        <div className='absolute right-0 invisible group-hover/item:visible transition-all'>
                                            <div className='w-[180px] bg-white rounded-md shadow-xl p-1 mt-[40px]'>
                                                <Link href="/user/profile" className='rounded text-xs flex p-1 py-2 hover:bg-gray-50'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <ProfileCircle className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Profile</span>
                                                </Link>
                                                <Link href="/user/offers" className='rounded text-xs flex p-1 py-2 hover:bg-gray-50'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <Gift className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Offer</span>
                                                </Link>
                                                <Link href="/files/AuthorityForm.pdf" download={true} className='rounded text-xs flex p-1 py-2 hover:bg-gray-50'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <Form className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Authority Form</span>
                                                </Link>


                                                <button onClick={() => { signOut() }} className='w-full rounded text-xs flex p-1 py-2 hover:bg-red-500 hover:text-white'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <Logout className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="ms-2 rounded-full h-[40px] w-[40px] bg-gray-100 block lg:hidden p-2 cursor-pointer " onClick={() => { setSidebar(!isSidebar) }}>
                                        <Menu className='h-full w-full' />
                                    </div> */}

                                </div>
                            </Container>
                        </ContainerFull>
                        <div className='min-h-screen'>
                            {children}
                        </div>
                        <div className='user-navigation p-3 text-white lg:hidden bg-black  w-full grid gap-2 grid-cols-5'>

                            {links.slice(0, 5).map(({ page, href, icon }, index) => {

                                const Icon = icon

                                return <Link key={index} href={href} className={`flex flex-col  ${(pathname == href) ? "text-white font-medium" : "text-gray-400"}`}>
                                    <div className='h-[29px] w-[29px] mx-auto'>
                                        <Icon className='h-full w-full' />
                                    </div>
                                    <p className='text-center text-xs mt-2'>{page}</p>
                                </Link>

                            })}
                        </div>
                        <div className='user-navigation p-3 text-white lg:hidden bg-black fixed bottom-0 w-full grid gap-2 grid-cols-5'>

                            {links.slice(0, 5).map(({ page, href, icon }, index) => {

                                const Icon = icon

                                return <Link key={index} href={href} className={`flex flex-col  ${(pathname == href) ? "text-white font-medium" : "text-gray-400"}`}>
                                    <div className='h-[29px] w-[29px] mx-auto'>
                                        <Icon className='h-full w-full' />
                                    </div>
                                    <p className='text-center text-xs mt-2'>{page}</p>
                                </Link>

                            })}
                        </div>
                    </div>

                    <div className={`${(pathname === '/admin') ? "w-[320px] text-black  border-l shrink-0 xl:block hidden p-3" : "hidden"} `}>

                        <div className='user bg-gray-50 p-1 rounded-lg min-h-[200px] py-4 '>
                            <div>
                                <div className="user-profile-image mx-auto  h-[80px] w-[80px] border border-white border-4 rounded-full relative">

                                    <ProfileImage />

                                    <div className='absolute h-[23px] w-[23px] rounded-full border border-2 border-white bg-green-500 right-0 bottom-0'>
                                    </div>
                                </div>
                            </div>
                            <div className='my-3'>
                                <h1 className='text-sm text-center font-medium'>Margrate Norton</h1>
                                <p className='text-gray-400 text-xs text-center'>@meganarton</p>
                            </div>
                            <div className='flex'>
                                <Link href="/admin/updateprofile" className='text-xs px-5 rounded-full bg-[#2d1e65] text-white py-1.5 mx-auto ' >Profile</Link>
                            </div>
                        </div>

                        <Divider name='Activity' />

                        <h1 className=' text-sm my-4 font-bold'>New User</h1>
                        <div className='ms-2 max-h-[410px] overflow-hidden overflow-y-scroll'>

                        </div>
                    </div>



                    <div className={`mobile-navigation absolute top-[50%] translate-x-[-50%] ${isSidebar ? "flex z-30" : "hidden"} lg:hidden translate-y-[-50%] left-[50%] p-5 backdrop-blur-lg border border-white border-2 bg-white/50 shadow-xl h-[90%] w-[90%] rounded-lg`}>

                    </div>
                    <div className={`mobile-navigation absolute top-[50%] translate-x-[-50%] ${isSearch ? "flex z-30" : "hidden"}  translate-y-[-50%] left-[50%] p-5 border bg-white shadow-2xl  h-[80%] w-[80%] lg:h-[70%] lg:w-[50%] rounded-lg`}>

                    </div>

                </div>

            </UserContext.Provider>

        </>
    )
}

export default Layout