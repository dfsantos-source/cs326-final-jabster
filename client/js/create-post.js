let base64String = "";
const imageUploaded = () => {
    var file = document.querySelector(
        'input[type=file]')['files'][0];

    var reader = new FileReader();
    console.log("next");

    reader.onload = function () {
        base64String = reader.result.replace("data:", "")
            .replace(/^.+,/, "");

        console.log(base64String);
    }
    reader.readAsDataURL(file);
}
document.getElementById('fileId').onchange = imageUploaded;

document.getElementById('post').addEventListener('click', async (e) => {


    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const ingredients = document.getElementById('ingredients').value;
    const directions = document.getElementById('directions').value;
    const tags = document.getElementById('tags').value;
    const image = base64String;
    const cuisine = document.getElementById('cuisine').value;

    const post = {
        name: title,
        tag: tags,
        cuisine: cuisine,
        description: description,
        directions: directions,
        ingredients: ingredients,
        image: image
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
        window.location.href = "my-posts.html";
    }
})