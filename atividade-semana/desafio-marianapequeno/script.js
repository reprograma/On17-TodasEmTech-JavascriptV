const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");
const input = document.querySelector("#name");
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick(e){
  e.preventDefault()
  searchDigimon(input.value); //Koromon
  // form.reset();
  console.log(input.value);
}

async function searchDigimon(name){
  try{
    const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
    const dataDigimon = await response.json();

    const container = document.createElement("div");
    mainContent.appendChild(container);
    container.classList.add("container");
    const titleName = document.createElement("h2");
    container.appendChild(titleName);
    titleName.classList.add("title-nome");
    const level = document.createElement("span");
    container.appendChild(level);
    level.classList.add("level");
    const image = document.createElement("img");
    container.appendChild(image);
    image.classList.add("image");

    titleName.innerText = `Nome: ${dataDigimon.name}`;
    level.innerHTML = `<strong>Level</strong>: ${dataDigimon.level}`;
    image.src = dataDigimon.img;   
  }
  catch(e){
    console.error(e);
  }
}
