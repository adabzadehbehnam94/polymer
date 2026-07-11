import { prisma } from "@/lib/prisma"
import UsersDetails from "./customersDetails";

export default async function Users() {   
    const customers = await prisma.customers.findMany()
    return (
        <div >
            <UsersDetails customers={customers}/>
        </div>
    )
}