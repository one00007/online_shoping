import React from 'react'

function Divider({name}) {
    return (
        <div className='mt-5 relative border-b' >
            <span className='absolute left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white px-3 text-sm'>{name}</span>
        </div>
    )
}

export default Divider