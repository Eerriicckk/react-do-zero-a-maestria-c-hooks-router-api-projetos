import { useEffect, useState } from "react"
import { db } from '../firebase/config'
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore"

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [docs, setDocs] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(false)
    const [cancelled, setCancelled] = useState(false)

    useEffect(() => {
        async function loadData() {
            if (cancelled) return
            setLoading(true)

            try {
                const collectionRef = await collection(db, docCollection)
                let queryOk

                if (search) {
                    queryOk = await query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdBy", "desc"));
                } else if (uid) {
                    queryOk = await query(collectionRef, where("uid", "==", uid), orderBy("createdBy", "desc"));
                } else {
                    queryOk = await query(collectionRef, orderBy("createdBy", "desc"));
                }

                await onSnapshot(queryOk, (querySnapshot) => {
                    setDocs(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }))
                    )
                })
            } catch (error) {
                console.log(error)
                setErrors(error)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, [docCollection, search, uid, cancelled])

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return { docs, errors, loading }
}