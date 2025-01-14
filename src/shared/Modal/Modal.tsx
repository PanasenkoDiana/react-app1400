import { useState, useRef, ReactNode, useEffect } from "react"
import "./Modal.css"
import { createPortal } from "react-dom"

interface IModalProps {
    children: ReactNode,
    allowModalCloseOutside: boolean,
    onClose: ()=> void,
    container?: Element
}



export function Modal(props: IModalProps){
    let {children, allowModalCloseOutside, onClose, container=document.body} = props

    function handleClickOutside(event: MouseEvent){
    
        console.log(event.target)
        console.log(modalRef.current)

        if (modalRef.current !== event.target && !modalRef.current?.contains(event.target as Node)){
            // setIsModalOpened(false)
            onClose()

        }
        
    }

    useEffect(() => {
        if (!allowModalCloseOutside){
            return
        }

        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    

    const modalRef = useRef<HTMLDivElement | null>(null)

    return createPortal(
        <div ref={modalRef} className="modal">{children}</div>,
        container
    )
        // <div ref={modalRef} className="modal">{children}</div>    
}