import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();

    return (
        <>
            <div>
                <h2>Info do produto</h2>
            </div>
        </>
    )
}

export default Product