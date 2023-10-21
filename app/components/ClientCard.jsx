import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function ClientCard({ _id, email, name, status }) {
    return (
        <div className='border p-2 py-6 rounded-md'>

            <div>
                <div className="user-profile-image mx-auto bg-gray-50 h-[70px] w-[70px] border border-[#2b2061] border-2 rounded-full relative">
                    <div className='w-full h-full absolute rounded-full overflow-hidden'>
                        <Image alt='profile-image' src='/images/avatar/man.png' className='h-full w-full' height={50} width={50} />
                    </div>

                    <div className={`absolute h-[19px] w-[19px] rounded-full border border-2 border-white ${status ? "bg-green-500" : "bg-red-500"} right-0 bottom-0`}>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <h1 className='text-sm text-center font-medium'>{name}</h1>
                <p className='text-gray-400 text-xs text-center'>{email.slice(0, email.indexOf("@"))}</p>
            </div>
            <div className='flex md:flex-row flex-col text-center justify-center'>
                <Link href={`profile/${_id}`} className='text-xs px-5 rounded-full border text-[#2b2061] py-1.5 mb-1 md:mb-0' >Profile</Link>
                <Link href={`clients/${_id}`} className='text-xs px-5 rounded-full bg-[#2b2061] hover:bg-[#2b2061] text-white py-1.5 sm:ms-0 md:ms-2 ' >Action </Link>
            </div>

        </div>
    )
}

export default ClientCard