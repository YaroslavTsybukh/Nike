import { useEffect, useState } from 'react'
import { IDataFromServer } from '../shared/dataFromServer.interface.ts'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase.ts'

export const useImagesData = () => {
    const [images, setImages] = useState<[] | IDataFromServer[]>([])
    const getDocuments = async () => {
        onSnapshot(
            query(collection(db, 'images'), orderBy('timestamp', 'desc')),
            (snapshot) => {
                setImages(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        path: doc.get('path'),
                        timestamp: doc.get('timestamp'),
                    })),
                )
            },
        )
    }

    useEffect(() => {
        getDocuments()
    }, [])

    return images
}
