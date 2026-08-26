import { prisma } from "@/lib/prisma"
import Image from "next/image"

interface ParamsType{
    params:Promise<{id : number}>
}


export default async function ProductPage({params} : ParamsType){
    const {id} = await params
    const product = await prisma.products.findUnique({where : {id : Number(id)} , include :{category : true}})
    return(
        <div className="container mx-auto px-5 my-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="md:col-span-1 lg:col-span-1">
                    <Image className="h-[auto] mx-auto rounded-lg" src={product?.image ?? ""} alt="image" width={200} height={70}/>
                </div>

                <div className="md:col-span-2 lg:col-span-3 flex flex-col gap-3">
                    <p><span className="text-[#87898f]">نام محصول :</span> {product?.productName}</p>
                    {product?.brand && <p> <span className="text-[#87898f]">برند :</span> {product.brand}</p>}
                    {product?.application && <p> <span className="text-[#87898f]">کاربرد :</span> {product.application}</p>}
                    {product?.details && <p> <span className="text-[#87898f]">جزئیات محصول :</span> {product.details}</p>}
                    <p> <span className="text-[#87898f]">دسته بندی :</span> {product?.category.name}</p>
                    <p> <span className="text-[#87898f]">قیمت :</span> {product?.price.toLocaleString("fa")} ریال</p>

                </div>
            </div>
        </div>
    )
}