document.getElementById('post').addEventListener('click', async (e) => {


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;
    const directions = document.getElementById('directions').value;
    const tags = document.getElementById('tags').value;
    const cuisine = document.getElementById('cuisine').value;

    const post = {
        id: 2,
        name: title,
        tags: tags,
        user_id: 2,
        cuisine: cuisine,
        likes: 0,
        dislikes: 0,
        description: description,
        directions: directions,
        ingredients: ingredients
    }

    console.log(post)

    const res = await fetch('/posts/create', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    })
    const data = await res.json()
    const status = await res.status

    if (status === 200) {
        window.location.href = "/client/html/posts.html";
    }
})