import React, { useState } from 'react'
import "./demo2.css"
import Usuario from './Usuario'
//rfce 
//rafce 
function Demo2() {
    const [valor, setValor] = useState(0)
    const [usuario, setUsuario] = useState('')

  return (
    <div className='container-demo2'>
        <h2>useState</h2>
        <button onClick={() => {setValor(valor + 1)}}>+ </button>
        {valor}
        <button onClick={() => {setValor(valor - 1)}}> -</button>

        <button onClick={() => {setUsuario(prompt("Username:"))}}>Fazer login</button>
        {/* {usuario && <p>Olá {usuario}</p>} */}

        {/* {usuario ? <p>Olá {usuario}</p> : <p>Sem usuário</p>} */}
    
        {usuario && <Usuario username={usuario}/>}

    </div>
  )
}

export default Demo2