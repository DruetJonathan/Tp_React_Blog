import { useEffect, useState } from "react";
import {CleanedHash} from "../utils/CleanedHash.js";
import {SplitHash} from "../utils/SplitHash.js";

/**
 * Hook personnalisé pour React permettant de suivre et de gérer la navigation basée sur le hachage.
 *
 * Ce hook surveille les modifications du hachage dans l'URL et fournit le hachage actuel en tant que propriété "page".
 *
 * @returns {{ page: string }} Un objet contenant le hachage de la page actuelle.
 */
export function useHashNavigation () {
    const [hash, setHash] = useState(location.hash)

    useEffect(() => {
        const handleHashChange = () => {
            setHash(location.hash)
        }
        window.addEventListener('hashchange', handleHashChange)
        return () => {
            window.removeEventListener('hashchange', handleHashChange)
        }
    }, []);

    const cleanedHash = hash.replaceAll('#', '').toLowerCase()

    return {
        page: cleanedHash ? cleanedHash.split(':')[0] : 'home',
        param: cleanedHash.split(':')[1]
    }
}
