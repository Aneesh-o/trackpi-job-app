import React, { createContext, useState } from 'react'

export const addJobContext = createContext()

const ContextApi = ({ children }) => {
    const [addJobResponse, setAddJobResponse] = useState("")
    return (
        <addJobContext.Provider value={{ addJobResponse, setAddJobResponse }}>
            {children}
        </addJobContext.Provider>
    )
}

export default ContextApi