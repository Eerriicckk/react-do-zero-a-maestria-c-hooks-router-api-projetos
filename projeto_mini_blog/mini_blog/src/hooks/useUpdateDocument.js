import { useEffect, useReducer, useState } from "react"
import { db } from "../firebase/config"
import { doc, getDoc, updateDoc } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null
}

const updateReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "UPDATED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const useUpdateDocument = (docCollection) => {
    const [response, dispatch] = useReducer(updateReducer, initialState)

    const [cancelled, setCancelled] = useState(false)
    const checkIfIsCancelled = (action) => {
        if (!cancelled) dispatch(action)
    }

    const updateDocument = async (id, data) => {
        checkIfIsCancelled({
            type: "LOADING",
        })
        try {
            const docRef = await doc(db, docCollection, id)

            const updatedDoc = await updateDoc(docRef, data);

            checkIfIsCancelled({
                type: "UPDATED_DOC",
                payload: updatedDoc,
            })

        } catch (error) {
            console.log("erro:", error)
            checkIfIsCancelled({
                type: "ERROR",
                payload: error.message,
            })
        }
    }

    useEffect(() => { return () => setCancelled(true) }, [])

    return { updateDocument, response }
}