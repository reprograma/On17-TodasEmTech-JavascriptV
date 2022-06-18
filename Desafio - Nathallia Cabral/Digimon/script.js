const input = document.getElementById('digimon_input');
const botao = document.getElementById('search');

botao.addEventListener('click', () => {
    desafioDigimon(input.value);
})


let desafioDigimon = async (name) => {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`, {
            method: 'GET',
        });

        const obj = await response.json()
        const imagem = document.getElementById('digimon_image');
        imagem.src = obj[0].img;
        const digimonNome = document.getElementById('digimon_nome');
        digimonNome.innerText = obj[0].name;
        const level = document.getElementById('digimon_level');
        level.innerText = ` Level:  ${ obj[0].level}`

    } catch (err) {
        alert("Ops! Não encontramos esse Digimon!");
        return [];
    }
}


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