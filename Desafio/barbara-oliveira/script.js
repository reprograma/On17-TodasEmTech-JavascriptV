const url = "https://digimon-api.vercel.app/api/digimon";
const api = axios.create({ baseURL: url });

const searchName = document.getElementById("searchName");
const searchLevel = document.getElementById("searchLevel");
const digimonImageEl = document.getElementById("digimonImage");
const digimonNameEl = document.getElementById("digimonName");
const digimonLevelEl = document.getElementById("digimonLevel");
const btnName = document.getElementById("btnName");
const btnLevel = document.getElementById("btnLevel");

async function fetchDigimonByName(name) {
  try {
    const response = await api.get(`/name/${name}`);
    return response.data;
  } catch (err) {
    alert("Ops! Não encontramos esse digimon!");
    return [];
  }
}

async function fetchDigimonByLevel(level) {
  try {
    const response = await api.get(`/level/${level}`);
    return response.data;
  } catch (err) {
    alert("Ops! Não encontramos esse digimon!");
    return [];
  }
}

async function fetchSearchedDigimon(searchType) {
  const digimonName = searchName.value.trim();
  const digimonLevel = searchLevel.value.trim();

  let digimons = [];

  if (searchType === "name") {
    digimons = await fetchDigimonByName(digimonName);
  } else {
    digimons = await fetchDigimonByLevel(digimonLevel);
  }

  if (digimons.length > 0) {
    const randomIndex = Math.floor(Math.random() * digimons.length);
    const { name, img, level } = digimons[randomIndex];

    digimonImageEl.setAttribute("src", img);
    digimonImageEl.setAttribute("alt", `Imagem do digimon ${name}`);
    digimonImageEl.setAttribute("title", `Imagem do digimon ${name}`);
    digimonImageEl.style.visibility = "visible";

    digimonNameEl.innerText = name;
    digimonNameEl.style.textAlign = "center";
    digimonLevelEl.innerText = level;
    digimonLevelEl.style.textAlign = "center";
  }
}

btnName.addEventListener("click", () => fetchSearchedDigimon("name"));
btnLevel.addEventListener("click", () => fetchSearchedDigimon("level"));

searchName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchSearchedDigimon("name");
  }
});

searchLevel.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchSearchedDigimon("level");
  }
});
