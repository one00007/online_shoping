import React from 'react'
import Layer from '@/public/icons/layer.svg'
import DasbhoardLinks from './DasbhoardLinks'
import { useState } from 'react'
import Media from '@/public/icons/folder.svg'
import Grid from '@/public/icons/graph.svg'
import User from '@/public/icons/user.svg'
import Link from 'next/link'
import Setting from '@/public/icons/setting-2.svg'


function AdminSidebar() {

    const [links, setLinks] = useState([
        { page: "Dashboard", href: "/admin", icon: Grid },
        { page: "Clients", href: "/admin/clients", icon: User },
        { page: "Offers", href: "/admin/offers", icon: User },
        { page: "Withdrawal", href: "/admin/withdrawal", icon: User },

    ])

    return (
        <div className='w-[195px] text-black border-r shrink-0 lg:flex flex-col hidden'>

            <div className='p-3 flex items-center text-[#2b2061] my-4'>
                <div className="logo h-[25px] w-[25px] me-2">
                    <Layer />
                </div>
                <h1 className='font-bold'>SYSTEM</h1>
            </div>

            <div className='p-3 mt-4'>
                <ul>
                    {links.map((link, index) => {
                        return <DasbhoardLinks active={"#000"} key={index} page={link.page} link={link.href} Icon={link.icon} />
                    })}

                </ul>

            </div>

            <div className="p-3 mt-auto">

                <div className='p-3 py-5 bg-gradient-to-t from-white to-gray-100 rounded-xl flex flex-col'>
                    <h1 className='text-sm font-bold text-center mb-4 '>Upgrade to Pro</h1>
                    <p className='text-xs text-center font-medium text-gray-500 mb-4'>Get 1 Month Free and unlock</p>
                    <Link href="/" className='text-xs text-white mx-auto py-2 px-4 bg-[#2b2061] rounded-full'>Upgrade</Link>
                </div>

            </div>

        </div>
    )
}

export default AdminSidebar