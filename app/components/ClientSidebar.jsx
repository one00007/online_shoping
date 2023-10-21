import React from 'react'
import Layer from '@/public/icons/layer.svg'
import DasbhoardLinks from './DasbhoardLinks'
import { useState } from 'react'
import Media from '@/public/icons/folder.svg'
import User from '@/public/icons/user.svg'
import Link from 'next/link'
import Setting from '@/public/icons/setting-2.svg'
import Image from 'next/image'

function ClientSidebar({ links }) {

    // const [links, setLinks] = useState([
    //     { page: "Home", href: "/user", icon: User },
    //     { page: "Profile", href: "/user/profile", icon: Setting },
    //     { page: "Trades", href: "/user/trades", icon: User },
    //     { page: "Add Fund", href: "/user/funds", icon: Media },
    //     { page: "Withdrawal Request", href: "/user/withdrawal", icon: Setting },
    // ])

    return (
        <div className='w-[195px] text-white bg-black border-r shrink-0 lg:flex flex-col hidden'>

            <div className='flex items-center text-[white] rounded-md mx-auto my-3'>
                <Link href='/' className='block p-1 mb-5 h-[50px] w-[170px]'>
                    <Image alt='image' height={1000} width={1000} className='object-cover w-full h-full' src={'/images/stock/logo.png'} />
                </Link>
            </div>

            <div className='p-3 mt-1'>
                <ul>
                    {links.slice(0,5).map((link, index) => {
                        return <DasbhoardLinks active={"#fff"} key={index} page={link.page} link={link.href} Icon={link.icon} />
                    })}

                </ul>

            </div>

            <div className="p-3 mt-auto">

                <div className='p-3 py-5 bg-[#262626]  rounded-xl flex flex-col'>
                    <h1 className='text-sm font-bold text-center mb-4 '>Upgrade to Pro</h1>
                    <p className='text-xs text-center font-medium text-gray-400 mb-4'>Get 1 Month Free and unlock</p>
                    <Link href="/" className='text-xs text-white mx-auto py-2 px-4 bg-[#2b2061] rounded-full'>Upgrade</Link>
                </div>

            </div>

        </div>
    )
}

export default ClientSidebar