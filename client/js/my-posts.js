let data;

function renderData() {
    data.forEach(post => {
        addPost(post);
    })
}

async function deletePost(data) {
    if (confirm("ARE YOU SURE YOU WANT TO DELETE!") === true) {
        const response = await fetch(`/posts/delete/${data.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const dataRes = await response.json();
        const stat = await response.status;

        if (stat === 200) {
            renderPage();
            alert("Successfully deleted post");
        }
    }
}

async function updatePost(data) {
    window.localStorage.setItem('update-id', data.id);
    window.location.href = 'update-post.html';
}

const addPost = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('post-template-title').innerText = data.name;
    clon.getElementById('post-template-cuisine').innerText = data.cuisine === "none" ? "" : data.cuisine;
    clon.getElementById('post-template-description').innerText = data.description;
    clon.getElementById('post-template-img').src = 'data:image/png;base64,' + data.image;
    clon.getElementById('post-template-author').innerText = 'By: User#' + data.userid;
    const ingredientsList = clon.getElementById('post-template-ingredients');
    const directionsList = clon.getElementById('post-template-directions');
    const ingredients = data.ingredients.split(', ');
    const directions = data.directions.split('.');
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    })
    directions.forEach(direction => {
        const li = document.createElement('li');
        li.innerText = direction;
        directionsList.appendChild(li);
    })
    clon.getElementById('update-button').addEventListener("click", (event) => { updatePost(data) });
    clon.getElementById('delete-button').addEventListener("click", (event) => { deletePost(data) });
    clon.getElementById('post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;
    posts.appendChild(clon);
}


const posts = document.getElementById("posts-main");

async function renderPage() {
    posts.innerHTML = ""
    const res = await fetch('/posts/get/user', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    data = await res.json();
    const status = await res.status;



    if (status === 200) {
        renderData();
    }
}

renderPage();