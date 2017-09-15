function load(href) {

    let request = new XMLHttpRequest();
    request.open("GET", href, false);
    request.send();
    return request.responseText;
}

function login() {

    let fields = document.getElementById('login').getElementsByClassName('field');

    // console.log(fields);
    let username = fields[0].innerText;
    let password = fields[1].innerHTML;

    closeModal();

    if (username === "duck" && password === "donald") {

        openPage('client');
        showData()
    }
}

function showData() {

    // console.log(buffer)

    let texts = document.getElementById('client').getElementsByClassName('field');
    texts[0].innerText = buffer.npc.length;
    texts[1].innerText = Object.keys(buffer.users).length

}