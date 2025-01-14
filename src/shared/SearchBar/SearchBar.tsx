import { useState, useRef } from "react"
import "./SearchBar.css"
import { Modal } from "../Modal/Modal"

export function SearchBar(){
    // Створюємо стан, щоб розуміти чи відкрите модальне вікно, чи ні
    const [isModalOpen, setIsModalOpened] = useState <boolean>(false)
    // робимо функцію, яка викликається на натискання на input (подія focus)
    function inputOnFocus(){
        // міняємо стан на true. Тобто модалка відкрита
        setIsModalOpened(true)
    }


    const modalContainerRef = useRef<HTMLDivElement | null>(null)


    return(
        <div ref={modalContainerRef}>
             <input className="input" type="text" placeholder="Пошук продуктів..." onFocus={inputOnFocus} onClick={(event) => {event.stopPropagation()}}/>
             { isModalOpen === true 
                    // Якщо порівняння повертає true, то заходимо сюди
                    ? 
                    <Modal allowModalCloseOutside={true} onClose={() => {setIsModalOpened(false)}} container={(modalContainerRef.current) ? modalContainerRef.current : undefined}><button>opened</button></Modal>
                    : 
                    // Наша модалка не відображується (˘･_･˘)
                    undefined
            }
        </div>
    )
}