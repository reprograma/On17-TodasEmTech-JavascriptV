const input = document.getElementById('input');
const botao = document.getElementById('button');


botao.addEventListener('click', (e) => {
  e.preventDefault();
  getDigimons(input.value);
  input.value = '';
});

const getDigimons = async (name) => {
const url = `https://digimon-api.vercel.app/api/digimon/name/${name}`;
  try {
    const response = await fetch(url);
      if (response.status == '200') {
        const data = await response.json();
        const titulo = document.querySelector('h2');
        titulo.innerText = data[0].name;
        const cards = document.querySelector('.cards');
        cards.appendChild(titulo);
        const nivel = document.querySelector('p');
        nivel.innerText = data[0].level;
        cards.appendChild(nivel);
        const imagem = document.querySelector('img');
        imagem.src = data[0].img;
        cards.appendChild(imagem);

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
const listagem = document.querySelector('.lista');
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