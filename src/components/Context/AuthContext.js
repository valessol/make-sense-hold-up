import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()


const init = JSON.parse(localStorage.getItem('currentUser')) || ''

export const AuthProvider = ({children}) => {
    const [ authEntrepreneur, setAuthEntrepreneur ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(init)

    const logOut = () => {
        setCurrentUser('')
    }

    useEffect(()=>{
        if (currentUser !== null && currentUser !== '') {
            setAuthEntrepreneur(true)
        }
    }, [currentUser])

    useEffect(()=>{
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
    }, [currentUser])

    
    //NOTE: habilitar este useeffect cuando tenga logueo de ciudadano, y manejar cuales pantallas seran accedidas publicamente y cuales no.
    // useEffect(() => {
    //     setCitizen(!entrepreneur)
    // }, [entrepreneur])

    // useEffect(()=>{
    //     localStorage.setItem('currentUser', JSON.stringify(currentUser))
    // }, [currentUser])

    return (
        <AuthContext.Provider value={{
            authEntrepreneur, 
            currentUser,
            setCurrentUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}