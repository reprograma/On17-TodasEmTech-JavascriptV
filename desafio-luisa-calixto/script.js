const digimonCard = document.querySelector(".digimon_card");
const digimonselect = document.querySelector("#digimon_list");
const digimonImage = document.querySelector(".digimon_image");
const digimonName = document.querySelector(".digimon_name");
const digimonLevel = document.querySelector(".digimon_level");

async function getDigimons() {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`
    );
    const digimonData = await response.data;

    renderDigimonInList(digimonData);
  } catch (err) {
    alert("Erro ao carregar lista, tente novamente !");
  }
}

async function renderDigimonInList(digimons) {
  const digimonList = document.querySelector("#digimon_list");
  digimons.map((digimon) => {
    const elementList = document.createElement("option");
    elementList.innerHTML = digimon.name;
    digimonList.appendChild(elementList);
  });
}

digimonselect.addEventListener("change", () => {
  let value = digimonselect.options[digimonselect.selectedIndex].text;

  getDigimonByName(value);
});

async function getDigimonByName(digimonName) {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`
    );
    const digimon = await response.data;

    renderDigimon(digimon);
  } catch (err) {
    alert("Erro ao localizar o digimon, tente novamente !");
  }
}

async function renderDigimon(digimon) {
  document.querySelector(".digimon_card").style.setProperty("display", "flex");
  digimonImage.setAttribute("src", digimon[0].img);

  digimonName.innerHTML = `<b>${digimon[0].name}</b>`;
  digimonLevel.innerHTML = `<b>Level:</b> ${digimon[0].level}`;

  digimonCard.appendChild(digimonImage);
  digimonCard.appendChild(digimonName);
  digimonCard.appendChild(digimonLevel);
}

getDigimons();
