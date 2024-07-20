import logo from './logo.svg';
import './App.css';
import FormTeste from './components/FormTeste';

function App() {
  return (
    <div className="App">
      <h2>form</h2>
      <FormTeste user={{nome:"erick", email:"erickrumpel67@gmail.com"}} />
    </div>
  );
}

export default App;
