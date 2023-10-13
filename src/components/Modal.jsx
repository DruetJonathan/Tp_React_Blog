import {useEffect, useRef} from "react";

export function Modal({children, onClose}) {

    const dialogRef = useRef(null)
    useEffect(()=>{
        dialogRef.current.showModal()
    },[])

    const handleClose = (e) => {
        e.preventDefault()
        onClose?.()
    }

    return <dialog ref={dialogRef} onCancel={handleClose} onClose={handleClose}>
        {children}
    </dialog>
}