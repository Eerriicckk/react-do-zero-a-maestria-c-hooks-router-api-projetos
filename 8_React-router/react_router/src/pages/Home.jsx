import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Home = () => {
  const url = "http://localhost:3000/products"
  const { data, httpConfig, loading, error } = useFetch(url)

  return (
    <div>Home dos produtos
      {error && <p>{error}</p>}
      <ul className="productGrid">
        {data && data.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <br />
            <Link to={"/product/" + item.id}>info</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home