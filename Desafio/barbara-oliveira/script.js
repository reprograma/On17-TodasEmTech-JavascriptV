const url = "https://digimon-api.vercel.app/api/digimon";
const api = axios.create({ baseURL: url });

const searchInput = document.getElementById("search");
const digimonImageEl = document.getElementById("digimonImage");
const digimonNameEl = document.getElementById("digimonName");
const digimonLevelEl = document.getElementById("digimonLevel");

async function fetchDigimonByName(name) {
  try {
    const response = await api.get(`/name/${name}`);
    return response.data;
  } catch (err) {
    alert("Ops! Não encontramos esse digimon!");
    return [];
  }
}

async function fetchSearchedDigimon() {
  const digimonName = searchInput.value.trim();

  const digimons = await fetchDigimonByName(digimonName);

  if (digimons.length > 0) {
    const { name, img, level } = digimons[0];

    digimonImageEl.setAttribute("src", img);
    digimonImageEl.setAttribute("alt", `Imagem do digimon ${name}`);
    digimonImageEl.setAttribute("title", `Imagem do digimon ${name}`);
    digimonImageEl.style.visibility = "visible";

    digimonNameEl.innerText = name;
    digimonLevelEl.innerText = level;
  }
}

const btn = document.querySelector("button");
btn.addEventListener("click", fetchSearchedDigimon);

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    fetchSearchedDigimon();
  }
});
