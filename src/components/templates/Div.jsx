import React from 'react'

export default props =>
<div className="jumbotron">
<h1 className="display-4 ">Divisão</h1>
<p className="text-muted">Este é um componente em ReactJS para fazer
a divisão de 2 números.</p>
<form>
  <div className="row">
    <div className="col">
      <label>Nº</label>
      <input type="number" id="n1" placeholder='Digite um número'/>
    </div>
  </div>
  <div className="row pt-5">
    <div className="col">
      <label>Nº</label>
      <input type="number" id="n2" placeholder='Digite um número'/>
    </div>
  </div>
  <hr/>
  <button className="btn btn-primary btn-lg" onClick={sub}>DIVIDIR</button>
</form>
<hr/>
<h5>Resultado aqui</h5>
<div id="resultado"></div>

</div>
function sub(){
     let n1 = parseInt(document.getElementById('n1').value)
     let n2 = parseInt(document.getElementById('n2').value)
     document.getElementById('resultado').innerHTML = n1 / n2
     
}