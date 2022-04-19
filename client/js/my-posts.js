
let data;

function renderData() {
    data.forEach(post => {
        addPost(post)
    })
}

async function deletePost(data) {
    const response = await fetch(`/posts/delete/${data.id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const dataRes = await response.json()
    console.log(dataRes)
}

async function updatePost(data) {
    const response = await fetch(`/posts/update/${data.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const dataRes = await response.json()
    console.log(dataRes)
}

const addPost = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('post-template-title').innerText = data.name;
    clon.getElementById('post-template-cuisine').innerText = data.cuisine;
    clon.getElementById('post-template-description').innerText = data.description;
    clon.getElementById('post-template-img').src = data.img;
    clon.getElementById('post-template-author').innerText = 'By: User' + data.user_id;
    const ingredientsList = clon.getElementById('post-template-ingredients');
    const directionsList = clon.getElementById('post-template-directions');
    const ingredients = data.ingredients;
    const directions = data.directions;
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li)
    })
    directions.forEach(direction => {
        const li = document.createElement('li');
        li.innerText = direction;
        directionsList.appendChild(li)
    })
    clon.getElementById('update-button').addEventListener("click", (event) => { updatePost(data) })
    clon.getElementById('delete-button').addEventListener("click", async (event) => { deletePost(data) })
    clon.getElementById('post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;
    posts.appendChild(clon);
}


const posts = document.getElementById("posts-main");

const res = await fetch('/posts/get/User/2', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

data = await res.json()
const status = await res.status



if (status === 200) {
    renderData()
}