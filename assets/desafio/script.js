const input = document.getElementById('input');
const botao = document.getElementById('button');

async function listDigimon() {
    let response = await fetch ('https://digimon-api.vercel.app/api/digimon')
    let data = await response.json();
    data.forEach(digimon => {
        let li  = document.createElement('li');
        li.textContent = digimon.name;
        list.append(li);
    })
}
botao.addEventListener('click', (e) => {
e.preventDefault();
cardDigimons(input.value);
input.value = '';
});

async function searchDigimon(){
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
const cardDigimons = async (name) => {
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
    alert ("Este Digimon não existe!");
    throw new Error();
  }
}
  catch (err) {
      console.error("Não foi possível prosseguir com a requisição", err);
  }
};

function setupPage() {
    listDigimon();
    button.addEventListener('click', searchDigimon)
}


setupPage();
const listaDigimons = async () => {
  try {
    const resposta = await fetch(`https://digimon-api.vercel.app/api/digimon/`
);
const data = await resposta.json()
const listagem = document.getElementById('listagem');
    data.map((digimon)=> {
      const name = document.createElement('p');
      name.innerText = digimon.name;
      listagem.appendChild(name);
    })
  }
  catch (err) {
    console.error(err);
  }
};

listaDigimons()}
