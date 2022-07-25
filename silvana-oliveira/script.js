const input = document.getElementById('input');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    cardsDigimon(input.value);
    input.value = '';
});

const cardsDigimon = async (name) => {
    const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const infosDigimon = document.querySelector('h2');
            infosDigimon.innerText = data[0].name;
            const infos = document.getElementById('caixa-infos');
            infos.appendChild(infosDigimon);
            const foto = document.querySelector('img');
            foto.src = data[0].img;
            infos.appendChild(foto);
        } else {
            alert("Ops!...Grafia errada... \n Tente novamente!");
            throw new Error();
        }
    }
    catch (err) {
        console.error("Digimon não encontrado", err);
    }
};

async function listaNomes() {
    const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon`);
try {
    const nomes = await resposta.json();
    const divExibir = document.getElementById("div-id");
    const listaDigion = document.getElementById("lista-nomes");
    nomes.map((card) => {
        const name = document.createElement('p')
        name.innerText = card.name;
        divExibir.appendChild(listaDigion);
        listaDigion.appendChild(name);
    })
}
catch {
}
}
listaNomes();
