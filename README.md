Anotações de PL
____________________________________________________________________________

npm install -g npm@10.4.0 >>> instala o npm

npx create-react-app (nome do projeto) >>> cria um projeto

npm start >>> roda o servidor

npm install 

---------------------------------------------------------- dia 23/02 ----------------------------------------------------------
-> como rodar:
	- digitar "localhost:3000" no navegador


-> como comentar:
	- usar "//"


-> dentro do return de App.js:
	- Não pode retornar mais de uma tag, mas pode retornar várias tags se forem colocadas dentro de uma única tag (ex: o "header", o "img" e "p" que estão dentro da "div")

-> Como criar um novo componente:

vai no index.js e adiciona um novo componente dentro de "React.StrictMode" e importa ele lá encima ex ("Teste"):

	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import './index.css';
	import Teste from './Teste';
	import reportWebVitals from './reportWebVitals';

	const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
  		<React.StrictMode>
    			<Teste/>
  		</React.StrictMode>
	);

-> Como criar um modulo css:

criar um arquivo css com o mesmo nome do componente e importá-lo no arquivo do componente ex ("Teste"):

import './Teste.css'

	function nome (){
    		return(
        		<>
        			<p className="Texto"> opa </p>
        		</>


	    )

	}

export default nome

---------------------------------------------------------- dia 01/03 ----------------------------------------------------------

-> Pode ter várias funções dentro de um único arquivo;

-> uma função pode ser chamada (não criada) dentro de outra função
   ex: function Função() {
		return (
			<teste/>
		)
	}

-> "função nomeada" é toda função que não é a padrão dentro do arquivo;

-> para chamar uma fução que não é padrão, é só fazer o import normal e adicionar o nome da função entre chaves
   ex: import {Funcao} from './Teste';

-> sempre que algo estiver dentro de "{}" significa que tudo lá dentro é javascript

---------------------------------------------------------- dia 08/03 ----------------------------------------------------------

-> O componente pode ter atributos (chamados de props);

-> Os props são opcionais;

-> Os props são bem parecidos com objetos, ou seja, eles vão armazenar vários valores da seguinte forma: props.name, props.foto

exemplo de como passar props (o nome e o retrato vão estar dentro de props):
	<Teste nome = " " retrato = foto>
	function Teste (props)  

-> Exemplo de como as coisas dentro do props podem ser chamadas:

export function Funcao (props)
            <p>{props.texto}</p>
            <img src={props.foto} alt="Isso eh um Panda 100% normal"/>


-> como mandar as variáveis idependentes sem precisar usar o props: 

export function Funcao ({texto, foto})
            <p>{texto}</p>
            <img src={foto} alt="Isso eh um Panda 100% normal"/>

-> dá para juntar todas as variáveis em um único objeto tmb: 

---------------------------------------------------------- dia 15/03 ----------------------------------------------------------

dropdown: quantidade e texto

butão que direciona para algum página, o link,
type

---------------------------------------------------------- dia 22/03 -> Children ----------------------------------------------------------

-> conceito de "children": é quando um componente (children) é passado para outro componente;

-> a "children" é passada por meio de "{}";

-> exemplo de como implementar:

 export default function Nav({children})

	return(
		<nav>
			{children}
		</nav>
	)


-> exemplo de como chamar:

 <Nav>
	<Dropdown lista = {nomes} titulo = {menus}/>
 </Nav>

---------------------------------------------------------- dia 22/03 -> PropTypes ----------------------------------------------------------

-> Para habilitar o uso de propTypes: npm install --save prop-types

-> Conceito de propTypes: propTypes indica qual tipo deve ser os props passados, se é obrigatório etc.

-> exemplo: do componente 'Usuario'


