import Image from "next/image"

export interface servicesType {
        title: string,
        subtitle: string ,
        image: any,
}

export default function AboutUsBottomCard({title , subtitle , image} : servicesType){
     return (
            <div className="flex  gap-2 flex-col text-center justify-center  text-white  py-5 px-5 my-5 ">
                <Image className="mx-auto" src={image} width={55} height={55} alt="product" />
                <h3 className="text-sm">{title}</h3>
                <p className="px-2 text-xs text-[#87898f]">{subtitle}</p>
            </div>
        )
}