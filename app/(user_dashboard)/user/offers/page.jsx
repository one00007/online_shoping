'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import Link from 'next/link'
import { useEffect } from 'react'
import { UserContext } from '../layout'
import axios from 'axios'

function Page() {

    return (
        <Container className="p-2">
            <h1 className='text-lg font-bold uppercase'>Offers</h1>

            <div className='p-4 bg-white min-h-[600px] mt-4 rounded-xl'>
                <span className='text-gray-400 text-md'>Currently No Offers Available</span>
            </div>

        </Container>
    )
}

export default Page