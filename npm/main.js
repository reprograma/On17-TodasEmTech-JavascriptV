const imagem = document.querySelector('#image');

// axios.get("https://dog.ceo/api/breeds/image/random")
//     .then((result) => {
//         imagem.src = result.data.message;
//     })
//     .catch((error) => {
//         console.log(error);
//     })

async function buscarDoguinho() {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        imagem.setAttribute('src', response.data.message);
    }
    catch(err) {
        console.error(err)
    }
}

buscarDoguinho()
