import { productsType } from "@/components/Products";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";


export default async function Products() {
    const data = await prisma.products.findMany()
    const dataCategory = await prisma.categories.findMany()

    return (
        <div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-3">
                {dataCategory.map((item: { name: string, id: number }) => (

                    <div key={item.id}>
                        <p className="text-blue-500 mb-2">{item.name} : </p>
                        {data.map((product : productsType) =>(
                            product.categoryId === item.id && 

                            <Link href={`/dashboard/products/${product.id}`} className="mb-1 flex items-center gap-2 w-[fit-content]" key={product.id}>
                                {product?.image && <Image className="rounded-md" src={product?.image} alt="image_product" width={40} height={40} />}
                                <p>{product.producName}</p>
                            </Link>
                        ))}

                    </div>
                ))}

            </div>

        </div>
    )
}