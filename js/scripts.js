const limpar = document.querySelector("#limpar")

limpar.addEventListener("click", function () {
  location.reload();
});


const calcular = document.querySelector("#calcular")

calcular.addEventListener("click", function () {
  const investInicial = document.getElementById("investimento-inicial").value
  const durabilidade = document.getElementById("durabilidade").value
  const qtdReafiacoes = document.getElementById("quantidade-reafiacoes").value
  const valorAfiacao = document.getElementById("valor-afiacao").value
  let custoAlicateAfiacoes = 0 

  const vidaUtil = durabilidade * qtdReafiacoes

  let resultado = document.getElementById("div-resultado-calculo")
  resultado.classList.remove("d-none")

  let clones = document.querySelectorAll('.clonado');
  for (let i = 0; i < clones.length; i++) {
    clones[i].parentNode.removeChild(clones[i]);
  }

  if ((ehNumeroMaiorZero(qtdReafiacoes)) &&
      (ehNumeroMaiorZero(valorAfiacao)) &&
      (ehNumeroMaiorZero(investInicial)) &&
      (ehNumeroMaiorZero(vidaUtil))) {

    custoAlicateAfiacoes = (qtdReafiacoes * valorAfiacao) + parseFloat(investInicial)
    const custoAlicateAfiacoesFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(custoAlicateAfiacoes)

    const custoDia = custoAlicateAfiacoes / vidaUtil
    const custoDiaFormat = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(custoDia)

    imprimeResultadoItem("Vida útil do alicate: " + vidaUtil + " dias / " + (vidaUtil/365).toFixed(1) + " ano(s)", resultado);
    imprimeResultadoItem("Custo do Alicate + Afiações: " + custoAlicateAfiacoesFormat, resultado);
    imprimeResultadoItem("Custo por dia: " + custoDiaFormat, resultado)
  }
  else{
    imprimeResultadoItem("Informe os dados para o cálculo", resultado);
  }
})

function ehNumeroMaiorZero(num) {
  if (num>0) { 
    return true
  }
  return false
}

function imprimeResultadoItem(item, nodePai){
  let itemResultado = document.querySelector("#item-resultado .template").cloneNode(true)
  itemResultado.textContent = item
  itemResultado.classList.remove("d-none")
  itemResultado.classList.remove("template")
  itemResultado.classList.add("clonado")
  nodePai.appendChild(itemResultado)
}

