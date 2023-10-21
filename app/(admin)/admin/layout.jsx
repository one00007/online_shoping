'use client'
import React, { createContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Container from '../../layouts/Container'
import ContainerFull from '../../layouts/ContainerFull'
import Link from 'next/link'
import ProfileCircle from '@/public/icons/profile-circle.svg'
import SearchIcon from '@/public/icons/search-normal-1.svg'
import Menu from '@/public/icons/menu.svg'
import Logout from '@/public/icons/logout-1.svg'
import Setting from '@/public/icons/setting-2.svg'
import ProfileImage from '../../components/ProfileImage'
import UserList from '../../components/UserList'
import Divider from '../../components/Divider'
import AdminSidebar from '@/app/components/AdminSidebar'
import axios from 'axios'
import People from '@/public/icons/people.svg'
import Trade from '@/public/icons/trend-up.svg'
import { signOut } from "next-auth/react"
import Grid from '@/public/icons/graph.svg'
import User from '@/public/icons/user.svg'


export const Admincontext = createContext()


function Layout({ children }) {

    const [links, setLinks] = useState([
        { page: "Dashboard", href: "/admin", icon: Grid },
        { page: "Clients", href: "/admin/clients", icon: User },
        { page: "Offers", href: "/admin/offers", icon: User },
        { page: "withdrawal", href: "/admin/withdrawal", icon: User },
    ])



    const newDate = new Date()
    const date = `${newDate.getDate()}-${(newDate.getMonth().toString().length > 2) ? newDate.getMonth() : `0${newDate.getMonth()}`}-${newDate.getFullYear()}`

    const pathname = usePathname()

    const [isSidebar, setSidebar] = useState(false)
    const [isSearch, setSearch] = useState(false)
    const [users, setUsers] = useState()


    const [analytics, setAnalytics] = useState([])
    const [withdrawalReq, setRequests] = useState()


    useEffect(() => {


        const getUsers = async () => {
            await axios.get("/api/admin").then((response) => {
                setUsers(response.data.users)
                setRequests(response.data.withdrawal)


                setAnalytics(
                    [
                        { name: "Total Users", count: response?.data?.users?.length, icon: People },
                        { name: "Trades", count: "256", icon: Trade },
                        { name: "Profit & Loss", count: "256", icon: People },
                        { name: "Loss", count: "256", icon: People },
                    ]
                )


            })
        }

        getUsers()





    }, [pathname])


    return (
        <>
            <Admincontext.Provider value={{ users, date, analytics, withdrawalReq }} >

                <div className='h-screen flex overflow-hidden relative'>

                    <AdminSidebar />

                    <div className='w-full overflow-y-scroll '>
                        <ContainerFull className={`${(pathname == "/admidn") ? "hidden" : "py-2 bg-white/70 backdrop-blur-xl sticky top-0 z-10"}`}>
                            <Container className="p-2 flex" >
                                <div className='ms-auto flex'>

                                    <div className="rounded-full h-[40px] w-[40px] bg-gray-100 block  p-2 cursor-pointer me-2" onClick={() => { setSearch(!isSearch) }}>
                                        <SearchIcon className='h-full w-full' />
                                    </div>

                                    <div className='h-[40px] w-[40px] bg-gray-100 rounded-full cursor-pointer relative group/item'>

                                        <ProfileImage />

                                        <div className='absolute right-0 invisible group-hover/item:visible transition-all'>
                                            <div className='w-[180px] bg-white rounded-md shadow-xl p-1 mt-[40px]'>
                                                <Link href="/admin/profile" className='rounded text-xs flex p-1 py-2 hover:bg-gray-50'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <ProfileCircle className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Profile</span>
                                                </Link>
                                                <Link href="/admin/settings" className='rounded text-xs flex p-1 py-2 hover:bg-gray-50'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <Setting className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Settings</span>
                                                </Link>
                                                <button onClick={() => { signOut() }} className='rounded w-full text-xs flex p-1 py-2 hover:bg-red-500 hover:text-white'>
                                                    <div className='h-[20px] w-[20px] rounded ms-2'>
                                                        <Logout className='h-full w-full' />
                                                    </div>
                                                    <span className='ms-2 my-auto'>Logout</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ms-2 rounded-full h-[40px] w-[40px] bg-gray-100 block lg:hidden p-2 cursor-pointer " onClick={() => { setSidebar(!isSidebar) }}>
                                        <Menu className='h-full w-full' />
                                    </div>

                                </div>
                            </Container>
                        </ContainerFull>
                        {children}
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
                            {users?.map((user, index) => {

                                if (user.on == date) {
                                    return <UserList key={index} email={user.email} _id={user._id} firstName={user.firstName} />
                                }

                            })}

                        </div>
                    </div>


                    <div className={`mobile-navigation absolute top-[50%] translate-x-[-50%] ${isSidebar ? "flex flex-col z-30" : "hidden"} lg:hidden translate-y-[-50%] left-[50%] p-5 backdrop-blur-lg border border-white border-2 bg-gray-200 shadow-xl h-[90%] w-[90%] rounded-lg`}>
                        {links.map((link, index) => {
                            return <Link key={index} className='p-4 bg-white mb-2 hover:bg-black cursor-pointer hover:text-white rounded-md' onClick={() => { setSidebar(!isSidebar) }} href={link.href}>{link.page}</Link>

                        })}
                    </div>
                    <div className={`mobile-navigation absolute top-[50%] translate-x-[-50%] ${isSearch ? "flex z-30" : "hidden"}  translate-y-[-50%] left-[50%] p-5 border bg-white shadow-2xl  h-[80%] w-[80%] lg:h-[70%] lg:w-[50%] rounded-lg`}>

                    </div>

                </div>

            </Admincontext.Provider >

        </>
    )
}

export default Layout