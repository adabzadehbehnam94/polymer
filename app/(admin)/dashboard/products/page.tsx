// import { productsType } from "@/app/components/Products";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";


export interface CategoryType {
    id?: number,
    name: string,
    application?: string | null,
    image?: string | null,
}


export interface productsType {
    id: string | number,
    productName: string,
    price: number,
    image: string,
    categoryId?: number,
    brand?: string | null,
    application?: string | null,
    details?: string | null,
    category?: CategoryType
}




export default async function Products() {
    const data = await prisma.products.findMany()
    const dataCategory = await prisma.categories.findMany()

    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                {dataCategory.map((item: { name: string, id: number }) => (

                    <div key={item.id} className="mb-3 md:mb-0">
                        <p className="text-blue-500 mb-2">{item.name} : </p>
                        {data.map((product: any) => (
                            product.categoryId === item.id &&

                            <div className="border-b-2 border-gray-300"  key={product.id}>
                                <Link href={`/dashboard/products/${product.id}`} className="mb-1 flex items-center gap-2 py-2 w-[fit-content]">
                                    <Image className="rounded-md h-10 w-[auto]" src={product?.image} alt="image_product" width={40} height={40} />
                                    <p>{product.productName}</p>
                                </Link>
                            </div>
                        ))}

                    </div>
                ))}

            </div>

        </div>
    )
}