function closeAbout() {
    document.getElementById('about').style.display = 'none';
}

function closeConstructor() {
    document.getElementById('constructor').style.display = 'none';
}

let duck = {};

function openConstructor(user, region) {

    duck = user;

    closeAbout();

    document.getElementById('constructor').style.display = 'block';

    let fields = document.getElementById('constructor').getElementsByClassName('text');

    let title = fields[0];
    let description = fields[1];
    let answer = fields[2];

    if (user !== null) {

        title.innerText = user.title;
        description.innerText = user.description;
        answer.innerText = user.answer;
        console.log(user)

        let back = document.getElementById('constructor').getElementsByClassName('back')[0];
        back.src = "./images/back.jpg";

    //new duck
    } else {

        duck = {};

        // title.innerText = "Заголовок для новой утки";
        // description.innerText = "Напиши сюда текст который будет виден в мобильном клиенте, прямо выдели вот это все и отредактируй";

        title.innerText = "";
        description.innerText = "";
        answer.innerText = "";

        duck.latitude = region.lat;
        duck.longitude = region.lng;

        //TODO longitude latitude
    }
}

function saveDuck() {

    // if (duck === null || duck.id === null)
    //     duck = {};

    let fields = document.getElementById('constructor').getElementsByClassName('text');

    duck.title = fields[0].innerText;
    duck.description = fields[1].innerText;
    duck.answer = fields[2].innerText;
    duck.parent = fields[3].innerText;
    duck.visibility = fields[4].innerText;
    duck.start = fields[5].innerText;

    duck.name = "goose";

    // let name = document.getElementById('constructor').getElementsByClassName('text')[6];

    // console.log(duck);

    updateDuck(duck);

    closeConstructor();
}

function deleteDuck() {

}

function parentDuck() {

}

function nextDuck() {

    console.log("next duck");


    let duck = document.getElementById('constructor').getElementsByClassName('duck')[0];

    duck.src = "../images/goose/spacy.png";

    // let description = document.getElementById('constructor').getElementsByClassName('text description')[0];

    // description.innerHTML = "This is Sir, he will respect you only if you have the answer.";
}

function nextBackground() {

    let back = document.getElementById('constructor').getElementsByClassName('back')[0];

    back.src = "./images/back.jpg";

    alert("nextBackground");
}