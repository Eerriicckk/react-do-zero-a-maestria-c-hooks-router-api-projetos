import { createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext()

export function AuthContextProvider({ children, value }) {
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthValue() {
    return useContext(AuthContext)
}