// com a utilização do index no nome, o React reconhece automaticamente o arquivo na pasta,
//sem precisar passar ele no caminho
import { useState } from 'react'

import Perfil from './components/perfil'
import ReposList from './components/ReposList'
function App() {
  const [nomeInserido, setInserirNome] = useState('')

  return (
    <>
    <h2 className='text-input container'>Insira o nome do usuario que voce deseje proucurar </h2>
    <input type="text" onBlur={(e) => setInserirNome(e.target.value)}  
    placeholder='Digite o usúario desejado pesquisar' 
    className='input-name container'/>
    {nomeInserido.length > 4 && (
      <>
      <Perfil  nomeUsuario={nomeInserido} />
      <ReposList userName={nomeInserido}/>
      </>
    )}

    {/* {
    formularioEstaVisivel && (
      <Formulario/>
    )}

    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Deixar o formulario invisivel</button> */}

    </>
  )
}

export default App
