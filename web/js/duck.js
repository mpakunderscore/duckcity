let duck = {};

function openConstructor(user, region) {

    duck = user;

    // closeAbout();

    closeModal()

    // document.getElementById('constructor').style.display = 'block';

    document.getElementById("main").innerHTML = load("html/constructor.html");

    let fields = document.getElementById('constructor').getElementsByClassName('field')[0];

    let backImg = document.getElementById('constructor').getElementsByClassName('back')[0];
    let duckImg = document.getElementById('constructor').getElementsByClassName('duck')[0];

    let title = fields[0];
    let description = fields[1];
    let answer = fields[2];

    if (user !== null) {

        console.log('OPEN DUCK')

        console.log(user)

        title.innerText = user.title;
        description.innerText = user.description;
        answer.innerText = user.answer;

        // if (user.name === undefined || user.name === null)
        //     user.name = "spacy";

        duck.marker = user.marker;

        duckImg.src = ducks[user.name];
        duck.name = user.name;

        backImg.src = back[user.back];
        duck.back = user.back;

        //new duck
    } else {

        console.log('CREATE NEW DUCK')

        duck = {};

        // backImg.src = "./images/back/night.png";

        // title.innerText = "Заголовок для новой утки";
        // description.innerText = "Напиши сюда текст который будет виден в мобильном клиенте, прямо выдели вот это все и отредактируй";

        title.innerText = "";
        description.innerText = "";
        answer.innerText = "";

        duck.latitude = region.lat;
        duck.longitude = region.lng;

        duckImg.src = ducks["goose"];
        duck.name = "goose";

        backImg.src = back["day"];
        duck.back = "day";
    }
}

function saveDuck() {

    // if (duck === null || duck.id === null)
    //     duck = {};

    let fields = document.getElementById('constructor').getElementsByClassName('text');

    duck.title = fields[0].innerText;
    duck.description = fields[1].innerText;
    duck.answer = fields[2].innerText;
    // duck.parent = fields[3].innerText;
    // duck.visibility = fields[4].innerText;
    // duck.start = fields[5].innerText;

    // duck.name = "goose";

    // let name = document.getElementById('constructor').getElementsByClassName('text')[6];

    // console.log(duck);

    updateDuck(duck);

    closeModal();
}

function deleteDuck() {

}

function parentDuck() {

}

function nextDuck() {

    console.log("next duck");

    let duckImg = document.getElementById('constructor').getElementsByClassName('duck')[0];

    let count = 0;
    for (let some in ducks)
        if (Math.random() < 1/++count) {
            // console.log(some);
            duckImg.src = ducks[some];
            duck.name = some;
            // return;
        }

    // duck.src = ducks.spacy;

    // let description = document.getElementById('constructor').getElementsByClassName('text description')[0];

    // description.innerHTML = "This is Sir, he will respect you only if you have the answer.";
}

function nextBackground() {

    let backImg = document.getElementById('constructor').getElementsByClassName('back')[0];


    let count = 0;
    for (let some in back)
        if (Math.random() < 1/++count) {
            // console.log(some);
            backImg.src = back[some];
            duck.back = some;
            // return;
        }

    // alert("nextBackground");
}