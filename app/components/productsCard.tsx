"use client"

import Image from "next/image"
import { useRouter } from "next/router"

interface Cards{
    image : any,
    title : string,
    stitle : string,
    link : string
}

export default function ProductsCard({props}:any){
    const router = useRouter()
    return(
        <div className="bg-[#5cb207] opacity-75 rounded-sm border-1 border-[#5cb207]">
            <Image src={props.image} alt="product"/>
            <h3>{props.title}</h3>
            <p>{props.stitle}</p>
            <button className="cursor-pointer border-1 border[#2b4323] rounded-md text-wite" onClick={()=> router.push(`${props.link}`)}></button>
        </div>
    )
}