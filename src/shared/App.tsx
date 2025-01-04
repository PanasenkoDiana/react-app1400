import { Layout } from "./Layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ProductListPage } from "../pages/ProductListPage/ProductListPage"
import { ProductPage } from "../pages/ProductPage/ProductPage"
import { MainPage } from "../pages/MainPage/MainPage"
import { useState } from "react"


export function App(){

    const [search, setSearch] = useState("");

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout setSearch={setSearch}></Layout>}>
                        <Route path="/" element={<MainPage></MainPage>}></Route>
                        <Route path="/products" element={<ProductListPage search={search}></ProductListPage>}></Route>
                        <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}