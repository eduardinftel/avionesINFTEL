/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var map;
function initialize() {
    var mapOptions = {
        zoom: 15
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                    position.coords.longitude);

//            var infowindow = new google.maps.InfoWindow({
//                map: map,
//                position: pos,
//                content: 'Usted está aquí'
//            });
//
//            map.setCenter(pos);
            var i;
            var ciudad;
            $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng=" + position.coords.latitude + "," + position.coords.longitude + "&sensor=false", function (result) {

                var resultado = result.results;


                for (i in resultado) {
                    if (resultado[i].types[0] == "locality") {
                        ciudad = resultado[i].formatted_address;
                        break;
                    }
                }

                var marker = new google.maps.Marker({
                    map: map,
                    title: 'Museo'
                });
                
                
//                var searchBox = new google.maps.places.SearchBox(
//    /** @type {HTMLInputElement} */('museo avion, '+ciudad));

                new google.maps.Geocoder().geocode({'address': 'Museo transporte aereo ' + ciudad}, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (!marker) {
                            marker = new google.maps.Marker({
                                map: map,
                                draggable: true
                            });

                            //google.maps.event.addListener(marker, 'click', showLocation);
                        }

                        marker.setPosition(results[0].geometry.location);
                        map.setCenter(results[0].geometry.location);
                        map.setZoom(15);
                        alert(results[0].formatted_address)
                        
                    } else {
                        alert("Geocode was not successful for the following reason: " + status);
                    }
                });
            });


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