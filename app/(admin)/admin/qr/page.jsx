import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <div>
            <Image src='/uploads/qr.jpg' alt='qr' height={100} width={100} />
        </div>
    )
}

export default page