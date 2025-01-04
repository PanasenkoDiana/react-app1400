import { ReactNode, useState } from "react"
import './Layout.css'
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import { ProductsList } from "../ProductsList/ProductsList"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"

interface ILayoutProps {
    // Children - спеціальна властивість react, яка передається через props
    // Дозволяє вкладувати будь-які елементи в компонент
    // Якщо між відкриваючим та закриваючим тегом компонента, ми вписуємо будь-які елементи (компоненти), 
    // тоді вони будуть передані в children
    children?: ReactNode
    setSearch: (value: string) => void;
}

export function Layout(props: ILayoutProps){

    return (
        <div className="layout">
            <Header setSearch={props.setSearch}></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}