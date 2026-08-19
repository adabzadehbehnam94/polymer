import { ParamsId } from "@/app/(admin)/dashboard/products/[id]/page"
import { prisma } from "@/lib/prisma"
import EditUserForm from "./editCustomerPage"





export default async function EditUser({ params }: ParamsId) {
    const { id } = await params
    const customerInformation = await prisma.customers.findUnique({ where: { id: Number(id) } })
    if(!customerInformation){
        return "مشتری مورد نظر وجود ندارد"
    }

    return (
        <div>
            <EditUserForm customer={customerInformation} />
        </div>
    )
}