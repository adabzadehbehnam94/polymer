"use client"
import { createContext, useEffect, useState } from "react"
import { allCategories,logoutUser,presentSetting, presentUser, removeProduct, removeUser } from "./serverAction"
import { useRouter } from "next/navigation"

interface User{
    
    firstname : string | null
}

interface contextProps {
    children : React.ReactNode,
    initialUser : any
}


export interface VAl  {
    user : {user : string} | null,
    handleUser : (item : {user : string})=> void,
    logout : ()=> void,
    Remove : (id : number)=> void,
    category : {category : string} | null,
    id : string | undefined | null,
    RemoveProduct : (id : number)=> void,
    web : WebDetail | null,
    loginUser : any | null,
    categoryFooter : object[] | null

}

interface WebDetail{
    id: number,
    name : string,
    detail? : string,
    logo : string,
    phone : string,
    address : string,

}

const ContextUser = createContext<VAl | null>(null)

export function Contex({children , initialUser} : contextProps){
    const [user , setuser] = useState<any | null >(initialUser)
    const [web , setWeb] = useState <any | null>(null)
    const [categoryFooter , setCategoryFooter] = useState <any | null>(null)
    const [category , setCategory] = useState<{category : string} | null >(null)
    const [id , setId] = useState<string | undefined | null>(undefined)
    const router =useRouter()
    const handleUser = (item : {user : string}) =>{
        setuser(item)
    }

    const logout = async () =>{
        await logoutUser()
        setuser(null)
        setId(null)
        router.push("/")
    }

    

    useEffect(()=>{
        const webDetail = async()=>{
            const data = await presentSetting()
            setWeb(data)
        }

        const categoryDetail = async()=>{
            const data = await allCategories()
            setCategoryFooter(data)
        }

        webDetail()
        categoryDetail()
    },[])

    const Remove = (id : number) =>{
        removeUser(id)
        router.push("/dashboard/users")
    }

    const RemoveProduct = (id : number) =>{
        removeProduct(id)
        router.push("/dashboard/products")
    }

   

    const loginUser = (user : string , id :string)=>{
        setuser(user)
        setId(id)
    }

    return(
        <ContextUser.Provider value={{user , handleUser ,logout , Remove , category,id,RemoveProduct ,web , loginUser ,categoryFooter}}>
            {children}
        </ContextUser.Provider>
    )
}
export default ContextUser