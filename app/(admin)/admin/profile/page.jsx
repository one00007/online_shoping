import Container from '@/app/layouts/Container'
import React from 'react'
import Link from 'next/link'

function Page() {
    return (
        <Container className='p-2'>
            <h1 className='text-lg font-bold'>Admin Profile</h1>
            <div className='mt-4 grid gap-2 grid-cols-3'>

                <div className="p-2 border">
                    <Link href='Personal' className='p-2 text-white bg-gray-800 w-full rounded inline-flex mb-2'>Personal</Link>
                    <Link href='Personal' className='p-2 text-white bg-gray-800 w-full rounded inline-flex mb-2'>Personal</Link>
                    <Link href='Personal' className='p-2 text-white bg-gray-800 w-full rounded inline-flex mb-2'>Personal</Link>
                </div>
                <div className="p-2 border col-span-2"></div>

            </div>
        </Container>
    )
}

export default Page