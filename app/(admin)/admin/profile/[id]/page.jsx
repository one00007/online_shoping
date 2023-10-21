'use client'
import Container from '@/app/layouts/Container'
import React, { useState } from 'react'
import ProfileImage from '@/app/components/ProfileImage'
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function Page({ params }) {

    const router = useRouter()
    const [user, setUser] = useState()
    const [profile, setProfile] = useState()


    useEffect(() => {


        const getUserDetails = async () => {
            await axios.get(`/api/admin/clients/${params.id}`).then((response) => {
                setUser(response.data.user)
                setProfile(response.data.profile)

            })
        }

        getUserDetails()

    }, [])


    const deleteAccount = async () => {
        await axios.delete(`/api/admin/clients/delete/${params.id}`).then((response) => {
            if (response?.status) {
                router.replace('/admin/clients')
            }
        })
    }

    const accountStatus = async () => {
        await axios.patch(`/api/admin/clients/hold/${params.id}`).then((response) => {
            setUser(response.data.user)
        })
    }

    return (
        <Container className="p-2">
            <h1 className='text-lg font-bold'>Client Profile</h1>

            <div className='grid gap-2 xl:grid-cols-3 grid-rows-[240px_500px]'>

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
                        <button className='text-xs px-5 rounded-full bg-red-500 hover:bg-red-600 border border-2 border-red-500 text-[#fff] py-1.5 font-bold ' onClick={deleteAccount} >Delete Account</button>
                        <button className='text-xs px-5 rounded-full bg-[#fff] border border-2 border-white text-[#2d1e65] py-1.5 ms-2 font-bold hover:bg-gray-50' onClick={accountStatus} >{user?.status ? "Deactive" : "Active"}</button>
                        <Link href={`/admin/clients/${user?._id}`} className='text-xs px-5 rounded-full bg-[#fff] border border-2 border-white text-[#2d1e65] py-1.5 ms-2 font-bold hover:bg-gray-50' >Activity</Link>
                    </div>
                </div>

                <div className='xl:col-span-2 xl:row-span-2 rounded-lg  overflow-y-scroll'>

                    <div className="p-2">
                        <span className='text-sm p-2 bg-[#2e1d67] rounded text-white'>Personal Details</span>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Name</span>
                            <h1 className='font-bold capitalize'>{profile?.name}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Password</span>
                            <h1 className='font-bold capitalize'>{user?.password}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Father / Husband Name</span>
                            <h1 className='font-bold capitalize'>{profile?.fathername}</h1>
                        </div>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Date Of Birth</span>
                            <h1 className='font-bold capitalize'>{profile?.dob}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Gender</span>
                            <h1 className='font-bold capitalize'>{profile?.gender}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Address</span>
                            <h1 className='font-bold capitalize'>{profile?.address}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >State</span>
                            <h1 className='font-bold capitalize'>{profile?.state}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >City</span>
                            <h1 className='font-bold capitalize'>{profile?.city}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Aadhaar Number</span>
                            <h1 className='font-bold capitalize'>{profile?.aadhaar}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Pan Number</span>
                            <h1 className='font-bold capitalize'>{profile?.pan}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Job</span>
                            <h1 className='font-bold capitalize'>{profile?.jobType}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Annual Salary</span>
                            <h1 className='font-bold capitalize'>{profile?.salary}</h1>
                        </div>


                    </div>
                    <div className="p-2">
                        <span className='text-sm p-2 bg-[#2e1d67] rounded text-white'>Bank Details</span>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Bank Name</span>
                            <h1 className='font-bold capitalize'>{profile?.bankName}</h1>
                        </div>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Branch Name</span>
                            <h1 className='font-bold capitalize'>{profile?.branchName}</h1>
                        </div>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Account No</span>
                            <h1 className='font-bold capitalize'>{profile?.accountNo}</h1>
                        </div>

                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >IFSC Code</span>
                            <h1 className='font-bold capitalize'>{profile?.ifscCode}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
                            <span className='mb-2' >Nominee</span>
                            <h1 className='font-bold capitalize'>{profile?.nominee}</h1>
                        </div>
                        <div className='border rounded-lg mt-3 p-2'>
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