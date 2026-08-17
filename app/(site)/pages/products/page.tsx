import { prisma } from "@/lib/prisma"
import ProductsPage from "./productsPage"
import HeaderPages from "@/app/components/headerPages"
import Link from "next/link"
import { allCategories } from "@/app/components/serverAction"

interface ParamsType {
    searchParams: Promise<{
        page: string,
        sort?: any | null,
        category?: any | null,
        brand?: string | null,
        search? : string | null
    }>
}

export default async function Products({ searchParams }: ParamsType) {

    const params = await searchParams
    const page = params?.page ? Number(params.page) : 1
    const brand = params.brand ?? ""
    const sort =  params.sort ?? "desc"
    const search =  params.search ?? ""
    const category =  params.category ? params.category : null
    

    const where ={
        ...(brand && {
            brand : brand
        }),
        
        ...(category && {
            categoryId : Number(category)
        }),
        ...(search && {
            productName : {
                contains : search
            }
        })
    }
   
    const Product_Per_Page = 2
    const totalProducts = await prisma.products.count({where : where})
    const totalPage = Math.ceil(totalProducts / Product_Per_Page)


   
        const Categories = await allCategories()
        const productsData = await prisma.products.findMany({
            include: { category: true },
            where : where,
            skip: (page - 1) * Product_Per_Page,
            take: Product_Per_Page,
            orderBy: {
                createdAt: sort,
            }
        })

        const paramsPage = new URLSearchParams()
        

    return (
        <div className="bg-[#0b1113]">

            <HeaderPages title="محصولات پلیمری" subtitle="تامین مواد اولیه پلیمری با کیفیت بالا از برند های معتبر داخلی و خارجی" />
            <div className="container mx-auto px-10">
                <ProductsPage productsData={productsData} categoryData={Categories} />
                <div className="flex justify-center mb-10">

                    {Array.from({ length: totalPage }).map((_, index) =>{
                            paramsPage.set("page" , String(index + 1))
                            if(search){
                                paramsPage.set("search",search)
                            }
                            if(category){
                                paramsPage.set("category",category)
                            }
                            if(sort){
                                paramsPage.set("sort",sort)
                            }
                            
                     return (
                        <Link key={index} 
                        className="text-xs border-1 bg-[#161d1e] border-[#1d2324] rounded-md text-[#dddedc] px-4 py-3 mx-1 transition-all during-500 hover:bg-[#31801a] hover:text-white"

                            href={`/pages/products?${paramsPage.toString()}`}>{index + 1}
                        </Link>
                    )})}
                </div>
            </div>
        </div>
    )
}