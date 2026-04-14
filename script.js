const botoesAdicionar = document.querySelectorAll(".adicionar"); // seleciona todos os botões com a classe "adicionar"
const listaPedido = document.getElementById("lista-pedido"); // pega a lista onde os itens serão mostrados
const totalElemento = document.getElementById("total"); // pega o elemento que mostra o total
const botaoLimpar = document.getElementById("limpar"); // pega o botão de limpar pedido

let total = 0; // variável que guarda o valor total do pedido

// ADICIONA CLICK NOS BOTÕES
botoesAdicionar.forEach((botao) => { // percorre todos os botões encontrados
  botao.addEventListener("click", () => { // adiciona evento de clique em cada botão

    const nomeServico = botao.getAttribute("data-nome"); // pega o nome do serviço do HTML
    const precoServico = parseFloat(botao.getAttribute("data-preco")); // pega o preço e converte para número

    const itemLista = document.createElement("li"); // cria um novo item de lista
    itemLista.textContent = `${nomeServico} - R$ ${precoServico.toFixed(2)}`; // define o texto do item
    listaPedido.appendChild(itemLista); // adiciona o item na lista

    total += precoServico; // soma o preço ao total
    totalElemento.textContent = `R$ ${total.toFixed(2)}`; // atualiza o valor total na tela
  });
});

//SIMULAÇÃO DE FINALIZAÇÃO DE PEDIDO

const botaoFinalizarPedido = document.getElementById("finalizar-pedido"); // pega o botão finalizar

//ADICIONA UM EVENTO DE CLIQUE AO BOTÃO DE FINALIZAR PEDIDO
botaoFinalizarPedido.addEventListener("click", () => { // quando clicar no botão

  alert("Pedido finalizado " + totalElemento.textContent); // mostra alerta com o total

  listaPedido.innerHTML = ''; // limpa todos os itens da lista

  total = 0; // zera o total

  totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`; // atualiza o total na tela
});

// LIMPA O PEDIDO
botaoLimpar.addEventListener("click", () => { // quando clicar no botão limpar
  listaPedido.innerHTML = ""; // limpa a lista
  total = 0; // zera o total
  totalElemento.textContent = "R$ 0.00"; // mostra o total zerado
});