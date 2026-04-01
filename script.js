const botoesAdicionar = document.querySelectorAll(".adicionar");
const listaPedido = document.getElementById("lista-pedido");
const totalElemento = document.getElementById("total");
const botaoLimpar = document.getElementById("limpar");

let total = 0;

// ADICIONA CLICK NOS BOTÕES
botoesAdicionar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const nomeServico = botao.getAttribute("data-nome");
    const precoServico = parseFloat(botao.getAttribute("data-preco"));

    const itemLista = document.createElement("li");
    itemLista.textContent = `${nomeServico} - R$ ${precoServico.toFixed(2)}`;
    listaPedido.appendChild(itemLista);

    total += precoServico;
    totalElemento.textContent = `R$ ${total.toFixed(2)}`;
  });
});

//SIMULAÇÃO DE FINALIZAÇÃO DE PEDIDO
//SELECIONA O BOTÃO "FINALIZAR PEDIDO"
const botaoFinalizarPedido = document.getElementById("finalizar-pedido");

//ADICIONA UM EVENTO DE CLIQUE AO BOTÃO DE FINALIZAR PEDIDO
botaoFinalizarPedido.addEventListener("click", () => {

    //EXIBE UM ALERTA INDICANDO QUE O PEDIDO FOI FINALIZADO 
    alert("Pedido finalizado " + totalElemento.textContent);

    //LIMPA A LISTA DE PEDIDOS, REMOVENDO TODOS OS ITENS
    listaPedido.innerHTML = '';

    //RESETA O TOTAL PARA ZERO
    total = 0;

    //ATUALIZA O TEXTO DO TOTAL PARA REFLETIR A MUDANÇA
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
});

// LIMPA O PEDIDO
botaoLimpar.addEventListener("click", () => {
  listaPedido.innerHTML = "";
  total = 0;
  totalElemento.textContent = "R$ 0.00";
});