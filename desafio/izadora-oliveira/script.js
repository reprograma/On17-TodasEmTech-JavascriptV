const digimonCard = document.getElementById("digimon_card");
const digimonSelect = document.getElementById("list_digimon");

async function getDigimon() {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`,
    );
    const digimonData = await response.data;

    respoDigimon(digimonData);
  } catch (err) {
    alert("Sem Digimon! Carregue a página novamente");
  }
}

async function respoDigimon(digimons) {
  const digimonList = document.querySelector("#list_digimon");
  digimons.map((digimon) => {
    const elementList = document.createElement("option");    
    elementList.innerHTML = digimon.name;
    digimonList.appendChild(elementList);
  });
}

digimonSelect.addEventListener("change", () => {
  let value = digimonSelect.options[digimonSelect.selectedIndex].text;

  getDigimonByName(value);
});

async function getDigimonByName(digimonName) {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`,
    );
    const digimon = await response.data;

    renderDigimon(digimon);
  } catch (err) {
    alert("Sem Digimon! Carregue a página novamente");
  }
}


getDigimon();
