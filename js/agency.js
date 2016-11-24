// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    var map;
    function init() {
        var univer = new google.maps.LatLng(37.9365863, 22.9307507);

        var styleArray = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#74a8be"},{"visibility":"on"}]}];

        var mapOptions = {
            zoom: 15,
            center: new google.maps.LatLng(37.9395863, 22.9307507),
            disableDefaultUI:!0,
            scrollwheel:!1,
            draggable:!1,
            styles: styleArray
          };

        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var coordInfoWindow = new google.maps.InfoWindow();
        coordInfoWindow.setContent(createInfoWindowContent(univer, map.getZoom()));


        function createInfoWindowContent(latLng, zoom) {
          return [
            '<h4>University of Peloponnese</h4>',
            'The University of the Peloponnese is a university located in the Peloponnese, Greece. It was founded in 2002 and comprises five schools in Tripoli, Corinth, Kalamata, Nafplion, and Sparta.<br/>',
            '<strong>Address:</strong> Tripoli 201 00, Greece',
            '<strong>Phone: +30 271 023 0005</strong>'
          ].join('<br>');
        }
        var image = 'img/marker.png';
        var marker = new google.maps.Marker({
            position: {lat: 37.9362863, lng: 22.9307507},
            map: map,
            icon: image
        });

        marker.addListener('click', function() {
            coordInfoWindow.open(map, marker);
        });
        coordInfoWindow.open(map, marker);

    }


    google.maps.event.addDomListener(window,"load",init),google.maps.event.addDomListener(window,"resize",function(){map.setCenter(new google.maps.LatLng(37.9365863,(22.9307507)))});
/*
    var e={zoom:15,center:
        new google.maps.LatLng(40.67,(-73.94)),
        disableDefaultUI:!0,
        scrollwheel:!1,
        draggable:!1,
        styles:[{featureType:"water",
                 elementType:"geometry",
                 stylers:[{color:"#000000"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]}]},

        t=document.getElementById("map");
        var map=new google.maps.Map(t,e);
        var l="img/marker.png",
        o=new google.maps.LatLng(40.67,(-73.94));
        new google.maps.Marker({position:o,map:map,icon:l})}


*/
})(jQuery); // End of use strict
