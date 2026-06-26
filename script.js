const botao = document.getElementById("temaBtn");

botao.addEventListener("click", function () {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

botao.textContent="Modo Claro";

}else{

botao.textContent="Modo Escuro";

}

});

const formulario=document.getElementById("formulario");

const mensagem=document.getElementById("mensagem");

formulario.addEventListener("submit",function(event){

event.preventDefault();

const nome=document.getElementById("nome").value;

if(nome===""){

mensagem.textContent="Digite seu nome.";

mensagem.style.color="red";

}else{

mensagem.textContent="Obrigado pela visita, "+nome+"!";

mensagem.style.color="green";

}

});
