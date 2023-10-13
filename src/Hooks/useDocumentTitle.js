import {useEffect} from "react";

export function useDocumentTitle(title) {
    // génere un effet de bord
    useEffect(()=>{
        const originalTitle = document.title
        return ()=>{
            document.title = originalTitle;
        }
    },[])
    useEffect(()=>{
        document.title = title
    },[title])
}

