function closeAbout() {
    document.getElementById('about').style.display = 'none';
}

function closeConstructor() {
    document.getElementById('constructor').style.display = 'none';
}

function openConstructor(user) {

    closeAbout();

    document.getElementById('constructor').style.display = 'block';

    let title = document.getElementById('constructor').getElementsByClassName('text')[0];
    let description = document.getElementById('constructor').getElementsByClassName('text')[1];

    if (user !== null) {

        title.innerText = user.title;
        description.innerText = user.description;
        console.log(user)

        let back = document.getElementById('constructor').getElementsByClassName('back')[0];
        back.src = "./images/back.jpg";

    } else {

        title.innerText = "Заголовок для новой утки";
        description.innerText = "Напиши сюда текст который будет виден в мобильном клиенте, прямо выдели вот это все и отредактируй";
    }
}

function nextDuck() {

    console.log("next duck")

    let back = document.getElementById('constructor').getElementsByClassName('back')[0];

    back.src = "./images/back.jpg";

    let description = document.getElementById('constructor').getElementsByClassName('text description')[0];

    description.innerHTML = "This is Sir, he will respect you only if you have the answer. " +
        "Do you know it? Are you aware, or just a peasant?";
}