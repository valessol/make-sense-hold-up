import React, { createContext, useEffect, useState } from 'react'

export const UIContext = createContext()

export const UIProvider = ({children}) => {
    const [ success, setSuccess ] = useState(false)


    return (
        <UIContext.Provider value={{
            success,
            setSuccess
        }}>
            {children}
        </UIContext.Provider>
    )
}
