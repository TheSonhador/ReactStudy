import React, { useState } from 'react';

function ClickCounter() {
  // Estados para os contadores
  const [divCount, setDivCount] = useState(0);
  const [buttonCount, setButtonCount] = useState(0);

  // Funções para incrementar os contadores
  const handleDivClick = () => {
    setDivCount((prevCount) => prevCount + 1);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation(); // Previne que o clique no botão incremente o contador da div
    setButtonCount((prevCount) => prevCount + 1);
  };

  return (
    <div onClick={handleDivClick} style={{ padding: '20px', border: '1px solid black' }}>
      <p>Contador da Div: {divCount}</p>
      <button onClick={handleButtonClick}>Clique aqui</button>
      <p>Contador do Botão: {buttonCount}</p>
    </div>
  );
}

export default ClickCounter;
