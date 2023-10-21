'use client'
import React from 'react'

function Transaction({ transaction }) {

    const indianRupees = Intl.NumberFormat()

    return (
        <>
            <tr >
                <td className='capitalize'><h1 className=' mt-2'>{transaction?.name}</h1></td>
                <td>Withdrawal Request</td>
                <td>&#8377; {indianRupees.format(transaction?.amount)}</td>
                <td className={`text-xs inline px-3 p-2  rounded-full font-bold uppercase ${(transaction?.status == "failure") ? "bg-red-100 text-red-600" : ""} ${(transaction?.status == "success") ? "bg-green-100 text-green-600" : ""} ${(transaction?.status == "pending") ? "bg-red-100 text-red-600" : ""}`} >{transaction?.status}</td>
                <td>{transaction?.time}</td>
                <td>{transaction?.date}</td>
                <td>accept</td>
            </tr >
        </>
    )
}

export default Transaction