"use client"

import Image from "next/image";
import { VscSettings } from "react-icons/vsc";
import { CgSearch } from "react-icons/cg";
import { useProductFilters } from "@/app/components/useProductFilters";


interface ProductsType {
    id: number,
    productName: string,
    image: string,
    brand?: string | null,
    application?: string | null,
    details?: string | null,
    price: number,
    categoryId: number,
    createdAt: any,
    category? : {name : string}
}

interface CategoryType {
    id : number,
    name : string
}


export default function ProductsPage({ productsData , categoryData }: { productsData: ProductsType[] , categoryData :  CategoryType[]}) {
    
    const {updateFilter , updatesearch} = useProductFilters()
    
    return (
        <>


            <section className="flex justify-between container mx-auto py-5 ">
                <div className="grid grid-cols-3 gap-3">
                    <p className="bg-[#30821b] text-white rounded-md flex gap-1 px-13 py-1 text-xs items-center "><VscSettings size={15} color="white" /> فیلتر ها </p>
                    <select onChange={Item => updateFilter("sort" , Item.target.value)} className="border-1  border-[#232a2b] bg-[#151c1e] text-[#969b99] rounded-md text-xs px-10 py-1 cursor-pointer" name="time" id="">
                        <option className="text-red" value="desc">جدید ترین</option>
                        <option value="asc">قدیمی ترین</option>
                    </select>

                    <select 
                    onChange={Item => updateFilter("category" , Item.target.value)}
                    className="border-1 border-[#232a2b] bg-[#151c1e] text-[#969b99] rounded-md text-xs px-10 py-1 cursor-pointer" name="brand" id="">
                        <option value=""> همه دسته بندی ها</option>
                        {categoryData.map(item =>(
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-3 border-1 text-[#a1a6a4] border-[#232a2b] rounded-md text-xs bg-[#151c1e] w-60 px-2 py-2">
                    <CgSearch size={18} color="#969b99" />
                    <input onChange={Item => updatesearch(Item.target.value)}
                        type="search"
                        placeholder="جستجوی محصول..."
                        name="search"

                    />
                </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
                <div className="grid col-span-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {
                        productsData.map((item: ProductsType) => (
                            <div className="rounded-lg overflow-hidden bg-[#121919] flex flex-col  gap-3" key={item.id}>
                                <Image src={item.image} width={300} height={200} alt="product"  className="w-[100%] h-60"/>
                                <div className="flex flex-col gap-3 px-5 pb-5">
                                    <p className="text-[#dde1de] text-sm">{item.productName}</p>
                                    <p className="text-[#dde1de] text-sm">{item.category?.name}</p>
                                    {item?.brand && <p className="text-[#909292] text-xs"><span className="text-[#778957]">برند : </span>{item.brand}</p>}
                                    {item?.application && <p className="text-[#909292] text-xs">کاربرد : {item.application}</p>}
                                    <button className="rounded-lg text-[#5e9620] border-1 border-[#2d3e20] cursor-pointer text-sm px-2 py-1">مشاهده جزئیات</button>
                                </div>
                            </div>))
                    }
                </div>
                <div>
                    section 2
                </div>
            </section>

        </>
    )
}