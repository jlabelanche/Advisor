var x = document.getElementById("demo");

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
								    

	var myOptions = {
	center:latlon,zoom:14,
	mapTypeId:google.maps.MapTypeId.ROADMAP,
	mapTypeControl:false,
	navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
	}
	 var mapStyle = [{
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

				    
	var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
	}
	
	function showError(error) {
	   	switch(error.code) {
	    case error.PERMISSION_DENIED:
	    x.innerHTML = "User denied the request for Geolocation."
	    break;
	    case error.POSITION_UNAVAILABLE:
	    x.innerHTML = "Location information is unavailable."
	    break;
	    case error.TIMEOUT:
	    x.innerHTML = "The request to get user location timed out."
	    break;
	    case error.UNKNOWN_ERROR:
	    x.innerHTML = "An unknown error occurred."
	    break;
		}
	}

