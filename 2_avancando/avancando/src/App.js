
import { useState } from 'react';
import './App.css';
import Books from "./assets/books.jpg"
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import PropsTeste from './components/propsTeste';
import UserDetails from './components/UserDetails';

function App() {
  const [pessoas, setPessoas] = useState([{ nome: "erick", idade: 17, profissao: "garoto de programa" },{ nome: "arthur", idade: 20, profissao: "psicopata" },{ nome: "20", idade: 20, profissao: "maromba" }])
  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div >
        {/* {imagem em public} */}
        public
        <img src="/tyto.jpg" alt="tyto furcata" width="250px" />
      </div>
      <div >
        {/* {imagem em assets} */}
        assets
        <img src={Books} alt="book_shelf" width="250px" />
      </div>
      <div>
        {/* <ManageData/>
        <ListRender/>
        <ConditionalRender/> */}
        <PropsTeste prop3={"fgfg"} prop1={"rtrt"} prop2={12} />
        {pessoas.map((pessoa) => (
          <UserDetails nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao} maiorDeIdade={pessoa.idade >= 18}/>
        ))}
      </div>

    </div>
  );
}

export default App;
