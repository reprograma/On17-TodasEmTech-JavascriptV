
const url = "https://digimon-api.vercel.app/api/digimon";
const api = axios.create({ baseURL: url });

const searchName = document.getElementById("txtBusca");
const btnBusca = document.getElementById("btnBusca");
const digimonImageEl = document.getElementById("digimonImage");
const digimonNameEl = document.getElementById("digimonName");



async function fetchDigimonByName(name) {
    try {
      const response = await api.get(`/name/${name}`);
      return response.data;
    } catch (err) {
      alert("Ops! Não encontramos esse digimon!");
      return [];
    }
  }

  async function fetchSearchedDigimon(searchType) {
    const digimonName = searchName.value.trim();
  
    let digimons = [];
  
    if (searchType === "name") {
      digimons = await fetchDigimonByName(digimonName);
    } else {
        return [];
    }

    if (digimons.length > 0) {
        const randomIndex = Math.floor(Math.random() * digimons.length);
        const { name, img,} = digimons[randomIndex];
    
        digimonImageEl.setAttribute("src", img);
        digimonImageEl.setAttribute("alt", `Imagem do digimon ${name}`);
        digimonImageEl.setAttribute("title", `Imagem do digimon ${name}`);
        digimonImageEl.style.visibility = "visible";
    
        digimonNameEl.innerText = name;
        digimonNameEl.style.textAlign = "center";
        digimonNameEl.style.color = "white";
        digimonLevelEl.style.textAlign = "center";
      }
    }

    btnBusca.addEventListener("click", () => fetchSearchedDigimon("name"));

    searchName.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          fetchSearchedDigimon("name");
        }
      });