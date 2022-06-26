async function getCards() {
  const digitarCard = document.getElementById("digimon_busca").value;

  try {
    const response = await fetch(
      `https://digimon-api.vercel.app/api/digimon/name/${digitarCard}`
    );
    const card = await response.json();

    const nameCard = document.getElementById("digimon_name");
    nameCard.innerText = card[0].name;

    const imgCard = (document.getElementById("digimon_image").src =
      card[0].img);

    const levelCard = document.getElementById("digimon_level");
    levelCard.innerText = card[0].level;
  } catch (err) {
    console.error(err);
  }
}

async function listaNomes() {
  const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon`);
  try {
    const nomes = await resposta.json();
    const lista = nomes.slice(0, 40);
    const listagemDigimon = document.getElementById("listagem_digimon");
    console.log(lista);
    lista.map((card) => {
      const name = document.createElement("p");
      name.innerText = card.name;
      console.log(card.name);
      listagemDigimon.appendChild(name);
    });
  } catch {}
}

listaNomes();
