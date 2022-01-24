import './App.css';
import React, { useState } from "react";

export default function App(){

    const [livros, setLivros] = useState([
        { id: 1, nomeLivro: "Primerios Passos com React", nomeAutor: 'Stoyan Stefanov', anoPublicacao: '2016'},
        { id: 2, nomeLivro: "React Aprenda Praticando", nomeAutor: 'Maurício Samy Silva', anoPublicacao: '2021'}
    ]);

    function addLivro(novoLivro, novoAutor, novoAnoPublicacao){
      const newLivro = {id: Math.random(), nomeLivro: novoLivro, nomeAutor: novoAutor, anoPublicacao: novoAnoPublicacao};
      console.log(newLivro);
      setLivros([...livros, newLivro]);
    }

    return (
        <div className='App'>
          <div className='Lista'>
            <ul>
                {livros.map((livro) => (
                    <li key={livro.id}>{livro.nomeLivro} - {livro.nomeAutor} - {livro.anoPublicacao}</li>
                ))}
            </ul>
          </div>
          
          <div>
            <form className='Formulario'>
            <fieldset>

                <label>Nome do Livro:
                  <input className='Input' id='novoLivro' name='novoLivro' placeholder='Digite o nome do livro'></input>
                </label>
                <br/>
                

                <label>Nome do Autor:
                  <input className='Input' id='novoAutor' name='novoAutor' placeholder='Digite o nome do autor'></input>
                </label>
                <br/>

                <label>Ano de Publicação:
                  <input className='Input' id='novoAnoPublicacao' name='novoAnoPublicacao' placeholder='Digite o ano de publicação'></input>
                </label>
                <br/>

                <br/>
                
                <div>
                  <button className='Botao' type='button' onClick={() => addLivro(document.querySelector("#novoLivro").value, document.querySelector("#novoAutor").value, document.querySelector("#novoAnoPublicacao").value)}>Adicionar Livro</button>
                  {/* <button className='Botao' type='button' onClick={() => addLivro(document.getElementById("novoLivro").value, document.getElementById("novoAutor").value, document.getElementById("novoAnoPublicacao").value)}>Adicionar Livro</button> */}
                </div>

                <input className='Botao' type="reset" value="Limpar"></input>
                
            </fieldset>
            </form>
          </div>
        </div>
    );
}
