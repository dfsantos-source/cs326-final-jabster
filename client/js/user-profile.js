const favorites = document.getElementById("favorite-recipes");
const cart = document.getElementById("cart");

async function deleteFavorite(data) {
    console.log(data.id)
    if (confirm("ARE YOU SURE YOU WANT TO DELETE!") === true) {
        const response = await fetch(`/user/favorites/delete/${data.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataRes = await response.json();
        const stat = await response.status;

        if (stat === 200) {
            renderPage();
            alert("Successfully deleted favorite");
        }
    }
}

async function deleteCart(data) {
    if (confirm("ARE YOU SURE YOU WANT TO DELETE!") === true) {
        const response = await fetch(`/user/cart/delete/${data.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const dataRes = await response.json();
        const stat = await response.status;

        if (stat === 200) {
            renderPage();
            alert("Successfully deleted cart");
        }
    }
}


const addFavorite = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('recipe-title').innerText = data.name;
    clon.getElementById('recipe-image').src = 'data:image/png;base64,' + data.image;
    clon.getElementById('delete-favorite').addEventListener("click", (event) => { deleteFavorite(data) });
    favorites.appendChild(clon);
}

const addCart = (data) => {
    const temp = document.getElementsByTagName("template")[1];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('cart-item-title').innerText = data.name;
    clon.getElementById('cart-item-amount').innerText = data.amount;
    clon.getElementById('delete-cart').addEventListener("click", (event) => { deleteCart(data) })
    cart.appendChild(clon);
}

async function addCartSubmit(ingredient, amount) {
    const response = await fetch(`/user/cart/user/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: ingredient, amount: amount })
    });
    const dataRes = await response.json();
    document.getElementById('ingredient-name-add').value = "";
    document.getElementById('ingredient-amount-add').value = "";
    document.getElementById('ingredient-form').style.display = 'none';
    renderPage();

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


const userInfoRes = await fetch('/user/get/user', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
});

const userdata = await userInfoRes.json();
const userInfo = userdata[0];

document.getElementById('name').innerText = userInfo.name;
document.getElementById('username').innerText = "@" + userInfo.username;


const renderPage = async () => {
    cart.innerHTML = '';
    favorites.innerHTML = '';
    const res = await fetch('/user/favorites/user/get', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const res2 = await fetch('/user/cart/user/get', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json();
    const status = await res.status;

    const data2 = await res2.json();
    const status2 = await res2.status;

    // console.log(data)
    // console.log(data2)

    if (status === 200) {
        data.forEach(dish => {
            addFavorite(dish);
        })
    }


    if (status2 === 200) {
        data2.forEach(ingredient => {
            addCart(ingredient);
        })
    }
}

renderPage();
