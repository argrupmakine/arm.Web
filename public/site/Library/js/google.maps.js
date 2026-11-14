function initMaps() {
	var maps = document.getElementsByClassName('map');

	for (var i = 0; i < maps.length; i++) {
		var t = maps.item(i), data = t.dataset, map, marker,
      latLng = data['latLng'],
      zoom = parseFloat((data['mapZoom'] || 14).toString()),
      icon = data['mapIcon'],
      style = data['mapStyle'] || 'fuse',
      zoomControl = data['zoomControl'] || true;

		if (latLng) {
			var _x = latLng.split(',');
			if (_x && _x.length === 2) {
				latLng = { lat: parseFloat(_x[0]), lng: parseFloat(_x[1]) };

				var opt = {
					center: latLng,
					zoom: zoom,
					zoomControl: zoomControl,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					rotateControl: false,
					fullscreenControl: true,
					styles: []
				};
				switch (style) {
					case 'light-gray-and-blue':
						opt.styles = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#dde6e8" }, { "visibility": "on" }] }];
						break;
					case 'blue-essence':
						opt.styles = [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }];
						break;
					case 'shades-of-grey':
						opt.styles = [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 17 }] }];
						break;
					case 'fuse':
					default:
						opt.styles = [{ "featureType": "administrative.province", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "transit", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }];
						break;
				}

				map = new google.maps.Map(t, opt);


				marker = new google.maps.Marker({ position: latLng, map: map, icon: icon });
			}
		}

		/*
    map = new google.maps.Map(t, {
      center: latLng,
      zoom: zoom,
      zoomControl: false,
      mapTypeControl: true,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: true,
      styles: [
      ]
    });
    marker = new google.maps.Marker({ position: latLng, map: map });
    */
	}

	/*
  $('.map').each(function () {
    var $t = $(this), map, marker,
      id = $t.attr('id'),
      latLng = $t.data('latLng'),
      zoom = $t.data('mapZoom') || 14,
      icon = $t.data('mapIcon');

    if (latLng) {
      var _x = latLng.split(',');
      if (_x && _x.length === 2) {
        latLng = { lat: lat, lng: lng }

        map = new google.maps.Map(document.getElementById(id), {
          center: latLng,
          zoom: zoom,
          zoomControl: false,
          mapTypeControl: true,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: true,
          fullscreenControl: true,
          styles: [
          ]
        });


        marker = new google.maps.Marker({ position: latLng, map: map });
      }
    }

    console.log(google);
  });
  */
};