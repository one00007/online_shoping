'use client'
import Container from '@/app/layouts/Container'
import React, { useContext, useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import Link from 'next/link'
import { useEffect } from 'react'
import { UserContext } from '../layout'
import axios from 'axios'

function Page() {


  const [profile, setProfile] = useState()

  const { user } = useContext(UserContext)


  useEffect(() => {

    const getUserDetails = async () => {
      await axios.get(`/api/user/profile/`).then((response) => {
        setProfile(response.data.profile)

      })
    }

    getUserDetails()

  }, [])


  return (
    <Container className="p-2">
      <h1 className='text-lg font-bold'>PROFILE</h1>


      <div className='grid mt-4 gap-2 xl:grid-cols-3 grid-rows-[240px_500px]'>

        <div className='p-2 py-5 bg-[#2e1d67] rounded-lg'>
          <div>
            <div className="user-profile-image mx-auto  h-[80px] w-[80px] border bg-gray-50 border-white border-4 rounded-full relative ">
              <ProfileImage />
              <div className={`absolute h-[23px] w-[23px] rounded-full border border-4 border-white ${user?.status ? "bg-green-500" : "bg-red-500"} right-0 bottom-0`}>
              </div>
            </div>
          </div>
          <div className='my-5'>
            <h1 className='text-sm text-center font-medium text-white'>{user?.name}</h1>
            <p className='text-gray-400 text-xs text-center'>{user?.email}</p>
          </div>
          <div className='flex justify-center'>
            <Link href={`/admin/clients/${user?._id}`} className='text-xs px-5 rounded-full bg-[#fff] border border-2 border-white text-[#2d1e65] py-1.5 ms-2 font-bold hover:bg-gray-50' >Activity</Link>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-2 rounded-lg  overflow-y-scroll'>

          <div className="p-2">
            <span className='text-sm p-2 bg-[#2e1d67] rounded text-white uppercase'>Personal Details</span>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Name</span>
              <h1 className='font-bold capitalize'>{profile?.name}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Father / Husband Name</span>
              <h1 className='font-bold capitalize'>{profile?.fathername}</h1>
            </div>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Date Of Birth</span>
              <h1 className='font-bold capitalize'>{profile?.dob}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Gender</span>
              <h1 className='font-bold capitalize'>{profile?.gender}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Address</span>
              <h1 className='font-bold capitalize'>{profile?.address}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >State</span>
              <h1 className='font-bold capitalize'>{profile?.state}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >City</span>
              <h1 className='font-bold capitalize'>{profile?.city}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Aadhaar Number</span>
              <h1 className='font-bold capitalize'>{profile?.aadhaar}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Pan</span>
              <h1 className='font-bold capitalize'>{profile?.pan}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Department</span>
              <h1 className='font-bold capitalize'>{profile?.jobType}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Annual Salary</span>
              <h1 className='font-bold capitalize'>{profile?.salary}</h1>
            </div>


          </div>
          <div className="p-2">
            <span className='text-sm p-2 bg-[#2e1d67] rounded text-white'>Bank Details</span>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Bank Name</span>
              <h1 className='font-bold capitalize'>{profile?.bankName}</h1>
            </div>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Branch Name</span>
              <h1 className='font-bold capitalize'>{profile?.branchName}</h1>
            </div>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Account No</span>
              <h1 className='font-bold capitalize'>{profile?.accountNo}</h1>
            </div>

            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >IFSC Code</span>
              <h1 className='font-bold capitalize'>{profile?.ifscCode}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Nominee</span>
              <h1 className='font-bold capitalize'>{profile?.nominee}</h1>
            </div>
            <div className='border rounded-lg mt-3 p-5 bg-white'>
              <span className='mb-2' >Relation</span>
              <h1 className='font-bold capitalize'>{profile?.relation}</h1>
            </div>

          </div>


        </div>



      </div>
    </Container>
  )
}

export default Page