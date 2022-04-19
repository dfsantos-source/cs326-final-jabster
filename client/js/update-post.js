const res = await fetch("/posts/get/1", {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
    },
})

const data = await res.json()

console.log(data)

const title = document.getElementById('title');
const description = document.getElementById('description');
const ingredients = document.getElementById('ingredients');
const directions = document.getElementById('directions');
const tags = document.getElementById('tags');
const cuisine = document.getElementById('cuisine');

title.value = data.name
description.value = data.description
ingredients.value = data.ingredients.join('\n')
directions.value = data.directions.join("\n")

document.getElementById('update-button').addEventListener("click", async (event) => {
    const titleVal = document.getElementById('title').value;
    const descriptionVal = document.getElementById('description').value;
    const ingredientsVal = document.getElementById('ingredients').value;
    const directionsVal = document.getElementById('directions').value;
    const tagsVal = document.getElementById('tags').value;
    const cuisineVal = document.getElementById('cuisine').value;

    const post = {
        name: titleVal,
        description: descriptionVal,
        ingredients: ingredientsVal.replace(/(\r\n|\n|\r)/gm, ","),
        directions: directionsVal.replace(/(\r\n|\n|\r)/gm, " "),
        tags: tagsVal,
        cuisine: cuisineVal
    }

    const response = await fetch(`/posts/update/${data.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post)
    })
    const dataRes = await response.json()
    console.log(dataRes)

})
