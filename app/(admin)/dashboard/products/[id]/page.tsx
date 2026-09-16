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
    const productData: productsType | null = await prisma.products.findUnique({ where: { id: Number(id) }, include: { category: true } })

    if (!productData) {
        return <p>محصول پیدا نشد </p>
    }

    const Price = Number(productData.price)

    return (
        <div className="flex flex-col lg:flex-row lg:gap-5  ">
            <Image className="rounded-md mx-auto lg:mx-5 mb-5 lg:mb-0 w-[auto] h-60" src={productData.image} alt={"productImage"} width={300} height={500} />
            <div>
                <p className="mb-5"><span className="text-blue-500">نام کالا :</span> {productData.productName}</p>
                {productData?.brand && <p className="mb-5"><span className="text-blue-500">برند : </span>{productData.brand}</p>}
                {productData?.application && <p className="mb-5"><span className="text-blue-500">کاربرد : </span>{productData.application}</p>}
                {productData?.details && <p className="mb-5 flex flex-col gap-3"><span className="text-blue-500 ">شرح کالا : </span>{productData.details}</p>}
                <p className="mb-5"><span className="text-blue-500">دسته بندی : </span>{productData.category?.name}</p>
                <p className="mb-5"><span className="text-blue-500">قیمت : </span>{Price.toLocaleString("fa-IR")} ریال</p>
                {productData?.video &&
                    <>
                        <p className="text-blue-500 mb-3 rounded-lg">ویدئو محصول : </p>
                        <video controls className="w-[100%] h-[auto] lg:w-150 my-5">
                            <source src={productData.video} />
                        </video>
                    </>
                }
                <div className="flex mb-10">
                    <RemoveButton id={Number(id)} />
                    <Link href={`/dashboard/products/${id}/editProduct`} className="bg-blue-500 rounded-md px-2 py-1 text-white hover:bg-blue-700">ویرایش کالا</Link>
                </div>
            </div>
        </div>
    )
}