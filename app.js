let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function consoleBtnClick() {
  console.log("O botão foi clicado");
}

function alertBtnClick() {
  console.log("O botão foi clicado");
  alert("Eu amo JS");
}

function promptBtnClick() {
  let cidade = prompt("Insira a cidade");
  let message = alert(`Estive em ${cidade} e lembrei de você`);
}

function sumBtnClick() {
  var n1 = parseInt(prompt("Insira a primeira variável"));
  var n2 = parseInt(prompt("Insira a segunda variável"));

  if(!isNaN(n1) && !isNaN(n2)){
    var message = n1 + n2;
    alert(`O resultado é ${message}`)
  }else{
    alert("Prompt inválido, tente outra vez")
  }
}