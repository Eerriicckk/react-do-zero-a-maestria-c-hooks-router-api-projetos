import { useEffect, useReducer, useState } from "react"
import { db } from "../firebase/config"
import { addDoc, collection, Timestamp } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "INSERTED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const useInsertDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)

    const [loading, setLoading] = useState(false)

    const [cancelled, setCancelled] = useState(false)
    const checkIfIsCancelled = (action) => {
        if (!cancelled) dispatch(action)
    }

    const insertDocument = async (document) => {
        checkIfIsCancelled({
            type: "LOADING",
        })
        try {
            const newDoc = { ...document, createdAt: Timestamp.now() }
            const insertedDoc = await addDoc(
                collection(db, docCollection),
                newDoc
            )
            
            checkIfIsCancelled({
                type: "INSERTED_DOC",
                payload: insertedDoc,
            })

        } catch (error) {
            checkIfIsCancelled({
                type: "ERROR",
                payload: error.message,
            })
        } finally {

        }
    }

    useEffect(() => { return () => setCancelled(true) }, [])

    return { insertDocument, response }
}