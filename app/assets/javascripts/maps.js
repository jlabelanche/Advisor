$(document).ready(function(){

var handler = Gmaps.build('Google');
handler.buildMap({ internal: {id: 'geolocation'} }, function(){
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition();
});

function displayOnMap(position){
  var marker = handler.addMarker({
    lat: position.coords.latitude,
    lng: position.coords.longitude,
  });
  handler.map.centerOn(marker);
};
})


/*	initialize();
function initialize() {

var map;

var mapOptions = {
    center:latlon,
    zoom:14,
	mapTypeId:google.maps.MapTypeId.ROADMAP,
	mapTypeControl:false,
	navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},
    stylers:[{
	 	featureType:"all",
	 	elementType:"labels.text.fill", stylers:[{color:"#ffffff"}]}, {featureType:"all", elementType:"labels.text.stroke", stylers:[{color:"#000000"},{lightness:13}]},
	 	{featureType:"administrative",
	 	elementType:"geometry.fill",
	 	stylers:[{color:"#000000"}]}, {featureType:"administrative",
	 	elementType:"geometry.stroke",
	 	stylers:[{color:"#144b53"},{"lightness":14}, {"weight":1.4}]},{featureType:"landscape",
	 	elementType:"all",
	 	stylers:[{color:"#08304b"}]}, {"featureType":"poi",elementType:"geometry",stylers:[{"color":"#0c4152"},{"lightness":5}]},
	 	{featureType:"road.highway", elementType:"geometry.fill", stylers:[{"color":"#000000"}]}, {featureType:"road.highway",
	 	elementType:"geometry.stroke",
	 	stylers:[{color:"#0b434f"}, {"lightness":25}]}, {featureType:"road.arterial",	elementType:"geometry.fill", stylers:[{"color":"#000000"}]},
	 	{featureType:"road.arterial", elementType:"geometry.stroke", stylers:[{color:"#0b3d51"},
	 	{lightness:16}]},{featureType:"road.local", elementType:"geometry",
	 	stylers:[{color:"#000000"}]}, {featureType:"transit", elementType :"all", stylers:[{color:"#146474"}]}, {featureType:"water",elementType:"all",stylers:[{color:"#021019"}]
	 }]
  };


  map = new google.maps.Map(document.getElementById('mapholder'));

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'Location found using HTML5.'
      });

      map.setCenter(pos);
    }, function() {
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

  var markers = [];
  var map = new google.maps.Map(document.getElementById('mapholder'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition, showError);
	    } else { 
	    x.innerHTML = "Geolocation is not supported by this browser.";
			    }
	}

	function showPosition(position) {
	 lat = position.coords.latitude;
	 lon = position.coords.longitude;
	 latlon = new google.maps.LatLng(lat, lon)
	 mapholder = document.getElementById('mapholder')

	 
  var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(-33.8902, 151.1759),
      new google.maps.LatLng(-33.8474, 151.2631));
  map.fitBounds(defaultBounds);

  // Create the search box and link it to the UI element.
  var input = /** @type {HTMLInputElement} (
      document.getElementById('pac-input'));
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var searchBox = new google.maps.places.SearchBox(
    /** @type {HTMLInputElement} (input));

  // [START region_getplaces]
  // Listen for the event fired when the user selects an item from the
  // pick list. Retrieve the matching places for that item.
  google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
  });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
})
  
	var map = new google.maps.Map(document.getElementById("mapholder"));
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
*/