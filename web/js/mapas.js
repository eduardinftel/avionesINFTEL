/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var map;
function initialize() {
    var mapOptions = {
        zoom: 6
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'Location found using HTML5.'
            });

            map.setCenter(pos);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        // Browser doesn't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

function miPosicion() {
    navigator.geolocation.getCurrentPosition(coordenadas);
}

function coordenadas() {
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
}

google.maps.event.addDomListener(window, 'load', initialize);