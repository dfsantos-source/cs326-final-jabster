const addPost = (data) => {
    const temp = document.getElementsByTagName("template")[0];
    const clon = temp.content.cloneNode(true);
    clon.getElementById('post-template-title').innerText = data.name;
    clon.getElementById('post-template-cuisine').innerText = data.cuisine;
    clon.getElementById('post-template-description').innerText = data.description;
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
    clon.getElementById('post-template-likes').innerText = 'Likes: ' + data.likes;
    clon.getElementById('post-template-dislikes').innerText = 'Dislikes: ' + data.dislikes;
    posts.appendChild(clon);
}


const posts = document.getElementById("posts-main");

const res = await fetch('/posts/get/all', {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

const data = await res.json()
const status = await res.status

console.log(res)

if (status === 200) {
    data.forEach(post => {
        addPost(post)
    })
}