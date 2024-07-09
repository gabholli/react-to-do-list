import { useState, useEffect } from "react";

// Define the hook with a generic type parameter T
const useLocalStorage = <T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.log("Error reading from localStorage", err);
        return initialValue;
        }
    });

    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            console.log("Error writing to localStorage", err);
        }
    }, [key, value]);

        return [value, setValue];
};

        export default useLocalStorage;
