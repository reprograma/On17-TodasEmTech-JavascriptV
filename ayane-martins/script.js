async function getCards() {
  const digitarCard = document.getElementById("pesquisar-digimon").value;

try{
  const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digitarCard}`);
  const card = await response.json();

  const nameCard = document.getElementById("digimon_nome");
  nameCard.innerText = "Nome: " + card[0].name;

  const imgCard = document.getElementById("imagem-digimon").src = card[0].img;

  const levelCard = document.getElementById("digimon_level");
  levelCard.innerText = "Level: " + card[0].level;   
}
catch(err) {
  alert("Não encontrei esse digimon 😭 Tenta de novo!");
}
}

async function listaNomes() {
  const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon`);
try {
  const nomes = await resposta.json();
  const divExibir = document.getElementById("div-id");
  const listaDigion = document.getElementById("lista-digimon");
  nomes.map((card) => {
      const name = document.createElement('p')
      name.innerText = card.name;
      divExibir.appendChild(listaDigion);
      listaDigion.appendChild(name);
  })
}
catch {
}
}
listaNomes();