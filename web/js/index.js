function closeAbout() {
    document.getElementById('about').style.display = 'none';
}

function closeConstructor() {
    document.getElementById('constructor').style.display = 'none';
}

let duck = {};

function openConstructor(user) {

    duck = user;

    closeAbout();

    document.getElementById('constructor').style.display = 'block';

    let title = document.getElementById('constructor').getElementsByClassName('text')[0];
    let description = document.getElementById('constructor').getElementsByClassName('text')[1];

    if (user !== null) {

        title.innerText = user.title;
        description.innerText = user.description;
        // console.log(user)

        let back = document.getElementById('constructor').getElementsByClassName('back')[0];
        back.src = "./images/back.jpg";

    //new duck
    } else {

        // title.innerText = "Заголовок для новой утки";
        // description.innerText = "Напиши сюда текст который будет виден в мобильном клиенте, прямо выдели вот это все и отредактируй";

        title.innerText = "";
        description.innerText = "";

        //TODO longitude latitude
    }
}

function saveDuck() {

    if (duck === null || duck.id === null)
        duck = {};

    let fields = document.getElementById('constructor').getElementsByClassName('text');

    duck.title = fields[0].innerText;
    duck.description = fields[1].innerText;
    duck.answer = fields[2].innerText;
    duck.parent = fields[3].innerText;
    duck.visibility = fields[4].innerText;
    duck.start = fields[5].innerText;

    // let name = document.getElementById('constructor').getElementsByClassName('text')[6];

    console.log(duck);

    // createDuck(duck)
}

function deleteDuck() {

}

function parentDuck() {

}

function nextDuck() {

    console.log("next duck")

    let back = document.getElementById('constructor').getElementsByClassName('back')[0];

    back.src = "./images/back.jpg";

    let description = document.getElementById('constructor').getElementsByClassName('text description')[0];

    description.innerHTML = "This is Sir, he will respect you only if you have the answer. " +
        "Do you know it? Are you aware, or just a peasant?";
}