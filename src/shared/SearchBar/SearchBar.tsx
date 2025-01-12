import { useState, useRef } from "react"
import "./SearchBar.css"

export function SearchBar(){
    // Створюємо стан, щоб розуміти чи відкрите модальне вікно, чи ні
    const [isModalOpen, setIsModalOpened] = useState <boolean>(false)
    // робимо функцію, яка викликається на натискання на input (подія focus)
    function inputOnFocus(){
        // міняємо стан на true. Тобто модалка відкрита
        setIsModalOpened(true)
        
    }
    // додаємо до document відслідковувач події click.
    document.addEventListener("click", (event)=>{
        console.log(event.target)
        console.log(modalRef.current)
        // перевіряємо, чи було натиснуто нашу модалку чи інпут. Якщо ні - то міняємо стан на false (модалка закрита)
        if (modalRef.current != event.target && event.target != inputRef.current){
            setIsModalOpened(false)
        }
    })  
    // робимо ref (reference - посилання) на тег input та нашу модалку (div)
    const modalRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    return(
        <div>
            {/* Додаємо обработчік події focus. Якщо ми зафокусили input, то викликаємо функцію inputOnFocus. Також робимо ref на цей input */}
             <input className="input" type="text" ref={inputRef} placeholder="Пошук продуктів..." onFocus={inputOnFocus}/>
             {/* Якщо модалка відкрита (стан = true). Використовуємо ===, щоб зробити перевірку без перетворень типів даних */}
             { isModalOpen === true 
                    // Якщо порівняння повертає true, то заходимо сюди
                    ? 
                    // Відображаємо нашу модалку. Робимо ref на цей div
                    <div ref={modalRef}><button>opened</button></div>
                    // Якщо порівняння повернуло false
                    : 
                    // Наша модалка не відображується (˘･_･˘)
                    undefined
            }

        </div>
    )
}