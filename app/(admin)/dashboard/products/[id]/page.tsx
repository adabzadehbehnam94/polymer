import { prisma } from "@/lib/prisma"
import Link from "next/link"
import RemoveButton from "../../../../components/removeButton"
import Image from "next/image"
import { productsType } from "../page"



export interface ParamsId {
    params: Promise<{
        id: string
    }>
}



export default async function Product({ params }: ParamsId) {

    const { id } = await params
    const productData :productsType | null = await prisma.products.findUnique({ where: { id: Number(id) }, include: { category: true } })

    if(!productData){
        return <p>محصول پیدا نشد </p>
    }

    

    return (
        <div className="flex flex-col lg:flex-row lg:gap-5 ">
            <Image className="rounded-md mx-auto lg:mx-5 mb-5 lg:mb-0" src={productData.image} alt={"productImage"} width={300} height={500} />
            <div>
                <p className="mb-5">نام کالا : {productData.productName}</p>
                {productData?.brand && <p className="mb-5"> برند : {productData.brand}</p>}
                {productData?.application && <p className="mb-5"> کاربرد : {productData.application}</p>}
                {productData?.details && <p className="mb-5"> شرح کالا : {productData.details}</p>}
                <p className="mb-5"> دسته بندی : {productData.category?.name}</p>
                <p className="mb-5"> قیمت : {productData.price.toLocaleString("fa-IR")} ریال</p>
                <div className="flex">
                    <RemoveButton id={Number(id)} />
                    <Link href={`/dashboard/products/${id}/editProduct`} className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700">ویرایش کالا</Link>
                </div>
            </div>
        </div>
    )
}