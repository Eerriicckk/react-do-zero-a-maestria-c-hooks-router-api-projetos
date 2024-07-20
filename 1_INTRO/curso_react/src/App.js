// import logo from './logo.svg';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';

import './App.css';
import Eventos from './components/Eventos';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1>Hello world react!</h1>
      <h2 className="testeH2">h2h2h2</h2>
      <FirstComponent/>
      <TemplateExpressions/>
      <Eventos/>
      <br /><br /><br />
      <Challenge/>
    </div>
  );
}

export default App;
