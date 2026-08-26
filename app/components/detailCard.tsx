"use client"

import Image from "next/image"
import { describe } from "node:test"

interface DetailType {

    title: string,
    image: any,
    description: string
}


export default function DetailCrad({ image, title, description }: DetailType) {
    return (
        <div className="flex items-center gap-5 mb-5">
            <div>
                <div className="w-[fit-content] rounded-[50%] bg-[#152d12] px-3 py-3"><Image src={image} alt="image" width={20} height={20} /></div>
            </div>
            <div className="text-[#b4b6b2] text-sm">
                <h4 className="mb-2">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}