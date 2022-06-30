
const url = `https://digimon-api.vercel.app/api/digimon`;
const container = document.getElementById('demo');
const card = document.getElementById('cards');

card.style.display = 'none';

async function getInfo() {
    try {
        const answer = await fetch(url);
        const data = await answer.json();
        showInfo(data);
    }
    catch(erro) {
        console.log(erro);
    }
};


function showInfo(data) {
    const names = data.map(function(cartoon){
        return `
        <div class="list">
             <h4>${cartoon.name}</h4>
         </div>
        `
    });
    container.innerHTML = names.join('');
};

getInfo()


document.querySelector('.search').addEventListener('submit', async(event) => {
    event.preventDefault(); 
    const digimonName = document.getElementById('searchInput').value;

    if (digimonName !== '') {
        try {
            const urlName = `https://digimon-api.vercel.app/api/digimon/name/${digimonName}`;
            const result = await fetch(urlName);
            const dados = await result.json();
            container.style.display = 'none'
            console.log(dados)
            showResultSearch(dados)
        }
        catch(err) {
          console.error("Não encontramos o digimon digitado" + err);
        }
    } 
});

function showResultSearch(dados) {
    const resultSearch = dados.map((digimon, indice) => {
        return `
        <div class="card">
        <img class="image" src=${digimon.img}>
        <p class="card__text">Name: ${digimon.name}</p>
        <p class="card__text">Level: ${digimon.level}</p>
        <div/>
        `
    })
    card.style.display = 'flex';
    card.style.flexDirection = 'column'
    card.innerHTML = resultSearch;
}



