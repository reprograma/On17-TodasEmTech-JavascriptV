function getUrlWithInput() {
  const inputDoUsuario = document.getElementById("entrada");
  return "https://viacep.com.br/ws/" + inputDoUsuario.value + "/json/";
}

const divMain = document.getElementById("article-main");

async function buscarEndereco() {
  const urlMontada = getUrlWithInput();
  const resposta = await fetch(urlMontada);
  const respostaJson = await resposta.json();

  const div = document.createElement("div");
  div.classList.add("card");

  const pcep = document.createElement("p");
  pcep.innerHTML = "CEP: " + respostaJson.cep;
  div.appendChild(pcep);
  const plogradouro = document.createElement("p");
  plogradouro.innerHTML = "Logradouro: " + respostaJson.logradouro;
  div.appendChild(plogradouro);
  const pbairro = document.createElement("p");
  pbairro.innerHTML = "Bairro: " + respostaJson.bairro;
  div.appendChild(pbairro);
  const plocalidade = document.createElement("p");
  plocalidade.innerHTML = "Localidade: " + respostaJson.localidade;
  div.appendChild(plocalidade);
  const puf = document.createElement("p");
  puf.innerHTML = "UF: " + respostaJson.uf;
  div.appendChild(puf);

  divMain.appendChild(div);

  const inputDoUsuario = document.getElementById("entrada");
  inputDoUsuario.value = "";
}
