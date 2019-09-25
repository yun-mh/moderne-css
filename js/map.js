
var map;

function initMap() {
    var moderne1 = {lat: 35.1682835, lng: 136.8858000};
    var moderne2 = {lat: 35.6916554, lng: 139.6947481};
    var moderne3 = {lat: 34.699875, lng: 135.4908433};
    var moderne4 = {lat: 34.699875, lng: 135.4908433};

    map = new google.maps.Map(document.getElementById('map'), {
    center: moderne1,
    zoom: 15,
    // zoomControl: boolean,
    mapTypeControl: false,
    // scaleControl: boolean,
    streetViewControl: false,
    // rotateControl: boolean,
    // fullscreenControl: boolean,
    styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
            }
          ]
        }
    ]
  });

  var locations = [
    {lat: 35.1682835, lng: 136.8858000},
    {lat: 35.6916554, lng: 139.6947481},
    {lat: 34.699875, lng: 135.4908433},
    {lat: 48.859879, lng: 2.3425283},
  ];

  var store1 = document.querySelector(".store1");
  var store2 = document.querySelector(".store2");
  var store3 = document.querySelector(".store3");
  var store4 = document.querySelector(".store4");

  var marker, i;
  var icon = "./images/marker.png";

  var markers = [];
  for (i = 0; i < locations.length; i++) {  
    marker = new google.maps.Marker({
      id:i,
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      map: map,
      icon: icon
    });
    markers.push(marker);
  }

  store1.addEventListener('click', ()=>{
    map.setZoom(15);
    map.setCenter(markers[0].getPosition());
  });

  store2.addEventListener('click', ()=>{
    map.setZoom(15);
    map.setCenter(markers[1].getPosition());
  });

  store3.addEventListener('click', ()=>{
    map.setZoom(15);
    map.setCenter(markers[2].getPosition());
  });

  store4.addEventListener('click', ()=>{
    map.setZoom(15);
    map.setCenter(markers[3].getPosition());
  }); 
}

