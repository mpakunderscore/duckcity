//SERVER

let map = {
    users: {},
    places: []
};

let network = require('./network.js');
network.run(map);

// let database = require('./database.js');
// database.run(map);

