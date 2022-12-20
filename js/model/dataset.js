// a ideia aqui basicamente é tentar converter um conjunto de dados de comida de modo 'gráfico' por assim dizer...
// aqui abaixo tem um array, que é composto por 4 objetos e cada um desses objetos, representam uma imagem de uma comida
// cada objeto tem o seu id, que é sua identificação, isso vai facilitar na hora de manipular os elementos com js
// seu name: nome do objeto, image. seu caminho de imagem, que são as imaggens dispiniveis na pasta 'imagem' como está no git hub
// e por fim, sua description, que é uma descrição alternativa do objeto

//pra não ficar repetitivo, o que foi dito aqui serve pra todos os objetos

//estrutura do array
const dataset = [
  //estrutura do objeto (e também elemento do array)
  {
    id: 1, //identificação
    name: "Hambúrguer", //nome
    image: "images/hamburguer.jpg", //caminho de imagem(imagem disponivel na pasta 'imagem')
    //descrição alternativa
    description:
      "Um hambúrguer é um sanduíche que consiste em um ou mais hambúrgueres cozidos de carne moída, geralmente carne bovina, colocados dentro de um pão ou pão fatiado. O hambúrguer pode ser frito, grelhado, defumado ou grelhado",
  },
  {
    id: 2,
    name: "Sanduíche",
    image: "images/sanduiche.jpg",
    description:
      "O sanduíche (do inglês sandwich), também popularmente chamado de sanduba (português brasileiro) ou sandes (português europeu), é um tipo de alimento que consiste em duas fatias de um pão inteiro, entre as quais é colocada carne, queijo ou outro tipo de alimento.Os sanduíches são, habitualmente, consumidos ao lanche ou como uma refeição rápida, durante o almoço ou o jantar.",
  },
  {
    id: 3,
    name: "Café",
    image: "images/cafe.jpg",
    description:
      "O café é uma bebida produzida a partir dos grãos torrados do fruto do cafeeiro. É servido tradicionalmente quente, mas também pode ser consumido gelado. O café é um estimulante, por possuir cafeína — geralmente 80 a 140 mg para cada 207 ml dependendo do método de preparação.",
  },
  {
    id: 4,
    name: "Suco",
    image: "images/suco.jpg",
    description:
      "Um suco (português brasileiro) ou sumo (português europeu) é uma bebida produzida do líquido extraído de frutos. Além dos frutos, sucos também podem ser obtidos pelo processamento de outras partes dos vegetais, tais como folhas, talos ou raízes.",
  },
];

//aqui ele está fazendo a exportação default como dataset
export default dataset;
