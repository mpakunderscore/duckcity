let Sequelize = require('sequelize');

// let sequelize = new Sequelize('quack', 'pavelkuzmin', '', {
//     host: 'localhost',
//     dialect: 'postgres',
//
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
// });

let sequelize = new Sequelize(process.env.DATABASE_URL);

let map;

exports.run = function (global) {

    map = global;
};

let NPC = sequelize.define('npc', {
    title: Sequelize.STRING,
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT
});

NPC.sync({force: false}).then(() => {

    // Table created

    // return generate();
});

let names = ['goose',
    'cyber',
    'death',
    'chick',
    'spacy',
    'sir',
    'drake']

function generate() {

    for (let i = 0; i < 100; i++ ) {

        NPC.create({
            title: 'Some title',
            name: names[Math.floor(Math.random()*names.length)],
            description: 'Some description',
            latitude: Math.floor(Math.random()*18000)/100-90,
            longitude: Math.floor(Math.random()*36000)/100-180,
        })
    }

    buildDatabaseMap()
}

// 59.9547
//30.3275

function buildDatabaseMap() {

    NPC.findAll().then(npc => {

        map.npc = [];

        npc.forEach((duck) => {
            map.npc.push(duck.get({
                plain: true
            }));
        });

        map.users['0'] = {
            title: 'Test user',
            name: 'goose',
            description: 'Some text',
            latitude: 59.0000,
            longitude: 30.0000
        };

        // for (let i in npc) {
        // npc[i].location = JSON.parse(npc[i].location);
        // }


        console.log(map)
    });
}

