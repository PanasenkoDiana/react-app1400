import { useState, useRef, ReactNode, useEffect } from "react"
import "./Modal.css"
import { createPortal } from "react-dom"

// робимо інтерфейс для типізації props у компоненті.
// onClose - функція, яка повертає void, тобто нічого
interface IModalProps {
    children: ReactNode,
    allowModalCloseOutside: boolean,
    onClose: ()=> void,
    container?: Element
}



export function Modal(props: IModalProps){
    // за допомогою деструкторизації створюємо змінні і присвоюємо в них дані з props
    let {children, allowModalCloseOutside, onClose, container=document.body} = props

    // створюємо функцію, яка відповідає за закриття вікошка
    function handleClickOutside(event: MouseEvent){
    
        console.log(event.target)
        console.log(modalRef.current)
        // якщо ми не натиснули на модалку та якщо ми не натиснули на якийсь об'єкт у модалці
        if (modalRef.current !== event.target && !modalRef.current?.contains(event.target as Node)){
            // setIsModalOpened(false)
            console.log(123123123)
            onClose()

        }
        
    }

    useEffect(() => {
        // якщо модалку не можна закривати кліком ззовні, то виходимо з useEffect
        if (!allowModalCloseOutside){
            return
        }
        // додаємо обработчік кліка на document, якщо клікаємо на документ викликається функція handleClickOutside
        document.addEventListener("click", handleClickOutside)
        // при розмонтіровкє компонента видаляємо обработчік кліка на document
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    
    // створюємо посилання на модалку
    const modalRef = useRef<HTMLDivElement | null>(null)

    return createPortal(
        // робимо портал, за допомогою якого створюємо div або у body, або в якомусь іншому div
        <div ref={modalRef} className="modal">{children}</div>,
        container
    )
        // <div ref={modalRef} className="modal">{children}</div>    
}