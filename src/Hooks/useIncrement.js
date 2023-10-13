import {useState} from "react";

export function useIncrement(initial){
    const [state,setState] = useState(initial)
    let increment = () => setState(v => v+1);
    let desincrement = () => setState(v => v-1);
    return {
        compteur: state,
        increment,
        desincrement
    }
}
