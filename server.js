//SERVER

let map = {
    users: {},
    npc: []
};

let network = require('./network.js');
network.run(map);

let database = require('./database.js');
database.run(map);

