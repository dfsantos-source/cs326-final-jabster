const posts = document.getElementById("grubify-post");

const addPost = (data) => {
    posts.innerHTML = "";
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('grub-post-template-title').innerText = data.name;
    clon.getElementById('grub-post-template-cuisine').innerText = data.cuisine;
    clon.getElementById('grub-post-template-description').innerText = data.description;
    clon.getElementById('grub-post-template-img').src = 'data:image/png;base64,' + data.image;
    clon.getElementById('grub-post-template-author').innerText = 'By: User#' + data.id;
    const ingredientsList = clon.getElementById('grub-post-template-ingredients');
    const directionsList = clon.getElementById('grub-post-template-directions');
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
        directionsList.appendChild(li);
    })
    clon.getElementById('grub-post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('grub-post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;

    clon.getElementById("grub-like-img").addEventListener('click', async (e) => {
        const res = await fetch(`/posts/${data.id}/like`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const newData = await res.json();
        const status = await res.status;
        if (status === 400) {
            alert("You have already liked this post");
        }
        if (status === 200) {
            renderSamePost(data);
            alert("You have successfully liked the post");
        }
    })

    clon.getElementById("grub-dislike-img").addEventListener('click', async (e) => {
        const res = await fetch(`/posts/${data.id}/dislike`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const newData = await res.json();
        const status = await res.status;
        if (status === 200) {
            await renderSamePost(data)
            alert("You have successfully disliked the post")
        }
        if (status === 400) {
            alert("You have already disliked this post")
        }
    })

    posts.appendChild(clon);
}

async function renderSamePost(data) {
    const res = await fetch(`/posts/get/${data.id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const resData = await res.json();
    const postData = resData[0];
    postData.ingredients = postData.ingredients.split(', ');
    postData.directions = postData.directions.split(". ");
    addPost(postData);
}

document.getElementById('grubify-butt').addEventListener('click', async (e) => {
    const dietary_tag = document.getElementById('diet-select').value;
    const cuisine_tag = document.getElementById('cuisine-select').value;

    document.getElementById('title').innerText = "Not in the Mood?";
    document.getElementById('grubify-butt').innerHTML = "Grubify Again!";

    const body = {
        tag: dietary_tag,
        cuisine: cuisine_tag
    };
    const res = await fetch(`/posts/get/random/${body.tag}&${body.cuisine}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json().catch((err) => alert("No results found, try again"));

    data.ingredients = data.ingredients.split(', ');
    data.directions = data.directions.split('.');
    const status = await res.status;
    if (status === 200) {
        addPost(data);
    };
})