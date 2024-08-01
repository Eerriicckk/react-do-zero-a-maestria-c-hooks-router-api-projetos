import { db } from "../firebase/config"

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const checkIfIsCancelled = () => {
        if (cancelled) return
    }


    //register
    const createUser = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError("")

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName,
            })

        } catch (error) {
            setError(error.message)
            console.log(error.message)
            console.log(typeof error.message)
        } finally {
            setLoading(false)
        }
    }

    // logout
    const logOut = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth, createUser, error, loading, logOut
    }
}