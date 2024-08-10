import { useEffect, useReducer, useState } from "react"
import { db } from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

const initialState = {
    loading: null,
    error: null
}

const deleteReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null }
        case "DELETED_DOC":
            return { loading: false, error: null }
        case "ERROR":
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

export const useDeleteDocument = (docCollection) => {
    const [response, dispatch] = useReducer(deleteReducer, initialState)

    const [loading, setLoading] = useState(false)

    const [cancelled, setCancelled] = useState(false)
    const checkIfIsCancelled = (action) => {
        if (!cancelled) dispatch(action)
    }

    const deleteDocument = async (id) => {
        checkIfIsCancelled({
            type: "LOADING",
        })
        try {
            const deletedDoc = await deleteDoc(doc(db, docCollection, id))

            checkIfIsCancelled({
                type: "DELETED_DOC",
                payload: deletedDoc,
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

    return { deleteDocument, response }
}