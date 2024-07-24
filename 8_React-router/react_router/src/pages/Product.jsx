import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/products/" + id
    const { data, loading, error } = useFetch(url)

    return (
        <>
            <div>
                <h2>Info do produto</h2>
                {error && <p>{error}</p>}
                <ul>
                    {loading || !data
                        ? <>Carregando ...</>
                        : <li>
                            <p>{data.name}</p>
                            <p>{data.price}</p>
                        </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default Product