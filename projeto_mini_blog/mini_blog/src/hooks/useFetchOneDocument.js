import { useEffect, useState } from "react"
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore"

export const useFetchOneDocument = (docCollection, id) => {

    const [docs, setDocs] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if (cancelled) return
            setLoading(true)

            try {
                const collectionRef = await doc(db, docCollection, id)
                const queryOk = await getDoc(collectionRef);
                setDocs(queryOk.data())

            } catch (error) {
                console.log(error)
                setErrors(error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [docCollection, id, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { docs, errors, loading }
}