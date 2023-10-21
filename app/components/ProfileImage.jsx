'use client'
import React from 'react'
import Image from 'next/image'

function ProfileImage() {
    return (
        <div className='w-full h-full absolute rounded-full overflow-hidden'>
            <Image priority alt='profile-image' src='/images/avatar/man.png' className='h-full w-full' height={50} width={50} />
        </div>
    )
}

export default ProfileImage