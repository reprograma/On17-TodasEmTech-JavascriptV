async function getCards() {
  try {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const cards = await response.json();

    const demo = document.getElementById("demo");

    for (i = 0; i < cards.length; i++) {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const img = document.createElement("img");
      img.setAttribute("src", cards[i].image);

      const title = document.createElement("h1");
      title.innerText = cards[i].title;

      const description = document.createElement("p");
      description.innerText = cards[i].description;

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);

      demo.appendChild(card);
    }
  } catch (err) {
    console.error(err);
  }
}

getCards();
