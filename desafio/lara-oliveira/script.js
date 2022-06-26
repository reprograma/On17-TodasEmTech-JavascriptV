const list = document.querySelector(".digi-list");
const selectDig = document.querySelector(".select-dig");
const input = document.querySelector(".input");
const digiBtn = document.querySelector(".digi-btn");
const selected = document.querySelector(".selected");

// função para chamar somente os nomes dos digimons.
async function getNames() {
    try{
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const names = await response.json();
        //console.log(names);

        names.map((eachName) => {
            const digiName = document.createElement("div");
            digiName.setAttribute("class", "digi-name");
            
            const ulName = document.createElement("ul");
            ulName.setAttribute("class", "ul-name");
            ulName.innerText = `${eachName.name}`

            list.appendChild(digiName);
            digiName.appendChild(ulName);
        })
    }
    catch {
        
    }
}

getNames();


async function digiData() {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${input.value}`, {
          method: 'GET',
        });

      const infos = await response.json();
      
        const card = document.createElement("div");
        card.setAttribute("class", "card");
        
        const image = document.createElement("img");
        image.setAttribute("class", "digi-img")
        image.setAttribute("src", infos[0].img)
        
        const name = document.createElement("h3")
        name.innerText = infos[0].name
  
        const level = document.createElement("p")
        level.innerText = infos[0].level
  
        selected.appendChild(card);
        card.appendChild(image)
        card.appendChild(name)
        card.appendChild(level)

    }
    catch (err){
      alert("This digimon doesn't exist, otária", err);
      return [];
    }

  }

  digiBtn.addEventListener("click", (e) => {
    e.preventDefault();
    digiData();
    input.value = '';
})




