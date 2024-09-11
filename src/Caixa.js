import React from 'react';

// Componente Caixa que usa a propriedade children
const Caixa = (props) => {
  return (
    <div style={styles.caixa}>
      <h2>{props.titulo}</h2>
      <div style={styles.conteudo}>
        {props.children}
      </div>
    </div>
  );
};

const styles = {
  caixa: {
    border: '2px solid #000',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    maxWidth: '400px',
  },
  conteudo: {
    marginTop: '10px',
  },
};

export default Caixa;
