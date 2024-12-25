import { useEffect, useState } from "react"
import { Product } from "../Product/Product"
import './ProductsList.css'
import { Vortex } from 'react-loader-spinner'

import { useProducts } from "../../hooks/useProducts"

// const products = [
//     {id: 0, category: 'Chat-Bot', title: 'Daniel', image: 'https://th-thumbnailer.cdn-si-edu.com/faJoWtc8qjIHuCadMQ2MKjt6xmo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/6a/fa/6afa4efa-3f5a-4ea7-90ea-e47173217d59/42-29316901.jpg', price: -15},
//     {id: 1, category: 'Floppa', title: 'Ilia Bulkin', image: 'https://s7d2.scene7.com/is/image/TWCNews/AP21286725279031_crop?wid=767&hei=431&$wide-bg$', price: -30},
//     {id: 2, category: 'Cats', title: 'Vanya', image: 'https://www.thewildlifediaries.com/wp-content/uploads/2018/11/Snapseed-1-768x512.jpg', price: -45},
//     {id: 3, category: 'Cats', title: 'Фатуев Михайло', image: 'https://www.thewildlifediaries.com/wp-content/uploads/2018/04/Siberian-tiger-768x512.jpg', price: 52},
//     {id: 4, category: 'Chat-Bot', title: 'Daniel4', image: 'https://www.thewildlifediaries.com/wp-content/uploads/2020/01/leopard-walking-768x512.jpg', price: -60}
// ]



export function ProductsList(){
    const {products, isLoading, error} = useProducts()

    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredProducts(products)
        } else{
            setFilteredProducts(products.filter( (product)=>{
                return product.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory, products])

    return <div className="product-list">
        <div className="select-category">
        <select onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }
        }>
            <option value = 'All'>All</option>
            <option value = 'Floppa'>Floppa</option>
            <option value = 'Chat-Bot'>Chat-Bot</option>
            <option value = 'Cats'>Cats</option>
        </select>
        </div>
        <div className="products">
            { isLoading === true ? error === undefined ? filteredProducts.map( (product) => {
                return <Product key = {product.id} id={product.id} name = {product.title} price = {product.price} img = {product.image}></Product>
            }) : (<div>{error}</div>) : (
                <div className="loading">
                    <Vortex
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="vortex-wrapper"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                    />
                </div>
            )}
        </div>
    </div>
}