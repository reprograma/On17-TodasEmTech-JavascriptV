const exemplos = document.getElementById("exemplos");
const input = document.getElementById("input-procurar");
const botao = document.getElementById("botao-procurar");
const container = document.getElementById("container");
const url = "https://digimon-api.vercel.app/api/digimon";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const nomes = data.map((digimon) => digimon.name);
    const stringNomes = nomes.slice(0, 30).join(", ");
    exemplos.innerText += " " + stringNomes + ".";
  });

const funcaoBotao = async () => {
  try {
    const nome = input.value;
    if (nome === "") {
      alert("digite algo");
    }
    const response = await fetch(url + "/name/" + nome);
    const [digimon] = await response.json();

    const nomeDigimon = document.createElement("h2");
    const imagemDigimon = document.createElement("img");
    const levelDigimon = document.createElement("p");

    levelDigimon.setAttribute("class", "levelDigimon");
    nomeDigimon.setAttribute("class", "nomeDigimon");

    nomeDigimon.innerText = digimon.name;
    imagemDigimon.setAttribute("src", digimon.img);
    levelDigimon.innerText = digimon.level;
    container.innerHTML = "";
    container.appendChild(nomeDigimon);
    container.appendChild(imagemDigimon);
    container.appendChild(levelDigimon);
  } catch (err) {
    alert("Esse nome não foi encontrado");
  }
};

//botao.setAttribute("onclick", funcaoBotao);
botao.onclick = funcaoBotao;
