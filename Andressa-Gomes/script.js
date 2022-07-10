const input = document.getElementById('input');
const botao = document.getElementById('submit');

botao.addEventListener('click', () => {
    desafioDigimon(input.value);
})

let desafioDigimon = async (name) => {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${name}`, {
            method: 'GET',
        });

        const obj = await response.json()
        const digimonName = document.querySelector('h2');
        digimonName.innerText = obj[0].name;
        const card = document.getElementById('card');
        card.appendChild(digimonName);
        const imagem = document.querySelector('img');
        imagem.src = obj[0].img;
        card.appendChild(imagem);
        const level = document.querySelector('h3');
        level.innerText = ` Level:  ${obj[0].level}`
        card.appendChild(level);

    }
    catch (err) {
        console.error(err);
    }
}

let listaNomes = async () => {
    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/`, {
            method: 'GET',
        });

        const obj = await response.json()
        const lista = document.getElementById('lista');
        obj.map((digimon) => {
            const nome = document.createElement('p');
            nome.innerText = digimon.name;
            lista.appendChild(nome);
        })
    }
    catch (err) {
        console.error(err);
    }
}

listaNomes() 