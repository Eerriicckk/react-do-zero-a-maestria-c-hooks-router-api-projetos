import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () =>{
    const navigate = useNavigate()
    const [query, setQuery]=useState();

    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/search?q="+query);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" required onChange={(e)=>setQuery(e.target.value)} />
                <button type="submit">pesquisar</button>

            </form>
        </div>
    )
}
export default SearchForm