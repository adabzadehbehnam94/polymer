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
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-7 items-center gap-5 mb-5 overflow-hidden">
            <div>
                <div className="xl:col-span-1 lg:col-span-1  sm:col-span-1 w-[fit-content] rounded-[50%] bg-[#152d12] px-3 py-3"><Image src={image} alt="image" width={20} height={20} /></div>
            </div>
            <div className="xl:col-span-4 lg:col-span-3 sm:col-span-6 text-[#b4b6b2] text-sm">
                <h4 className="mb-2">{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}