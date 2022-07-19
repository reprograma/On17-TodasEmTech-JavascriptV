console.log("Oi Jane");

function chamarMenina() {
    return new Promise((resolve, reject) => {
        //Promise é um objeto do JavaScript que tem a função de lidar com assincronicidade através de estados.
        setTimeout(() => {
            return resolve("Marie")
        }, 2000)
    })
};

/* function imprimir(string) {
  console.log("oi " + string)
 }*/
chamarMenina()
    .then((response) => console.log("hello " + response))
    //then posso capturar os dois , mas é convencional usar o then para pegar a resposta desejada eo cath para pegar o erro.
    .catch((error) => console.error(error))
    // Método que ativa uma callback quando a promise for rejeitada, o argumento desta callback é sempre o valor retornado na reject();
    .finally(console.log("olá"))
// vai acontecer independente de tudo.

let main = async () => {
    try {
        const response = await chamarMenina();
        console.log(response);
    }
    catch (error) {
        //catch() é executado somente quando há alguma exceção no bloco try
        console.error(error);
    }
    /*finally {
     console.log("finally")
    }*/
}
main(); 