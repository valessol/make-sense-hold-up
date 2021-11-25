import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [ entrepreneur, setEntrepreneur ] = useState(false)
    const [ citizen, setCitizen ] = useState(true)
    
    //NOTE: habilitar este useeffect cuando tenga logueo de ciudadano, y manejar cuales pantallas seran accedidas publicamente y cuales no.
    // useEffect(() => {
    //     setCitizen(!entrepreneur)
    // }, [entrepreneur])

    

    return (
        <UserContext.Provider value={{
            entrepreneur,
            setEntrepreneur,
            citizen
        }}>
            {children}
        </UserContext.Provider>
    )
}

