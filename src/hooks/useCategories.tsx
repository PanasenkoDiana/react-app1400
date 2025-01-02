import { useEffect, useState } from 'react'

export function useCategories() {
    const [categories, setCategories] = useState<string[]>([])

    useEffect(()=>{
        async function getCategories(){
            const response = await fetch('https://fakestoreapi.com/products/categories')
            const categories = await response.json()
            setCategories(categories)
        }
        getCategories()
    },[])
    return {categories: categories}
}
