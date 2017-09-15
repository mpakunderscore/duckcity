let path = window.location.href.toString().split(window.location.host)[1];

console.log(path);

document.getElementById("main").innerHTML = load("html/info.html");

const way = [
    "locals",
    "news",
    "login",
    "copyright",
    "privacy",
    "social",
    "api",
];

for (let i = 0; i < way.length; i++) {

    // console.log(way[i])

    if (path.startsWith("/" + way[i]))
        document.getElementById("main").innerHTML = load("html/" + way[i] + ".html");
}

let links = document.getElementById('header').getElementsByTagName('a');
let links2 = document.getElementById('footer').getElementsByTagName('a')
// links.concat(links2);

function checkLinks() {

    for (let i = 0; i < links.length; i++) {
        if (path.replace(/[/]*/g, "") === links[i].getAttribute("href").replace("/", "")) {
            links[i].className = "active";
            return;
        }
    }

    for (let i = 0; i < links2.length; i++) {
        if (path.replace(/[/]*/g, "") === links2[i].getAttribute("href").replace("/", "")) {
            links2[i].className = "active";
            return;
        }
    }
}

checkLinks();

function closeModal() {
    document.getElementById("main").innerHTML = "";
    // document.getElementById('about').style.display = 'none';
}
