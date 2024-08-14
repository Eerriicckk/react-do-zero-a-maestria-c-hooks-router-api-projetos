import React, { createContext } from 'react'

export const SomeContext = createContext()


const ComponenteUseContext = ({ children }) => {
    const contextValue = "testing value"
    return (
        <SomeContext.Provider value={{ contextValue }}>
            {children}
        </SomeContext.Provider>
    )
}

export default ComponenteUseContext