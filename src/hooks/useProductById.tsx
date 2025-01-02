import { useState, useEffect } from 'react'
import { IProduct } from './useProducts'


// https://fakestoreapi.com/products/id
export function useProductById(id: number) {
    const [product, setProduct] = useState<IProduct>()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()

    useEffect(() => {
        async function getProduct() {
            try {
                setIsLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const product = await response.json()
                setProduct(product)
            }
            catch (error) {
                // instanceof
                const err = error instanceof Error ? error.message : undefined
                setError(`${err}`)
            }
            finally {
                setIsLoading(false)
            }
        }
        getProduct()
    }, [id])

    return {product: product, isLoading: isLoading, error: error}
}