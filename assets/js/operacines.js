export const generateHash = (timestamp, privateKey,  publicKey) => {
    const hash = CryptoJS.MD5(timestamp + privateKey + publicKey).toString();
    return hash;
}

export const renderHeroes = (heroes) => {
    const heroesRow = document.getElementById("heroesRow")

    heroes.forEach(hero => {
        const { id, name, description, thumbnail } = hero;
        const { extension, path } = thumbnail;

        const divCol = document.createElement("div");
        divCol.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-sm-12", "col-xs-12");

        const card = document.createElement("div");
        card.classList.add("card")

        const img = document.createElement("img");
        img.src = `${path}.${extension}`;
        img.alt = `image of ${name}`;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");        

        const cardtitle = document.createElement("h5");
        cardtitle.classList.add("card-title");
        cardtitle.textContent = name;

        const desc = document.createElement("p");
        desc.classList.add("card-text");
        desc.textContent = description || "no description available";

        const detailsBtn = document.createElement("button");
        detailsBtn.classList.add("details-btn");
        detailsBtn.textContent = "view Details";
        detailsBtn.addEventListener("click", () => showHeroDetails(hero));

        cardBody.appendChild(cardtitle);
        cardBody.appendChild(desc);
        cardBody.appendChild(detailsBtn);

        card.appendChild(img);
        card.appendChild(cardBody);

        divCol.appendChild(card);

        heroesRow.appendChild(divCol);
    });
}