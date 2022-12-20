// importe do modulos, objetos ou bibliotecas necessárias
import itens from "./model/dataset.js";
import foodsModel from "./model/foods.js";

// útiliza a função load de food.js para carregar o conteúdo do arquivo json para uma string no localStorege
foodsModel.load(itens);
// add em foods um objeito json manipulável, obtido a partir da conversão da string que está no localStorage
let foods = foodsModel.readAll();

//
function initFoodsCard() {
  // Varre o array foods para usar a função que criar os elementos html que irão exibir as respectivas informações
  for (let item of foods) {
    // função que cria os elementos html para cada item do array
    const view = createFoodCardItem(item);

    //pega o elemento html pela tag de onde será inserido o elemento html criado
    let itensCardapio = document.getElementById("itens-cardapio");
    // insere o elemento html na página cardapio.html na teg itens-cardapio
    itensCardapio.insertAdjacentHTML("beforeend", view);
  }
}

// Cria uma class html com os respectivos elementos html necessários para exibir as informações de um elemento do array
function createFoodCardItem(item) {
  // armazena em view um elemento html
  const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

  return view;
}

// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
const foodForm = document.getElementById("foodForm");

foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();

  // armazena em newFood as informações do formulário de uma novo objeto utilizando lógica chave-valor.
  let newFood = Object.fromEntries(new FormData(foodForm));
  // salva informação no banco local (tanto localStorage quando no array que está sendo utilizado)
  foodsModel.create(newFood);

  // Cria um elemento html apenas para o novo item
  const foodCard = createFoodCardItem(newFood);
  //pega o elemento html pela tag de onde será inserido o elemento html criado
  let itensCardapio = document.getElementById("itens-cardapio");
  // insere o novo elemento html
  itensCardapio.insertAdjacentHTML("beforeend", foodCard);
};

initFoodsCard();
