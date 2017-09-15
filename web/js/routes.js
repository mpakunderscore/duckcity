let path = window.location.href.toString().split(window.location.host)[1];

document.getElementById("main").innerHTML = load("html/info.html");

if (path.startsWith("/locals")) {
    document.getElementById("main").innerHTML = load("html/locals.html");
}

if (path.startsWith("/news")) {
    document.getElementById("main").innerHTML = load("html/news.html");
}

if (path.startsWith("/login")) {
    document.getElementById("main").innerHTML = load("html/login.html");
}



function closeModal() {
    document.getElementById("main").innerHTML = "";
    // document.getElementById('about').style.display = 'none';
}
