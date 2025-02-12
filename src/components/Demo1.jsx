import './Demo1.css'
import { FcBiotech } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

function Demo1() {
  function responderClique(){
    alert("Parabéns pelo clique!")
  }

  return (
    <div className='container-demo1'>
        <button onClick={responderClique}>Clique aqui</button>
        <button onClick={() => {alert("Arrow function")}}> ➡️ </button>

        <img className='img-dev' src="./imagens/programador.svg" alt="" />
        <FcBiotech /><FcOk />
    </div>
  )
}

export default Demo1