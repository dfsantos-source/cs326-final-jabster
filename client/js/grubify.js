const posts = document.getElementById("grubify-post");

const addPost = (data) => {
    posts.innerHTML= ""
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('grub-post-template-title').innerText = data.name;
    clon.getElementById('grub-post-template-cuisine').innerText = data.cuisine;
    clon.getElementById('grub-post-template-description').innerText = data.description;
    clon.getElementById('grub-post-template-img').src = data.img;
    clon.getElementById('grub-post-template-author').innerText = 'By: User' + data.user_id;
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
        directionsList.appendChild(li)
    })
    clon.getElementById('grub-post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('grub-post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;
    posts.appendChild(clon);
}

document.getElementById('grubify-butt').addEventListener('click', async (e) => {
    const dietary_tag = document.getElementById('diet').value;
    const cuisine_tag = document.getElementById('cuisine').value;

    document.getElementById('title').innerText = "Not in the Mood?";
    document.getElementById('grubify-butt').innerHTML = "Grubify Again!";

    const res = await fetch('/posts/get/random', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await res.json();
    const status = await res.status;
    if(status === 200){
        addPost(data);
    }
})