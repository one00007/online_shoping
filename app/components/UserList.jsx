import React from 'react'
import Link from 'next/link'
import ProfileImage from './ProfileImage'

function UserList({ firstName, email, _id }) {
    return (
        <div className='p-1 flex mb-2'>

            <div>
                <div className='profile-image h-[45px] w-[45px] bg-gray-50 rounded-full relative'>
                    <ProfileImage />
                </div>
            </div>

            <div className='ms-3'>
                <h1 className='text-xs font-bold mt-1'>{firstName}</h1>
                <p className='text-xs text-gray-400'>{email.slice(0, email.indexOf("@"))}</p>
            </div>

            <div className='ms-auto my-auto'>
                <Link href={`/admin/profile/${_id}`} className='hover:bg-blue-500 text-blue-700 bg-blue-100 text-xs hover:text-white px-5 rounded-full p-1'>Profile</Link>
            </div>

        </div>
    )
}

export default UserList