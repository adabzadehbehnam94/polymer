"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

interface Cards{
    image : any,
    title : string,
    stitle : string,
    link : string
}

export default function ProductsCard(props:Cards ){
    const router = useRouter()
    return(
        <div className="flex  gap-2 flex-col text-center justify-center bg-[#141b1a] text-white rounded-lg border-1 border-[#252b2a]">
            <Image className="mx-auto" src={props.image} width={55} height={55} alt="product"/>
            <h3 className="text-sm">{props.title}</h3>
            <p className="px-2 text-xs text-[#87898f]">{props.stitle}</p>
            <button className=" mt-1 mb-2 cursor-pointer bg-[#151c1b] mx-auto text-xs w-30 py-2 text-[#e0e5e3] border-1 border-[#2d4220] rounded-md text-wite transition duration-500 hover:bg-[#3b9821] hover:border-[#3b9821] hover:text-white " onClick={()=> router.push(`${props.link}`)}>مشاهده</button>
        </div>
    )
}