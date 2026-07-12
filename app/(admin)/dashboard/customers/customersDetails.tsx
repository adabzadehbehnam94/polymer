"use client"
import Link from "next/link"
import { useState } from "react"
import localFont from "next/font/local"

interface Customresdata {
    customersData: {
        id: number,
        name: string,
        mobile? : string | null,
        address? : string | null
        
    }[]
}

const faNumber = localFont({
    src : "../../../../public/fonts/IRANSansWeb_FaNum.woff2"
})

export default function CustomersDetails({ customersData }: Customresdata) {

    const [search, setsearch] = useState("")

    const filter = customersData?.filter((item: { name: string }) => {
        const word = item.name.split('')
        const word2 = word[0] + word[1]
        return word[0] === search || word2 === search || item.name === search
    })

    return (
        <>
            <div className="grid sm:grid-cols-2">
                <div className="order-last sm:order-first mb-5">
                    <p className={`text-blue-500 ${faNumber.className}`}>تعداد مشتریان : {customersData.length}</p>
                    <br />
                    {search === "" && customersData.length === 0 && <p>مشتری وجود ندارد</p>}
                    {search === "" ?
                        customersData?.map((item: { id: number, name: string, address?: string | null , mobile? : string | null}) => (
                            <Link href={`/dashboard/customers/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.name}</div>
                                
                            </Link>
                        ))

                        :

                        filter?.map((item: { id: number, name: string, address?: string | null , mobile? : string | null}) => (
                            <Link href={`/dashboard/users/${item.id}`} className="flex flex-row mb-3 w-[fit-content]" key={item.id}>
                                <div className="ml-2">{item.name}</div>
                                
                            </Link>
                        ))
                    }

                </div>
                <div className="order-first sm:order-last mb-5">
                    <label>جست و جو : </label>
                    <input onChange={(item) => setsearch(item.target.value)} className="border-2 border-gray-300 px-2 py-1 rounded-md" type="search" name="search" placeholder="نام کاربر" />
                </div>
            </div>
        </>
    )
}