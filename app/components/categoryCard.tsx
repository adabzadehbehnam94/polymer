"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export interface categoryType {
        id: number,
        name: string,
        application?: string | null,
        image?: string | null
}

export default function CategoryCard({ categoryData }:{categoryData : categoryType}) {
    const router = useRouter()
    return (
        <div className="flex  gap-2 flex-col text-center justify-center bg-[#141b1a] text-white rounded-lg border-1 border-[#252b2a]">
            {categoryData?.image && <Image className="mx-auto" src={categoryData.image} width={55} height={55} alt="product" />}
            <h3 className="text-sm">{categoryData.name}</h3>
            {categoryData?.application && <p className="px-2 text-xs text-[#87898f]">{categoryData.application}</p>}
            <button className=" mt-1 mb-2 cursor-pointer bg-[#151c1b] mx-auto text-xs w-30 py-2 text-[#e0e5e3] border-1 border-[#2d4220] rounded-md text-wite transition duration-500 hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white " onClick={() => router.push(`pages/products?category=${categoryData.id}`)}>مشاهده</button>
        </div>
    )
}