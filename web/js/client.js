
//CLIENT

const port = 3000;

// let socket = io('https://' + ip + ':' + port, {secure: true});
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
    placeUser(JSON.parse(region));
});

socket.on('disconnected', (id) => {
    removeUser(id);
});