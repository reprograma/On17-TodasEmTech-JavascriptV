/* CRIAR UMA FUNÇÃO PARA PESQUISAR OS DIGIMONS */



/*BUSCANDO E PREENCHENDO O CARD */
async function getDigimon() {
    try {

        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        const data = await response.json();


        data.map((_getCard) => {

            const listaDigimon = document.querySelector(".lista_digimon");
            const lista = document.createElement("ul");
            lista.className = "lista";
            lista.innerText = `${_getCard.name}`;
            listaDigimon.appendChild(lista);

        })


    } catch (erro) {

    }
}

getDigimon()



async function searchDigimon() {
    try {


        const inputDigimon = document.getElementById('digimon_input').value
        const response = await fetch(`/api/digimon/name/${inputDigimon}`);
        const data = await response.json();
        console.log(data);


        data.map((getdigimon) => {

            const imgDigimon = document.getElementById("digimon_imagem");
            imgDigimon.value = data.img

            const nomeDigimon = document.getElementById("digimon_nome");
            nomeDigimon.value = data.name

            const levelDigimon = document.getElementById("digimon_level");
            levelDigimon.value = data.level

        });

    } catch (erro) {
        alert("Ops! Não encontramos esse Digimon!");
        return [];
    }
}

const botaoBuscar = document.getElementById('search')
botaoBuscar.addEventListener("click", function () {

    searchDigimon()
});