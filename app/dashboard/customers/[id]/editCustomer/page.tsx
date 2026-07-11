import { ParamsId } from "@/app/dashboard/products/[id]/page"
import { prisma } from "@/lib/prisma"
import EditUserForm from "./editCustomerPage"


interface Customer {
        name: string,
        mobile: string,
        address?: string,
        email?: string,
        id: number
}



export default async function EditUser({ params }: ParamsId) {
    const { id } = await params
    const customerInformation : Customer | null = await prisma.customers.findUnique({ where: { id: Number(id) } })
    if(!customerInformation){
        return "مشتری مورد نظر وجود ندارد"
    }

    return (
        <div>
            <EditUserForm customer={customerInformation} />
        </div>
    )
}