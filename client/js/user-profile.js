const res = await fetch('/favorites/get/', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

const favorites = document.getElementById("favorite-recipes");

const addFavorite = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('recipe-title').innerText = data.name;
    clon.getElementById('recipe-image').src = data.img;
    favorites.appendChild(clon);
}

