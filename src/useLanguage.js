import { useState, useEffect } from "react";

export const useLanguage = () => {
    const [georgian, setGeorgian] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
            setGeorgian(storedLanguage === 'geo');
        }
    }, []);

    function handleLanguageChange() {
        const newLanguage = georgian ? 'eng' : 'geo';
        setGeorgian(!georgian);
        localStorage.setItem('language', newLanguage);
    }



    return { georgian, handleLanguageChange }
}