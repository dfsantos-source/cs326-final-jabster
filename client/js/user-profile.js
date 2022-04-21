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

async function addCartSubmit(ingredient, amount) {
    const response = await fetch(`/user/cart/2/add`, {
        method: "POST",
        body: JSON.stringify({ ingredient: ingredient, amount: amount }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const dataRes = await response.json()
    console.log(dataRes)
}

const showIngredientForm = (data) => {
    document.getElementById('ingredient-form').style.display = 'block';
}

document.getElementById('add-handler').addEventListener("click", e => {
    showIngredientForm();
})

document.getElementById('ingredient-submit').addEventListener("click", e => {
    const ingredient = document.getElementById('ingredient-name-add').value;
    const amount = document.getElementById('ingredient-amount-add').value;
    addCartSubmit(ingredient, amount);
})

function changeCreds(el, name) {
    const input = document.createElement("INPUT");
    input.setAttribute("type", "text");
    input.setAttribute('id', `${name}-input`);
    input.setAttribute("placeholder", `change ${name}`)
    const button = document.createElement("button")
    button.addEventListener("click", async (e) => {
        let body = { [name]: document.getElementById(`${name}-input`).value }
        const res = await fetch('/user/update/1', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        const data = await res.json()
        console.log(data)
        document.getElementById(`change-${name}-form`).innerHTML = ''
    })
    button.innerText = "Submit"
    el.appendChild(input);
    el.appendChild(button);
}

document.getElementById('change-username').addEventListener('click', (e) => { changeCreds(document.getElementById('change-username-form'), "username") })
document.getElementById('change-pass').addEventListener('click', (e) => { changeCreds(document.getElementById('change-password-form'), "password") })

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
