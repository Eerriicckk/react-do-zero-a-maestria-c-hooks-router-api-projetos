import "./App.css";
import loadingGif from "./loading.gif";

import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const { data: items, httpConfig, loading, error } = useFetch(url)

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 2 - add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    httpConfig(product, "POST")

    setName("");
    setPrice("");
  };

  const handleDeletar = (idProd) => {
    alert(idProd)
    httpConfig({}, "DELETE", `${url}/${idProd}`) 
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <image src={loadingGif} alt="loading" width="250px" />
      <ul style={{ display: "grid" }}>
        {error ? <span color="red">{error}</span> :
          loading || !items
            ? <>Carregando ...</>
            : items.map((product) => (
              <li key={product.id} style={{ display: "inline-grid" }}>
                {product.name} - R$: {product.price}
                <button style={{ marginLeft: 7 }} onClick={() => handleDeletar(product.id)}>deletar</button>
              </li>
            ))}
      </ul>

      <div className="add-product">
        <p>Adicionar produto:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Preço:
            <input
              type="number"
              value={price}
              name="price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <button type="submit" disabled={loading}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default App;