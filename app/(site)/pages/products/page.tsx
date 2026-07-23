import { prisma } from "@/lib/prisma"
import ProductsPage from "./productsPage"
import HeaderPages from "@/app/components/headerPages"
import Link from "next/link"

interface ParamsType {
    searchParams: Promise<{
        page: string ,
        sort?: string | null ,
        category?: number | null
    }>
}

export default async function Products({ searchParams }: ParamsType) {

    const params = await searchParams
    const page = params?.page ? Number(params.page) : 1
    // const sort: any = params?.sort ? params.sort : "desc"
    // const category: any = params?.category ? params.category : 1
    const Product_Per_Page = 2
    // console.log(params);
    const totalProducts = await prisma.products.count()
    const totalPage = Math.ceil(totalProducts / Product_Per_Page)
    // let dateProducts : any = "desc"


    const productsData = async (categoryId? : any , sort? : any) => {
        
        const data = await prisma.products.findMany({
            include: { category: true },
            skip: (page - 1) * Product_Per_Page,
            take: Product_Per_Page,
            orderBy: {
                createdAt: sort,
                categoryId: categoryId
            }
        })

        return data
    }

    const data = await productsData("desc")


    return (
        <div>

            <HeaderPages title="محصولات پلیمری" subtitle="تامین مواد اولیه پلیمری با کیفیت بالا از برند های معتبر داخلی و خارجی" />
            <div className="container mx-auto">
                <ProductsPage productsData={data} />
                {Array.from({ length: totalPage }).map((_, index) => (
                    <Link key={index} className="border-1 bg-black border-gray-200 rounded-lg text-gray-200 px-2 py-2 mx-2"
                        href={`/pages/products?page=${index + 1}`}>{index + 1}
                    </Link>
                ))}
            </div>
        </div>
    )
}