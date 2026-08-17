import { prisma } from "@/lib/prisma";
import Link from "next/link";

interface MessageParams {
    params: Promise<
        {
            id: number
        }
    >
}

export default async function ContentMessage({ params }: MessageParams) {
    const { id } = await params
    console.log(id);
    const message = await prisma.messages.findUnique({ where: { id: Number(id) } })
    return (
        <div className="flex flex-col gap-3 ">
            <div className="flex gap-3">
                <h3>نام کاربر : </h3>
                <p>{message?.name}</p>
            </div>

            <div className="flex gap-3">
                <h3> شماره تماس : </h3>
                <p>{message?.phone}</p>
            </div>

            {message?.email &&
                <div className="flex gap-3">
                    <h3> ایمیل : </h3>
                    <h3>{message?.email}</h3>
                </div>
            }

            <div className="flex gap-3">
                <h3> موضوع : </h3>
                <h3>{message?.messageSubject}</h3>
            </div>
            <h3>متن پیام :</h3>
            <p>{message?.messageText}</p>
            <Link className="bg-blue-500 rounded-md text-white hover:bg-blue-700 px-2 py-1" href={"/dashboard/messages"}>بازگشت به صفحه پیام ها</Link>
        </div>
    )
}