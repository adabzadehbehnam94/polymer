import { prisma } from "@/lib/prisma"
import UsersDetails from "./customersDetails";

export default async function Customers() {
    const customers = await prisma.customers.findMany()
    return (
        <div >
            <UsersDetails customersData={customers}/>
        </div>
    )
}