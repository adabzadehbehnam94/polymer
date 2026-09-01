import { prisma } from "@/lib/prisma"
import { ParamsId } from "../../products/[id]/page"
import Link from "next/link";
import RemoveButton from "@/app/components/removeButton";


export default async function Profile({ params }: ParamsId) {

    const { id } = await params


    const customer = await prisma.customers.findUnique({ where: { id: Number(id) } })

    return (
        <div className="grid gap-5">
            <div className="flex justify-start px-2 ">
                <h4 className="ml-2 text-blue-500">نام : </h4>
                <p className="overflow-hidden">{customer?.name}</p>
            </div>
            <div className="flex justify-start px-2 ">
                <h4 className="ml-2 text-blue-500">شماره موبایل : </h4>
                <p className="overflow-hidden">{customer?.mobile}</p>
            </div>
            {customer?.address &&
                <div className="flex justify-start px-2 ">
                    <h4 className="ml-2 text-blue-500">آدرس : </h4>
                    <p className="overflow-hidden">{customer?.address}</p>
                </div>
            }
            {customer?.email &&
                <div className="flex justify-start px-2 ">
                    <h4 className="ml-2 text-blue-500">ایمیل : </h4>
                    <p className="overflow-hidden">{customer?.email}</p>
                </div>
            }

            <div className="flex justify-start mb-5 ">
                <RemoveButton id={Number(id)} />
                <Link href={`/dashboard/customers/${customer?.id}/editCustomer`} className="rounded-md bg-blue-500 px-2 py-1  text-white hover:bg-blue-700">ویرایش</Link>
            </div>
        </div>
    )
}