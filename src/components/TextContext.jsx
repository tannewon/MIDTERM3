import React, { createContext, useState } from 'react';

export const TextContext = createContext();

export const TextProvider = ({ children }) => {
    const [currentSearch, setCurrentSearch] = useState("");

    return (
        <TextContext.Provider value={{ currentSearch, setCurrentSearch }}>
            {children}
        </TextContext.Provider>
    );
};