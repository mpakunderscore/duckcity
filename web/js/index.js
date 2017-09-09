function closeMenu() {
    document.getElementById('about').style.display = 'none';
}

function openConstructor(user) {

    closeMenu();

    document.getElementById('constructor').style.display = 'block';

    if (user !== null) {

        document.getElementById('constructor').innerText = user.description;
        console.log(user)

    } else {

        document.getElementById('constructor').innerText = "New";
    }
}