async function listDigimon() {
    try {
  
      const response = await fetch("https://digimon-api.vercel.app/api/digimon");
      const data = await response.json();
  
      data.map((cards) => {
  
        const listaDigimon = document.querySelector(".lista_digimon");
        const lista = document.createElement("ul");
        lista.className = "lista";
        lista.innerText = `${cards.name}`;
        listaDigimon.appendChild(lista);
  
      })
    }  
