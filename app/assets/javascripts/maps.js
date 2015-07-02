$(document).ready(function(){
  var handler = Gmaps.build('Google');
  var mapStyle =[
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
];

  handler.buildMap({ internal: {id: 'map'}, provider:{ zoom:14, mapTypeId:google.maps.MapTypeId.ROADMAP,vmapTypeControl:false, navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},
styles: mapStyle} }, function(){
    loadMarkers();
    if(navigator.geolocation)
      navigator.geolocation.getCurrentPosition(displayOnMap);
  });



  function displayOnMap(position){
    var marker = handler.addMarker({

      lat: position.coords.latitude,
      lng: position.coords.longitude,
      picture: {
        url: "/here.png",
        width:  36,
        height: 36
      },
        title: "You're here",
    });
    
    handler.map.centerOn(marker);

  };
  
  $('.linktoposition').on('click', function(centerOnClick) {
    console.log("lat: ",$('#linktoposition').data('latitude'), "long: ",$('#linktoposition').data('longitude') )
    displayCustomMarkersOnMap($('#linktoposition').data('latitude'), $('#linktoposition').data('longitude'));
    
  });
  
  function displayCustomMarkersOnMap(latitude, longitude){
   
    var markers = handler.addMarker({
      lat: latitude,
      lng: longitude,
      picture: {
        url: "/markerscolor.png",
        width:  36,
        height: 36
      },
       
    });
    
     handler.map.centerOn(markers);
  };
  
  function loadMarkers(){
      $.ajax({
        url:"/markers",
        data: "",
        success: function(response){
          for(var i = 0; i< response.length; i++){
            console.log(response[i]);
            displayCustomMarkersOnMap(response[i].latitude, response[i].longitude)
          }
          if( $("#hidden_data").data("lat") !== undefined && $("#hidden_data").data("lon") !== undefined)
            displayCustomMarkersOnMap($("#hidden_data").data("lat"), $("#hidden_data").data("lon"))
          
        },
        error: function(){alert("Success: false")},
        dataType: "json"
    
      });
  }
 
});

  function centerOnClick(){
    var markers = handler.addMarker({
      lat: latitude,
      lng: longitude,
      picture: {
        url: "/markers.png",
        width:  36,
        height: 36
      },
       
    });
    
     handler.map.centerOn(markers);
  };

  