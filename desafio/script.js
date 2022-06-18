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

