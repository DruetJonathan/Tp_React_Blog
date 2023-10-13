import {useEffect, useRef, useState} from "react";
import {useRefSync} from "./useRefSync.js";

export function useFetch(url,options) {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null)
    const [errors,setErrors] = useState(null)
    const optionsRef = useRefSync(options)


    useEffect(()=>{
        // permet de recuperer les données + modifier les options
        fetch(url, {
            ...optionsRef.current,
            headers:{
                'Accept' : 'application/json; charset=UTF-8',
                ...optionsRef.current.headers
            }
        }).then(r => r.json()).then(data => {
            setData(data)
            setLoading(false)
        }).catch(
            (e) =>{
                setErrors(e)
            }
        ).finally(
            ()=>{
                setLoading(false)
            }
        )
    },[url])

    return {
        loading,
        data,
        errors,
        setData
    }
}