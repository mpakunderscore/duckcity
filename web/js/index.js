function load(href) {

    let request = new XMLHttpRequest();
    request.open("GET", href, false);
    request.send();
    return request.responseText;
}

function login() {
    closeModal()
}