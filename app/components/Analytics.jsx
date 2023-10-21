'use client'
import React from 'react'

function Analytics({ analytic, count, Icon }) {
    return (
        <div className='py-2 flex'>
            <div className='me-3 h-[50px] w-[50px] p-3 flex rounded-full shrink-0 bg-gray-100 bg-[#f3ecfc]'>
                <Icon className="h-full w-full m-auto text-[#2b2061]" />
            </div>
            <div>
                <h1 className='text-sm text-gray-500'>{analytic}</h1>
                <h1 className='font-bold'>{count}</h1>
            </div>
        </div>
    )
}

export default Analytics