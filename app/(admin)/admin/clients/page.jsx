'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useEffect, useState } from 'react'
import ClientCard from '@/app/components/ClientCard'
import { Admincontext } from '../layout'

function Page({ params }) {

  const { users, date } = useContext(Admincontext)

  



  return (
    <Container className="p-2">
      <h1 className='text-lg font-bold'>Clients</h1>

      <div className='mt-4 grid gap-3 item-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>

        {users?.map((user, index) => {
          return <ClientCard _id={user._id} email={user.email} name={user.name} key={index} status={user.status} />

        })}


      </div>

    </Container>
  )
}

export default Page