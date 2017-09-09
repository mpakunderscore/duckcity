function closeAbout() {
    document.getElementById('about').style.display = 'none';
}

function closeConstructor() {
    document.getElementById('constructor').style.display = 'none';
}

function openConstructor(user) {

    closeAbout();

    document.getElementById('constructor').style.display = 'block';

    let text = document.getElementById('constructor').getElementsByClassName('text')[0];

    if (user !== null) {

        text.innerText = user.id + " " + user.description + " " + user.name;
        console.log(user)

    } else {

        text.innerText = "New";
    }
}