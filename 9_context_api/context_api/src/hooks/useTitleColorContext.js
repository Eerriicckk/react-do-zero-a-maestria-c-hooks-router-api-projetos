import { TitleColorContext } from '../context/TitleColorContext'
import { useContext } from 'react'

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext)
    if (!context) console.log("erro no context")
    return context
}
