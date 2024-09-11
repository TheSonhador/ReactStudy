import React, { useState } from 'react';

// Componente funcional
const Contador = (props) => {
  // Estados para o contador, dropdown e tema (modo claro/escuro)
  const [contador, setContador] = useState(0);
  const [selecao, setSelecao] = useState('Opção 1');
  const [modoEscuro, setModoEscuro] = useState(false);

  // Funções para incrementar e decrementar o contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  // Função para lidar com a mudança de seleção do dropdown
  const handleSelectChange = (event) => {
    setSelecao(event.target.value);
  };

  // Função para alternar o modo claro e escuro
  const alternarTema = () => {
    setModoEscuro(!modoEscuro);
  };

  // Definir estilos condicionalmente com base no tema
  const estilosPagina = {
    backgroundColor: modoEscuro ? '#333' : '#fff',
    color: modoEscuro ? '#fff' : '#000',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={estilosPagina}>
      <h1>{props.titulo}</h1>
      <p>Valor do Contador: {contador}</p>
      <button onClick={incrementar} style={styles.botao}>Incrementar</button>
      <button onClick={decrementar} style={styles.botao}>Decrementar</button>
      
      <div>
        <label htmlFor="dropdown">Selecione uma opção:</label>
        <select id="dropdown" value={selecao} onChange={handleSelectChange} style={styles.dropdown}>
          <option value="Opção 1">Opção 1</option>
          <option value="Opção 2">Opção 2</option>
          <option value="Opção 3">Opção 3</option>
        </select>
      </div>

      <p>Você selecionou: {selecao}</p>

      <button onClick={alternarTema} style={styles.botao}>
        {modoEscuro ? 'Modo Claro' : 'Modo Escuro'}
      </button>
    </div>
  );
};

// Estilos fixos para botões e dropdown
const styles = {
  botao: {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  dropdown: {
    margin: '10px',
    padding: '5px',
    fontSize: '16px',
  },
};

export default Contador;
