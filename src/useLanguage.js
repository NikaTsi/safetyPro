import { useState, useEffect } from "react";

export const useLanguage = () => {
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "Eng");

    const handleLanguageChange = () => {
        const newLanguage = language === "Eng" ? "Geo" : "Eng";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
        window.dispatchEvent(new Event("storage"));
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const storedLanguage = localStorage.getItem("language");
            if (storedLanguage) {
                setLanguage(storedLanguage);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        
        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return { language, handleLanguageChange };
};
