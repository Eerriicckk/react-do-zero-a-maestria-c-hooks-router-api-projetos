import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search =()=>{
    const [searchParams] = useSearchParams();
    const url = "http://localhost:3000/products?"+searchParams;
    console.log(url)
    const {data:results, loading, error} = useFetch(url)
    return(
        <div><h1>Produtossss</h1>
            {error && <p>{error}</p>}
            <ul className="productGrid">
                {results && results.map((item) => (
                <li key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <br />
                    <Link to={`/product/${item.id}`}>info</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}
export default Search