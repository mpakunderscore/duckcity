//'59.9547';
//'30.3275';

let map;
let markers = [];

function initMap() {

    // const city = {lat: 37.5662684, lng: -122.39029697};
    const city = {lat: 59.9547, lng: 30.3275};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: city,
        mapTypeId: 'mapStyle',

        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
    });

    map.mapTypes.set('mapStyle', new google.maps.StyledMapType(mapStyle, { name: 'Map style' }));
}

function buildWebMap(map) {

    let users = map.users;

    for (let id in users) {
        setUser(users[id]);
    }

    let places = map.places;

    for (let id in places) {
        setPlace(places[id]);
    }
}

function createMarker(user, position) {

    let image = {
        url: images[user.name],
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(250, 250),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(35, 35),

        scaledSize: new google.maps.Size(70, 70)
    };

    user.marker = new google.maps.Marker({

        position: position,
        map: map,
        // label: 'Label',
        icon: image
    });
}

function changeUserImage(user) {

    console.log('change user image: ' + user.id + ' to name: ' + user.name);

    let place = markers.place(user);

    let position = markers[place].marker.getPosition();

    markers[place].marker.setMap(null);
    markers.remove(place);

    createMarker(user, position);

    markers.push(user);
}

function setUser(region) {

    console.log('place user: ' + region.id);
    // console.log(region)

    let user = {
        id: region.id,
        name: region.name,
        region: {
            latitude: region.latitude,
            longitude: region.longitude,
        },
        title: 'user',
        description: 'user'
    };

    let position = {lat: user.region.latitude, lng: user.region.longitude};

    let place = markers.place(user);

    //update user
    if (place > -1 && markers[place].image === images[region.name]) {

        markers[place].marker.setPosition(position);

        //or recreate marker
    } else {

        if (place > -1 ) {
            markers[place].marker.setMap(null);
            markers.remove(place);
        }

        console.log(images[region.name])

        createMarker(user, position);

        user.image = images[region.name];

        // user.marker.setAnimation(google.maps.Animation.BOUNCE);

        markers.push(user);
    }
}

function removeUser(id) {

    console.log('remove user: ' + id)

    let place = markers.place({id: id});

    if (place > -1) {

        markers[place].marker.setMap(null);
        markers.remove(place);
    }
}

function setPlace(place) {

}

Array.prototype.place = function (obj) {

    let i = this.length;
    while (i--) {

        if (this[i].id == obj.id) {
            return i;
        }
    }
    return -1;
};

Array.prototype.remove = function (id) {

    let i = this.length;
    while (i--) {

        if (this[i].id == id) {
            this.splice(i, 1);
        }
    }
};