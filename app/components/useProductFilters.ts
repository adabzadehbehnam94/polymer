import { useRouter, useSearchParams } from "next/navigation"
import { useRef } from "react"
// import { setTimeout } from "timers/promises"

export function useProductFilters (){
    const router = useRouter()
    const timeOutSearch = useRef<ReturnType<typeof setTimeout>|null>(null)
    const searchParams = useSearchParams()
    const updateFilter = (key : string , value : string)=>{
        const params = new URLSearchParams(searchParams)
        if(value === ""){
            params.delete(key)
        }else{
            params.set(key , value)
        }

        router.push(`/pages/products?${params.toString()}`)
    }

    const updatesearch = (value : string)=>{
        
        if(timeOutSearch.current){
            clearTimeout(timeOutSearch.current)
        } 

        timeOutSearch.current = setTimeout(()=>{
            updateFilter("search" , value)
        },500)
    }

    return {

        updateFilter , updatesearch
        
    }
}