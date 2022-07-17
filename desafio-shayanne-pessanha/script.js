async function handleBusca(event) {
    let inputName = document.querySelector("#search-input").value;
    let apiUrl = "http://digimon-api.vercel.app/api/digimon";
    let digiList = await fetch(apiUrl);
    digiList = await digiList.json();

    console.log(digiList[0]);
    let foundDigimon = digiList.find(
        x => x.name.toLowerCase() == inputName.toLowerCase()
    );

    let digiCard = document.querySelector('.digi-card');
    let digiName = digiCard.querySelector('.digi-name');
    let digiLevel = digiCard.querySelector('.digi-level');
    let digiImg = digiCard.querySelector('.digi-img');

    digiName.innerText = foundDigimon.name;
    digiLevel.innerText = foundDigimon.level;
    digiImg.src = foundDigimon.img;
}