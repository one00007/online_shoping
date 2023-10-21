'use client'
import React, { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners';
import LeftArrow from '@/public/icons/arrow-left.svg'
import Close from '@/public/icons/close-circle.svg'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import axios from 'axios';
import { redirect } from 'next/navigation'
import Image from 'next/image';
import os from 'os'


function Page() {

  const { data: session, status } = useSession()



  const [error, setError] = useState()
  const [formcount, setCount] = useState(1)
  const [loading, setLoading] = useState(false)


  const city = [
    { state: "Madhya Pradesh", cities: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Rewa", "Sagar", "Satna", "Ratlam", "Hoshangabad", "Chhindwara", "Damoh", "Mandsaur", "Khandwa", "Neemuch", "Burhanpur", "Singrauli", "Dewas", "Shivpuri", "Vidisha",] },
    {
      state: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila", "Aalo", "Tezu", "Namsai", "Roing", "Daporijo", "Ziro", "Yingkiong", "Seppa", "Khonsa", "Basar", "Palin", "Hawai", "Changlang", "Bhalukpong", "Anini", "Dirang", "Jairampur", "Bomdila", "Along", "Tuting", "Koloriang", "Mechuka", "Dambuk", "Hayuliang", "Manmao", "Miao", "Bordumsa", "Nampong", "Pangin", "Rupa", "Taliha", "Tenga", "Vijaynagar",]
    },
    {
      state: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila", "Aalo", "Tezu", "Namsai", "Roing", "Daporijo", "Ziro", "Yingkiong", "Seppa", "Khonsa", "Basar", "Palin", "Hawai", "Changlang", "Bhalukpong", "Anini", "Dirang", "Jairampur", "Bomdila", "Along", "Tuting", "Koloriang", "Mechuka", "Dambuk", "Hayuliang", "Manmao", "Miao", "Bordumsa", "Nampong", "Pangin", "Rupa", "Taliha", "Tenga", "Vijaynagar",]
    },
    {
      state: "Bihar", cities: [
        "Patna",
        "Gaya",
        "Bhagalpur",
        "Muzaffarpur",
        "Darbhanga",
        "Purnia",
        "Ara",
        "Begusarai",
        "Katihar",
        "Chapra",
        "Munger",
        "Bihar Sharif",
        "Bettiah",
        "Sasaram",
        "Hajipur",
        "Dehri",
        "Siwan",
        "Motihari",
        "Nawada",
        "Bagaha",
        "Buxar",
        "Kishanganj",
        "Sitamarhi",
        "Jamalpur",
        "Jehanabad",
        "Aurangabad",
        "Lakhisarai",
        "Araria",
        "Arwal",
        "Sheikhpura",
        "Madhubani",
        "Supaul",
        "Bhabua",
        "Samastipur",
        "Gopalganj",
        "Saharsa",
        "Khagaria",
        "Madhepura",
        "Jamui",
        "Banka",
        "Bettiah",
        "Munger",
        "Bihar Sharif",
        "Danapur",
        "Rajgir",
        "Chhapra",
        "Motihari",
        "Bagaha",
        "Bhagwanpur",
        "Bodh Gaya",

      ]
    },
    {
      state: "Chhattisgarh", cities: [
        "Raipur",
        "Bilaspur",
        "Bhilai",
        "Durg",
        "Korba",
        "Raigarh",
        "Jagdalpur",
        "Ambikapur",
        "Rajnandgaon",
        "Chirmiri",
        "Kawardha",
        "Janjgir",
        "Dhamtari",
        "Mahasamund",
        "Kanker",
        "Bhatapara",
        "Baloda Bazar",
        "Baikunthpur",
        "Narayanpur",
        "Bemetara",
        "Mungeli",
        "Takhatpur",
        "Saraipali",
        "Manendragarh",
        "Pithora",
        "Khairagarh",
        "Champa",
        "Akaltara",
        "Sakti",
        "Gharghoda",
        "Pamgarh",
        "Ratanpur",
        "Simga",
        "Lormi",
        "Mahendragarh",
        "Samri",
        "Jashpur Nagar",
        "Kondagaon",
        "Chhuikhadan",
        "Dongargarh",

      ]
    },
    {
      state: "Goa", cities: [
        "Panaji",
        "Vasco da Gama",
        "Margao",
        "Mapusa",
        "Ponda",
        "Curchorem",
        "Sancoale",
        "Bicholim",
        "Quepem",
        "Sanguem",
        "Cuncolim",
        "Valpoi",
        "Cortalim",
        "Canacona",
        "Dharbandora",
        "Sattari",
        "Marcaim",
        "Mormugao",
        "Tivim",
        "Aldona",

      ]
    },
  ]


  const [states, setstate] = useState([])
  const [allCity, setCity] = useState([])








  const [personaldetails, setPersonalDetails] = useState({
    name: session?.user?.name,
    fathername: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    mobile: "",
    email: session?.user?.email,
    bankName: "",
    branchName: "",
    accountNo: "",
    ifscCode: "",
    nominee: "",
    relation: "",
    aadhaar: "",
    pan: "",
    companyName: "",
    jobType: "",
    post: "",
    salary: "",
  })

  const updateCity = async (state) => {


    if (state) {


      await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        "country": "india",
        "state": state
      }).then((response) => {

        setCity(response.data.data)
      })

    }
  }



  useEffect(() => {

    const getallstates = async () => {

      axios.get("https://countriesnow.space/api/v0.1/countries/states").then((response) => {

        setstate(response.data.data[99].states)

      })
    }

    getallstates()
  })


  const getdetails = () => {

    axios.get("/api/profileupdate").then((response) => {
      if (response) {
        setPersonalDetails(response.data.profiledetails)
      }
    })

  }

  useEffect(() => {

    if (session) {

    } else {
      redirect('/login')
    }
    getdetails()




  }, [])



  const inputHandler = (e) => {

    const { name, value } = e.target
    setPersonalDetails((pre) => {
      return { ...pre, [name]: value }
    })
    if (name == 'state') {
      updateCity(value)
    }


  }




  const submitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)


    await axios.patch('/api/profileupdate/', personaldetails).then((response) => {
      if (response) {
        setCount(formcount + 1)
        setLoading(false)
      }
    }).catch((error) => {
      setError({ isError: true, massage: "server errorr" })
    })

  }

  return (
    <div className='p-6 bg-white rounded-lg sm:m-auto w-[370px] sm:w-[500px] my-3 mx-auto z-20'>



      {error ?
        <div className={`mb-5 ${error.isError ? "bg-red-600" : "bg-green-600"}  p-3 rounded flex error-box capitalize shadow-md`}>
          <span className='text-white text-xs my-auto me-auto'>{error.massage}</span>
          <div className='h-[25px] w-[25px]'>
            <Close className="text-white h-full w-full cursor-pointer" onClick={() => { setError(null) }} />
          </div>
        </div>
        : ""
      }
      {(formcount == 3) ?
        ""
        :
        <h1 className='text-xl font-serif font-bold mb-5'>Complete Your Profile </h1>
      }

      <form onSubmit={submitHandler}>

        {(formcount == 1) ?

          <div>
            <p className='text-white bg-[#2c1f63] inline-block p-1 rounded-md px-2 mb-5 text-sm'>Personal Details </p>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Full Name</span>
                </div>
                <input required value={personaldetails.name} disabled onChange={inputHandler} name='name' type="text" className='p-2 border rounded-md' />
              </div>
            </div>
            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Father / Husband Name</span>
                </div>
                <input required value={personaldetails.fathername} onChange={inputHandler} name='fathername' type="text" className='p-2 border rounded-md' />
              </div>
            </div>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Date of Birth</span>
                </div>
                <input required='true' value={personaldetails.dob} onChange={inputHandler} name='dob' type="date" className='p-2 border rounded-md' />
              </div>
            </div>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Gender</span>
                </div>
                <select required value={personaldetails.gender} onChange={inputHandler} className='p-2 border rounded-md' name='gender'>
                  <option value="">select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="female">Transgender</option>
                  <option value="female">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-2">


              <div className='grid mb-4'>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >State</span>
                  </div>
                  <select required value={personaldetails.state} onChange={inputHandler} name="state" id="" className='w-full p-2 border rounded-md'>
                    <option value="">Select</option>

                    {states?.map((state, index) => {
                      return <option key={index} value={state.name}>{state.name}</option>
                    })}

                    {/* <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option> */}
                  </select>
                </div>
              </div>

              <div className='grid mb-4'>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >City</span>
                  </div>
                  <select value={personaldetails.city} onChange={inputHandler} name="city" id="" className='w-full p-2 border rounded-md' required>
                    <option value="">Select</option>
                    {/* {city.map((city) => {
                      if (city.state == personaldetails.state) {
                        return city.cities.map((citi, index) => {
                          return <option key={index} value={citi} >{citi}</option>
                        })
                      }
                    })} */}

                    {allCity.map((city) => {

                      return <option key={city} value={city}>{city}</option>

                    })}

                  </select>
                </div>
              </div>

            </div>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Residential Address</span>
                </div>
                <input required value={personaldetails.address} onChange={inputHandler} name='address' type="text" className='p-2 border rounded-md' />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-2">


              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Mobile</span>
                  </div>
                  <input required value={personaldetails.mobile} onChange={inputHandler} name='mobile' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Email Address</span>
                  </div>
                  <input required value={personaldetails.email} disabled onChange={inputHandler} name='email' type="email" className='w-full p-2 border rounded-md' />
                </div>
              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-2">


              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Aadhaar Number</span>
                  </div>
                  <input required value={personaldetails.aadhaar} onChange={inputHandler} name='aadhaar' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Pan Number</span>
                  </div>
                  <input required value={personaldetails.pan} onChange={inputHandler} name='pan' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

            </div>
            <div className="grid md:grid-cols-2 gap-2">


              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Profession</span>
                  </div>
                  <select name="jobType" id="" required className='w-full p-2 border rounded-md' onChange={inputHandler} value={personaldetails.jobType} >
                    <option value="">Select</option>
                    <option value="private secotor">Private Sector</option>
                    <option value="private secotor">House Wife</option>
                    <option value="government sector">Goverment Sector</option>
                    <option value="business">Business</option>
                    <option value="self employed">Self Employed</option>
                  </select>
                </div>
              </div>




              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Annual Salary</span>
                  </div>
                  <input required value={personaldetails.salary} onChange={inputHandler} name='salary' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

            </div>

          </div>

          : ""}
        {(formcount == 2) ?

          <div>
            <p className='text-white bg-[#2c1f63] inline-block p-1 rounded-md px-2 mb-5 text-sm'>Bank Details</p>
            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Bank Name</span>
                </div>
                <input required value={personaldetails.bankName} onChange={inputHandler} name='bankName' type="text" className='p-2 border rounded-md' />
              </div>
            </div>
            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Branch Name</span>
                </div>
                <input required value={personaldetails.branchName} onChange={inputHandler} name='branchName' type="text" className='p-2 border rounded-md' />
              </div>
            </div>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >Account No</span>
                </div>
                <input required value={personaldetails.accountNo} onChange={inputHandler} name='accountNo' type="text" className='p-2 border rounded-md' />
              </div>
            </div>

            <div className='grid mb-4 '>
              <div className='flex flex-col'>
                <div className="flex justify-between">
                  <span className='font-medium mb-2 text-gray-500' >IFSC Code</span>
                </div>
                <input required value={personaldetails.ifscCode} onChange={inputHandler} name='ifscCode' type="text" className='p-2 border rounded-md' />
              </div>
            </div>


            <div className="grid md:grid-cols-2 gap-2">


              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Nominee</span>
                  </div>
                  <input required value={personaldetails.nominee} onChange={inputHandler} name='nominee' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

              <div className='grid mb-4 '>
                <div className='flex flex-col'>
                  <div className="flex justify-between">
                    <span className='font-medium mb-2 text-gray-500' >Relation </span>
                  </div>
                  <input required value={personaldetails.relation} onChange={inputHandler} name='relation' type="text" className='w-full p-2 border rounded-md' />
                </div>
              </div>

            </div>

          </div>

          : ""}



        {(formcount == 3) ?
          <>
            <div className='flex flex-col'>
              <h1 className='text-center font-bold text-lg'>Your Application  is Under Process</h1>
              <p className='mb-2 text-center text-gray-400 text-xs' >Please wait for some time your documents are verifying and after completion you will recieve Client I&prime;d on your registered email address</p>
              <div className='h-[300px] w-[300px]  mx-auto'>

                <Image alt='under process' src='/images/stock/underprocess.jpg' className='h-full w-full' width={500} height={500} />
              </div>
            </div>
          </>
          :
          ""

        }

        <div className='flex'>

          {(formcount > 2) ?
            ""
            :
            <>
              <button className='w-full font-bold bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600'  >
                {loading ? <SyncLoader color="#fff" size={5} /> : "Next"}
              </button>

              {(formcount <= 1) ? "" : <button className='w-[47px] ms-1 font-bold bg-[#2c1f63] text-white p-2.5 rounded-full' onClick={() => { setCount(formcount - 1) }} >
                <LeftArrow className='h-full w-full  ' />
              </button>}
            </>
          }


        </div>

      </form>


      <div>
        <button className='w-full mt-2 font-bold bg-red-500 text-white p-2.5 rounded-full hover:bg-red-600' onClick={() => { signOut() }} >
          Logout
        </button>
      </div>


    </div >
  )
}

export default Page