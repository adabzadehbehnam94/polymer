// import ArticleCard, { ArticlesType } from "@/app/components/articleCard";
import HeaderPages from "@/app/components/headerPages";
import { allArticles } from "@/app/components/serverAction";
import { prisma } from "@/lib/prisma";
import leaf from "@/public/images/icons/leaf.png"
import Image from "next/image";
import Link from "next/link";
import moment from "jalali-moment"

export interface ArticlesType {
    id: number,
    image: string,
    summary?: string | null,
    title: string,
    publishedAt: any
}



export default async function Articles({serachParams} : {serachParams : Promise<{count : number | null}>}) {
    const params = await serachParams
    
    const articlesData: ArticlesType[] = await allArticles()

    const persianDate = (Date: string) => {
        const change = moment(Date).locale("fa").format("YYYY/MM/DD")
        return change
    }


    return (
        <div>
            <HeaderPages icon={leaf} title="مقالات" subtitle="دانش و اطلاعت بروز در صنعت پلیمر" />
            <div className="container mx-auto my-10 px-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5 mb-10">
                    {articlesData.map((item: ArticlesType) => (
                        <Link
                            href={`/pages/articles/${item.id}`}
                            className="rounded-lg overflow-hidden bg-[#121919] flex flex-col  gap-3" key={item.id}>
                            <Image src={item.image} width={300} height={200} alt="product" className="h-30 md:h-40 lg:h-50 bg-auto" />
                            <div className="flex flex-col gap-3 px-5 pb-5">
                                <p className="text-[#dde1de] text-sm md:text-sm/7">{item.title}</p>

                                {item?.summary && <p className="text-[#909292] text-xs md:text-xs/6 line-clamp-3 text-justify">{item.summary}</p>}
                                    {/* <div className="flex justify-between">
                                        <p className="text-[#909292] text-xs">{persianDate(item.publishedAt)}</p>
                                        <p className="text-[#909292] text-xs">زمان مطالعه : {persianDate(item.publishedAt)}</p>
                                    </div> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    )
}