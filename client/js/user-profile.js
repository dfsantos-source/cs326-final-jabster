const favorites = document.getElementById("favorite-recipes");
const cart = document.getElementById("cart");

async function deleteFavorite(data) {
    const response = await fetch(`/user/favorites/2/delete/${data.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const dataRes = await response.json()
    console.log(dataRes)
}

async function deleteCart(data) {
    const response = await fetch(`/user/cart/2/delete/${data.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const dataRes = await response.json()
    console.log(dataRes)
}

// async function deleteFavorite(data) {
//     const response = await fetch(`user/favorites/2/delete/${data.id}`, {
//         method: "DELETE",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     const dataRes = await response.json()
//     console.log(dataRes)
// }

const addFavorite = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('recipe-title').innerText = data.name;
    clon.getElementById('recipe-image').src = data.img;
    clon.getElementById('delete-favorite').addEventListener("click", (event) => { deleteFavorite(data) })
    favorites.appendChild(clon);
}

const addCart = (data) => {
    const temp = document.getElementsByTagName("template")[1];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('cart-item-img').src = data.img;
    clon.getElementById('cart-item-title').innerText = data.name;
    clon.getElementById('cart-item-amount').src = data.amount;
    clon.getElementById('delete-cart').addEventListener("click", (event) => { deleteCart(data) })
    cart.appendChild(clon);
}

const res = await fetch('/user/favorites/2/get', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

const res2 = await fetch('/user/cart/2/get', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

const data = await res.json()
const status = await res.status

const data2 = await res2.json()
const status2 = await res2.status

// console.log(data)
// console.log(data2)

if (status === 200) {
    data.forEach(dish => {
        addFavorite(dish)
    })
}

if (status2 === 200) {
    data2.forEach(ingredient => {
        addCart(ingredient)
    })
}
