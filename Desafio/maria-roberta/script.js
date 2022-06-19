const segundaDiv = document.getElementById("pesquisa")
const input = document.getElementById("input-id")
const buton = document.getElementById("botao-id")


async function getDigimons() {
    try {
        const response = await fetch('https://digimon-api.herokuapp.com/api/digimon')
        const retorno = await response.json()
        retorno.map((exibir) => {
        
        const primeiraDiv = document.getElementById("div-id")
        const ul = document.createElement('ul')
        ul.setAttribute('class', 'ul-class')    
        const li = document.createElement('lista')
        li.setAttribute('class', 'lista')
        li.innerText = exibir.name

        primeiraDiv.appendChild(ul)
        ul.appendChild(li)
        })
    } catch (err) {
        console.error(err);
    }
}
getDigimons()


async function getExibicao() {
    try{ 
        const resposta = await fetch('https://digimon-api.vercel.app/api/digimon');
        const mostrar = await resposta.json()

        mostrar.map((exibirDigimon) => {
        const terceiraDiv = document.getElementById("div-exibir");
        const cardExibir = document.createElement('card');
        cardExibir.setAttribute('class', 'card');

        const nomeDigimon = document.createElement('nomeDigimon');
        nomeDigimon.setAttribute('class', 'nome')
        nomeDigimon.innerText = exibirDigimon[0].name;

        const imagem = document.createElement('img')
        imagem.setAttribute('class', 'imagemDigimon')
        imagem.setAttribute('src', exibirDigimon[0].img)

        
        const level = document.createElement('level')
        level.setAttribute('class', 'level')
        level.innerText = exibirDigimon[0].level;



        buton.addEventListener('click', (evento) => {
            evento.preventDefault()


        terceiraDiv.appendChild(cardExibir);
        cardExibir.appendChild(nomeDigimon);
        cardExibir.appendChild(imagem);
        cardExibir.appendChild(level);
        
        });
    })
    } catch (err){
        console.error(err);
    }
    
}
getExibicao();
