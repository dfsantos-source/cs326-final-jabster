
document.getElementById('login').addEventListener('click', async (e) => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const login = {
        email: email,
        password: pass
    }

    const res = await fetch('/user/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(login)
    })

    const data = await res.json();
    const status = await res.status;

    if (status === 200) {
        window.location.href = "/client/html/grubify.html";
    }
})