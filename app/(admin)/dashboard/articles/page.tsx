import HeaderPages from "@/app/components/headerPages";
import { prisma } from "@/lib/prisma";
import leaf from "@/public/images/icons/leaf.png"
import { ArticleType } from "./[id]/contentPageArticle";
import Image from "next/image";
import Link from "next/link";
import RemoveArticle from "./removeArticle";
import { articleDelete } from "@/app/components/serverAction";




export default async function Articles() {

    const articles = await prisma.articles.findMany()


    return (
        <div>
            <div className="mb-5">
                {articles.length > 0 ? articles.map((item: ArticleType) => (
                    <div key={item.id} className="flex lg:flex-row flex-col gap-5 border-b-2 border-gray-300 py-5">
                        <div >
                            <Image src={item.image} className="rounded-lg"  alt="image" width={200} height={100} />
                        </div>
                        <div className="flex flex-col gap-3">
                            <p>{item.title}</p>
                            <p><span className="text-blue-500">وضعیت انتشار :</span> {item.isPublished === false ? "منتشر نشده" : "منتشر شده"}</p>
                            <div className="flex gap-5">
                                <Link
                                    href={`/dashboard/articles/${item.id}`}
                                    className="bg-blue-500 rounded-lg text-center py-1 text-white cursor-pointer w-30 hover:bg-blue-700"
                                >ویرایش مقاله</Link>

                                <RemoveArticle IdArticle={item.id} />
                            </div>
                        </div>

                    </div>
                ))

                    :

                    <p className="text-center">مقاله ای وجود ندارد</p>
                }
            </div>

            <Link
                href={"/dashboard/articles/createArticle"}
                className="bg-blue-500 rounded-lg text-white px-2 py-1 cursor-pointer hover:bg-blue-700 mb-8"
            >ایجاد مقاله جدید</Link>
        </div>
    )
}