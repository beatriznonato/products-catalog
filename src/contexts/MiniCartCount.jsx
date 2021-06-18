import React, { createContext, useCallback, useContext, useState } from 'react';

const MiniCartCountContext = createContext({});

export const MiniCartCountProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(0);

    const optimizedSetCartCount = useCallback(count => {
        setCartCount(count);
    })

    return (
        <MiniCartCountContext.Provider
            value={{
                cartCount,
                optimizedSetCartCount
            }}
        >
            {children}
        </MiniCartCountContext.Provider>        
    );
}

export const useCartCount = () => {
    const context = useContext(MiniCartCountContext);
    return context;
}