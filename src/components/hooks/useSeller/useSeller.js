import { useEffect, useState } from "react"

const useSeller=email=>{
    const [isSeller,setIsSeller]= useState(false)
    // console.log(isSeller)
    const[isSellerLoading,setIsSellerLoading]= useState(true)
    useEffect(()=>{
        fetch(`https://phone-saler.vercel.app/users/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setIsSeller(data.isSeller)
            setIsSellerLoading(false)
        })
    },[email])
    return [isSeller,isSellerLoading]
}
export default useSeller
