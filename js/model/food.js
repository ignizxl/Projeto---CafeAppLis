/**
 * Carregar os itens de food do dataset para o LocalStorage.
 * @param {*} newFoods
 */
function load(newFoods) {
  // converte o json para string e salva no localStorega na chave foods-app:foods
  localStorage.setItem("foods-app:foods", JSON.stringify(newFoods));
}

/**
 * Ler todos os registros de food.
 * @returns json
 */
function readAll() {
  // resgata a string contendo as informações do arquivo .json
  const stringFood = localStorage.getItem("foods-app:foods");
  // converte a string para json para ficar mais manipulável
  return JSON.parse(stringFood);
}

// função para criar um id válido
function nextId() {
  // carrega a estrutura json em foods
  const foods = readAll();
  // utiliza o map para converter cada item do array (que está no objeto json) em um objeto diferente, neste caso só o respectivo id
  // logo em ids teremos uma array contendo apenas os ids dos objetos que estavam em foods
  const ids = foods.map((food) => food.id);

  // encontra o maior id
  const maxId = Math.max(...ids);

  // adiciona um no id encontrado, para esse novo número agora ser o próximo id a ser utilizado como chave
  return maxId + 1;
}

/**
 * Criar um novo registro de food.
 * @param {*} food
 * @returns food
 */
function create(food) {
  // cria um id válido e não utilizado
  let id = nextId();

  // dúvida, neste caso que não foi criado a partir de uma classe ainda é um objeto, dictionary, ou struct?
  // cria um objeto chamado food contendo os atributos necessários para criar um item do array
  food = { id: id, ...food };

  // recupera o restante do itens presentes no array
  const foods = readAll();

  // junta os itens que estavam no array com o novo item
  const newFoods = [...foods, food];

  // carrega todos os itens no localStorega sobreecrevendo o valor que estava na chave foods-app:foods
  load(newFoods);
  // retorna o objeto criado
  return food;
}

export default { load, readAll, create };
