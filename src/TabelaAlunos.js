import React, { useState } from 'react';
import { alunos } from './alunos';

const TabelaAlunos = () => {
  const [turmaSelecionada, setTurmaSelecionada] = useState('');

  const handleTurmaChange = (event) => {
    setTurmaSelecionada(event.target.value);
  };

  // Filtra os alunos com base na turma selecionada ou mostra todos se a seleção estiver em branco
  const alunosFiltrados = turmaSelecionada
    ? alunos.filter((aluno) => aluno.turma === turmaSelecionada)
    : alunos;

  return (
    <div>
      <h1>Tabela de Alunos</h1>
      
      {/* Caixa de seleção de turmas */}
      <select onChange={handleTurmaChange} value={turmaSelecionada}>
        <option value="">Todas as turmas</option>
        <option value="A">Turma A</option>
        <option value="B">Turma B</option>
        <option value="C">Turma C</option>
      </select>

      {/* Tabela de alunos */}
      <table border="1">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Turma</th>
            <th>Idade</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {alunosFiltrados.map((aluno, index) => (
            <tr key={index}>
              <td>{aluno.nome}</td>
              <td>{aluno.turma}</td>
              <td>{aluno.idade}</td>
              <td>{aluno.descricao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaAlunos;
