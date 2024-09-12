import './App.css';
import ClickCounter from './ClickCounter';
// import Contador from './Contador';
// import Caixa from './Caixa';
import TabelaAlunos from './TabelaAlunos';

function App() {
  return (
    <div className="App">

      {/* <TabelaAlunos /> */}
      <ClickCounter />


      {/* <Contador titulo="Contador Simples" /> */}

      {/* <h1>Exemplo de Uso de Children</h1>

      <Caixa titulo="Caixa 1">
        <p>Este é um parágrafo dentro da primeira caixa.</p>
        <button>Clique aqui</button>
      </Caixa>

      <Caixa titulo="Caixa 2">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Caixa>

      <Caixa titulo="Caixa 3">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Imagem Exemplo"
          style={{ borderRadius: '8px' }}
        />
      </Caixa> */}
    </div>
  );
}

export default App;
