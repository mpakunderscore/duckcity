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

    // sequelize
    //     .authenticate()
    //     .then(function(err) {
    //         console.log('database connection has been established successfully');
    //     })
    //     .catch(function (err) {
    //         console.error('unable to connect to the database:', err);
    //     });
};

let Place = sequelize.define('place', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    location: Sequelize.STRING
});

Place.sync({force: false}).then(() => {

    // Table created
    return Place.create({
        title: 'First place',
        description: 'Some text',
        location: JSON.stringify({
            latitude: 59.9547,
            longitude: 30.3275,
        })
    });
});

Place.findAll().then(places => {
    map.places = places;
    // console.log(map.places)
});