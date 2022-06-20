const sectionContainer = document.querySelector(".section_container");
const selectContainer = document.querySelector(".select_container");

async function getDigimons() {
  try {
    const response = await axios.get(
      `https://digimon-api.vercel.app/api/digimon`
    );
    const digimonData = await response.data;

    return renderDigimonInList(digimonData);
  } catch {}
}

async function renderDigimonInList(digimons) {
  const digimonList = document.querySelector("#digimon_list");
  digimons.map((digimon) => {
    const elementList = document.createElement("option");
    elementList.innerHTML = digimon.name;
    digimonList.appendChild(elementList);
  });
  return renderDigimon(digimonList);
}

async function renderDigimon(digimon) {
  const digimonContainer = document.querySelector(".digimon_container");

  digimon.addEventListener("change", () => {
    let value = digimon.options[digimon.selectedIndex].value.toLowerCase();

    const digimonCard = document.createElement("div");
    digimonCard.className = "digimon_card";
    digimonCard.style.width = "65%";
    digimonCard.style.height = "50%";
    digimonCard.style.backgroundColor = "transparent";
    digimonCard.style.border = "solid rgb(47	70	156		)";
    digimonContainer.appendChild(digimonCard);

    let digimonImage = document.createElement("img");
    digimonImage.className = "digimon_image";
    digimonImage.setAttribute(
      "src",
      `https://digimon.shadowsmith.com/img/${value}.jpg`
    );
    digimonCard.appendChild(digimonImage);

    digimon.addEventListener("change", () => {
      digimonContainer.removeChild(digimonCard);
    });
  });
}

getDigimons();
