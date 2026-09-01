import { prisma } from "@/lib/prisma"
import Link from "next/link"

interface MessagesType {
    id : number,
    name : string,
    phone : string,
    email? : string,
    messageSubject : string,
    messageText : string 
}

export default async function Messages (){
    const messages = await prisma.messages.findMany()
    return(
        <div>
            {messages.length > 0 ? 

            messages.map((item : any )=>(
                <div key={item.id} className="border-b-2 border-gray-300  flex flex-col gap-3 lg:w-200 py-3 ">
                    <p className="text-blue-500">{item.name}</p>
                    <p>{item.messageText}</p>
                    <Link className="bg-blue-500 rounded-md w-30 text-white text-center py-1 hover:bg-blue-700" href={`/dashboard/messages/${item.id}`}>مشاهده پیام</Link>
                </div>
            )) 
           
           : <p className="text-center">پیامی وجود ندارد</p>}
        </div>
    )
}