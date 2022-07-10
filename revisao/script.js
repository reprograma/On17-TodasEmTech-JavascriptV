console.log("Oi Lorena")

function chamarPessoa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("Ellie")
      , 2000
    })
  }) 
}

// function imprimir(string) {
//   console.log("oi " + string)
// }

chamarPessoa()
.then((response) => console.log("oi " + response))
.catch((err) => console.error(err))
.finally(console.log("olá"))

let main = async () => {
  try {
    const response = await chamarPessoa();
    console.log(response)
  }
  catch(err) {
    console.error(err)
  }
}

// main()
