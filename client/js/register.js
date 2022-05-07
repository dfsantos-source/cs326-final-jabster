
document.getElementById('register_button').addEventListener('click', async (e) => {
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const register = {
        name: name,
        username: username,
        email: email,
        password: password
    }
    const res = await fetch('/user/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(register)
    })

    const data = await res.json();
    const status = await res.status;

    if (status === 200) {
        window.location.href = "/client/html/grubify.html";
    }
    else {
        window.location.href = "/client/html/register.html"
    }
})