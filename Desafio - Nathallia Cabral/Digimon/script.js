/// FUNÇÃO PARA LISTAR E BUSCAR OS CARDS ///

async function listDigimon() {
  try {

    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await response.json();

    data.map((cards) => {

      const listaDigimon = document.querySelector(".lista_digimon");
      const lista = document.createElement("ul");
      lista.className = "lista";
      lista.innerText = `${cards.name}`;
      listaDigimon.appendChild(lista);

    })


  } catch (erro) {

  }
}

listDigimon()


/// FUNÇÃO PARA MONTAR OS CARDS /// 

async function cardsDigimon() {
  try {
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${input.value}`, {
      method: 'GET',
    });

    const digimon = await response.json()

    const imagem = document.getElementById('digimon_image');
    imagem.setAttribute('alt', `Imagem do Digimon ${digimon}`);
    imagem.src = digimon[0].img;

    const digimonNome = document.getElementById('digimon_nome');
    digimonNome.innerText = digimon[0].name;

    const level = document.getElementById('digimon_level');
    level.setAttribute("class", `${digimon[0].level}`)
    level.innerText = ` Level:  ${digimon[0].level}`


  } catch (err) {
    alert("Ops! Não encontramos esse digimon!");
    return [];
  }
}

/// EVENTO DE CLICK PARA PODER IR BUSCAR O DIGIMON ///


const input = document.getElementById('digimon_input');
const botao = document.getElementById('search');


botao.addEventListener('click', (event) => {
  event.preventDefault();
  cardsDigimon();
  input.value = '';
});

input.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    cardsDigimon();
    input.value = '';
  }



});