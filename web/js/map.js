//'59.9547';
//'30.3275';

let map;
let markers = [];

let center;

function initMap() {

    // const city = {lat: 37.5662684, lng: -122.39029697};
    center = {lat: 59.9000, lng: 30.3000};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: center,
        mapTypeId: 'mapStyle',

        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true
    });

    // window.setInterval(function(){

        // center = {lat: center.lat + 0.01, lng: center.lng + 0.01};

        // console.log(Math.floor(Math.random()*3-1));
        // center.lat += 0.01;
        // center.lng += 0.02;

        // let point = new google.maps.LatLng(center.lat, center.lng);

        // using global variable:
        // map.panTo(point);

    // }, 50);

    map.mapTypes.set('mapStyle', new google.maps.StyledMapType(mapStyle, { name: 'Map style' }));

    google.maps.event.addListener(map, "rightclick", function(event) {

        let lat = event.latLng.lat();
        let lng = event.latLng.lng();

        // populate yor box/field with lat, lng
        // alert("Lat=" + lat + "; Lng=" + lng);
        openConstructor(null, {lat: lat, lng: lng});
    });

}

function buildWebMap(map) {

    let users = map.users;

    for (let id in users) {
        setUser(users[id]);
    }

    let npc = map.npc;

    let arrayLength = npc.length;
    for (let i = 0; i < arrayLength; i++) {
        setNPC(npc[i]);
    }
}

function createMarker(user, position) {

    let image = {
        url: ducks[user.name],
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

    user.marker.addListener('click', function() {
        // map.setZoom(8);
        // map.setCenter(marker.getPosition());
        // alert('marker click: ' + user.id)
        openConstructor(user, position);
    });
}

function changeUserImage(user) {

    console.log('change user image: ' + user.id + ' to name: ' + user.name);

    let userId = markers.place(user);

    let position = markers[userId].marker.getPosition();

    markers[userId].marker.setMap(null);
    markers.remove(userId);

    createMarker(user, position);

    markers.push(user);
}

function setUser(user) {

    // console.log('set user: ' + user.id);
    // console.log(user);

    // user.region = {
    //     latitude: user.latitude,
    //         longitude: user.longitude
    // };

    let position = {lat: user.latitude, lng: user.longitude};

    let userId = markers.place(user);

    //update user
    if (userId > -1 && markers[userId].image === ducks[user.name]) {

        markers[userId].marker.setPosition(position);

    //or recreate marker
    } else {

        if (userId > -1 ) {
            markers[userId].marker.setMap(null);
            markers.remove(userId);
        }

        // console.log(ducks[user.name])

        createMarker(user, position);

        user.image = ducks[user.name];

        // user.marker.setAnimation(google.maps.Animation.BOUNCE);

        markers.push(user);
    }
}

function removeUser(id) {

    console.log('remove user: ' + id)

    let userId = markers.place({id: id});

    if (userId > -1) {

        markers[userId].marker.setMap(null);
        markers.remove(userId);
    }
}

//yes, this is ducks. users is a ducks too. everything is a duck. its a DuckScript
//this is npc
function setNPC(duck) {

    // console.log("NPC")
    setUser(duck);
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