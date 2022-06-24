const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");
const input = document.querySelector("#name");
const btn = document.querySelector("button");

btn.addEventListener("click", handleClick);

function handleClick(e){
  e.preventDefault()
  // console.log(input.value);
  const nameDigimon = input.value; //Koromon
  searchDigimon(`https://digimon-api.vercel.app/api/digimon/name/${nameDigimon}`); 

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

  async function searchDigimon(url){
    try{
      const response = await fetch(url, 
        // {
      // headers: {
      //   'Content-Type': 'application/json'
      //   }
      // }
      )
      const dataDigimon = await response.json();
      console.log(dataDigimon)
     
      dataDigimon.forEach(element => {
        // console.log(element)
        titleName.innerText = `Nome: ${element.name}`;
        level.innerHTML = `<strong>Level</strong>: ${element.level}`;
        image.src = element.img;   
      });
    }
    catch(e){
      console.error(e)
    }
  }
}


