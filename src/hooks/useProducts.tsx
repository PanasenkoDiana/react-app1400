import { useEffect, useState } from "react"

export interface IProduct{
    id: number,
    title: string,
    description: string,
    price: number,
    image: string,
    category: string,
}

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>()
    useEffect(()=>{
        async function getProducts(){
            try{
                setIsLoading(true)
                const response = await fetch('https://fakestoreapi.com/products')
                const products = await response.json()
                setProducts(products)
            }
            catch(error){
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally{
                setIsLoading(false)
            }
            
        }
        getProducts()
        
    },[])
    return {products: products, isLoading: isLoading, error: error}
}