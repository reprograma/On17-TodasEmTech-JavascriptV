

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
    imagem.src =obj[0].img;
    card.appendChild(imagem);
    const level = document.querySelector('h3');
    level.innerText =` Level:  ${ obj[0].level}`
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
    obj.map((digimon)=> {
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

const button = document.getElementById('search');
const input = document.getElementById('digimon');
const list = document.getElementById('list');
const main = document.getElementById('main');

async function listDigimon() {
    let response = await fetch ('https://digimon-api.vercel.app/api/digimon')
    let data = await response.json();
    data.forEach(digimon => {
        let li  = document.createElement('li');
        li.textContent = digimon.name;
        list.append(li);
    })
}

async function searchDigimon() {
    let name = input.value;
    let response = await fetch (`https://digimon-api.vercel.app/api/digimon/name/${name}`)
    let data = await response.json();
    let digimon = data[0];
    Object.entries(digimon).forEach(attr => {
        let key = attr[0];
        let value = attr[1];
        let h5 = document.createElement('h5');
        let paragraph  = document.createElement('p');
        h5.textContent = key;
        paragraph.textContent = value;
        let div = document.createElement('div');
        div.append(h5);
        div.append(paragraph);
        main.append(div);
    })
}

function setupPage() {
    listDigimon();
    button.addEventListener('click', searchDigimon)
}


setupPage();


