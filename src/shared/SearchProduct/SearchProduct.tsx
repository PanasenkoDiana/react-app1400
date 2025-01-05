import { Link } from "react-router-dom"

import "./SearchProduct.css"

interface ISearchProductProps {
    id: number,
    name: string,
    img: string,
    price: number,
}

export function SearchProduct(props:ISearchProductProps){
    return(
        <div>
            <Link className="search-product" to={`/product/${props.id}`}>
                <div className="search-prodInfo">
                    <img className="prodImg" src={props.img} alt="" id="img"/>
                    <h1 className="search-text">{props.name}</h1>
                </div>
            </Link>
        </div>
    )
}
