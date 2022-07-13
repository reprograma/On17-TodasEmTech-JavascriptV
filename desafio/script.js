const input = document.getElementById('input');
const botao = document.getElementById('button');

botao.addEventListener('click', (e) => {
e.preventDefault();
cardDigimons(input.value);
input.value = '';
});

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

listaDigimons() 
