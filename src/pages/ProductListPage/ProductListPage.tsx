import { ProductsList } from "../../shared/ProductsList/ProductsList";

interface IProductListPageProps {
    search: string
  }

export function ProductListPage(props: IProductListPageProps){
    return <><ProductsList search={props.search}></ProductsList></>
}