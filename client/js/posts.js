async function likePost(data) {
    const response = await fetch(`/posts/${data.id}/like`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const dataRes = await response.json();
    const stat = await response.status;
    if (stat === 400) {
        alert("You have already liked this post");
    }
    if (stat === 200) {
        renderPage()
        alert("You have successfully liked the post");
    }
}

async function dislikePost(data) {
    const response = await fetch(`/posts/${data.id}/dislike`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const dataRes = await response.json();
    const stat = await response.status;
    if (stat === 400) {
        alert("You have already disliked this post");
    }
    if (stat === 200) {
        renderPage();
        alert("You have successfully disliked the post");
    }
}

async function favoritePost(data) {
    const response = await fetch(`/user/favorites/user/add`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId: data.id })
    })
    const dataRes = await response.json()
    const stat = await response.status
    if (stat === 400) {
        alert("You have already favorited this post");
    }
    if (stat === 200) {
        alert("Successfully favorited post");
    }
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
    const directions = data.directions.split(".");
    ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerText = ingredient;
        ingredientsList.appendChild(li);
    });
    directions.forEach(direction => {
        const li = document.createElement('li');
        li.innerText = direction;
        directionsList.appendChild(li);
    })
    clon.getElementById('like-button').addEventListener("click", (event) => { likePost(data) })
    clon.getElementById('dislike-button').addEventListener("click", (event) => { dislikePost(data) })
    clon.getElementById('post-template-favorite').addEventListener("click", (event) => { favoritePost(data) })
    clon.getElementById('post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;
    posts.appendChild(clon);
}


const posts = document.getElementById("posts-main");



async function renderPage() {
    posts.innerHTML = ""
    const res = await fetch('/posts/get/all', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
    const status = await res.status;


    if (status === 200) {
        data.forEach(post => {
            addPost(post);
        })
    }
}

renderPage();