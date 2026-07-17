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
                <div key={item.id} className="border-b-2 border-gray-300 flex gap-2 ">
                    <p>{item.name}</p>
                    <p>{item.messageText}</p>
                    <Link className="bg-blue-500 rounded-md text-white px-2 py-1" href={`/dashboard/messages/${item.id}`}>مشاهده پیام</Link>
                </div>
            )) 
           
           : <p className="text-center">پیامی وجود ندارد</p>}
        </div>
    )
}