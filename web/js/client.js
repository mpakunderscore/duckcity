
//CLIENT

const port = 3000;
const ip = 'localhost:' + port;

// let socket = io(ip, {secure: false});
let socket = io(window.location.hostname, {secure: true});

// socket.on('connect', function(){});
// socket.on('event', function(data){});
// socket.on('disconnect', function(){});

// export let sendSound = function () {
//     socket.emit('sound', 'some sound');
// };

// export let sendLocation = function (region) {
//     socket.emit('location', JSON.stringify(region));
// };

socket.on('sound', (message) => {
    // playSound();
});

socket.on('map', (map) => {
    buildWebMap(JSON.parse(map));
});

socket.on('location', (region) => {
    setUser(JSON.parse(region));
});

socket.on('image', (user) => {
    changeUserImage(JSON.parse(user));
});

socket.on('disconnected', (id) => {
    removeUser(id);
});