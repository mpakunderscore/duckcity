let path = window.location.href.toString().split(window.location.host)[1];

console.log(path);

document.getElementById("main").innerHTML = load("html/about.html");

let about = localStorage.getItem("about");

const way = [
    "about",
    "connect",
    "news",
    "login",
    "copyright",
    "privacy",
    "social",
    "api",
    "client"
];

let links = document.getElementById('header').getElementsByTagName('a');

// var elems = document.querySelectorAll(".widget.hover");

let links2 = document.getElementById('footer').getElementsByTagName('a');
// links.concat(links2);

function checkLinks(path) {

    // console.log(path.replace(/[/]*/g, ""))

    // alert(location);

    for (let i = 0; i < links.length; i++) {
        links[i].className = "";
    }

    for (let i = 0; i < links2.length; i++) {
        links2[i].className = "";
    }

    for (let i = 0; i < links.length; i++) {
        if (path.replace(/[/]*/g, "") === links[i].textContent.toLowerCase()) {
            links[i].className = "active";
            return;
        }
    }

    for (let i = 0; i < links2.length; i++) {
        if (path.replace(/[/]*/g, "") === links2[i].textContent.toLowerCase()) {
            links2[i].className = "active";
            return;
        }
    }
}

function loadPage(path) {

    for (let i = 0; i < way.length; i++) {

        // console.log(way[i])

        if (path.startsWith("/" + way[i]))
            document.getElementById("main").innerHTML = load("html/" + way[i] + ".html");
    }
}

loadPage(path);

checkLinks(path);

function openPage(state) {

    window.history.pushState({}, null, "/");

    // window.history.replaceState({}, null, state);
    if (state === "about") {

        window.history.pushState({}, null, "");

        // if (about)
            // return;
            // closeModal();

    } else window.history.pushState({}, null, state);

    // location.replace("/", "")

    loadPage("/" + state);

    checkLinks("/" + state);
}



function closeModal() {

    document.getElementById("main").innerHTML = "";
    localStorage.setItem("about", true);
}

function closeAbout(block) {

    // if ()

    // closeModal();
}
