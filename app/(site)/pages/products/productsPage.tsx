"use client"

import Image from "next/image";
import { useState } from "react";

interface ProductsType {
    id: number,
    productName: string,
    image: string,
    brand?: string | null,
    application?: string | null,
    details?: string | null,
    price: number,
    categoryId: number,
    createdAt: any
}


export default function ProductsPage({ productsData }: { productsData: ProductsType[] }) {
    const [search, setsearch] = useState("")

    const searchData = productsData.filter((item: { productName: string }) => {
        const arrayName = item.productName.split("")
        return arrayName.includes(search)
    })
    return (
        <>


            <section className="flex ">
                <p className="bg-[#30821b] text-white rounded-md ">فیلتر ها</p>
                <select className="border-1 text[#a1a6a4] border-[#232a2b] rounded-md" name="time" id="">
                    <option value="new">جدید ترین</option>
                    <option value="old">قدیمی ترین</option>
                </select>

                <select className="border-1 border-[#232a2b] text[#a1a6a4] rounded-md" name="brand" id="">
                    <option value="all"> همه برند ها</option>
                    <option value="old">جدید ترین</option>
                </select>
                <input onChange={(item) => setsearch(item.target.value)} className="border-1 text[#a1a6a4] border-[#232a2b] rounded-md" type="search" placeholder="جستجوی محصول..." />
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2">
                <div className="gird grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {search.trim() === "" ?
                        productsData.map((item: ProductsType) => (
                            <div className="rounded-lg overflow-hidden" key={item.id}>
                                <Image src={item.image} width={60} height={60} alt="product" />
                                <div>
                                    <p>{item.productName}</p>
                                    <p>{item.categoryId}</p>
                                    {item?.brand && <p><span className="text-[#778957]">برند : </span>{item.brand}</p>}
                                    {item?.application && <p>کاربرد : {item.application}</p>}
                                    <button className="rounded-lg text-[#5e9620] border-1 border-[#2d3e20] cursor-pointer">مشاهده جزئیات</button>
                                </div>
                            </div>))

                        :
                        searchData.map((item: ProductsType) => (
                            <div className="rounded-lg overflow-hidden" key={item.id}>
                                <Image src={item.image} width={60} height={60} alt="product" />
                                <div>
                                    <p>{item.productName}</p>
                                    <p>{item.categoryId}</p>
                                    {item?.brand && <p><span className="text-[#778957]">برند : </span>{item.brand}</p>}
                                    {item?.application && <p>کاربرد : {item.application}</p>}
                                    <button className="rounded-lg text-[#5e9620] border-1 border-[#2d3e20] cursor-pointer">مشاهده جزئیات</button>
                                </div>
                            </div>))
                    }
                </div>
            </section>

        </>
    )
}