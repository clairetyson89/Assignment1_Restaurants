var map = L.map('map').setView([38.62936606062699, -90.25318557158936], 12);

  // load a tile layer
 L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

$.get.GeoJSON(https://github.com/clairetyson89/Assignment1_Restaurants/blob/main/points.geojson)
	      L.GeoJSON(data, {
onEachFeature: function(feature, layer) {
	layer.bindPopup(<h2>+feature.properties.Restaurant+</h2>);
			}
			}).addTo(map);
});

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Restaurant Name": "Schlafly Taproom",
        "Rating": "4 stars",
        "popupContent": "Schlafly Taproom: 4 Stars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.20967364311218,
          38.63298046090374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant Name": "White Knight Diner",
        "Rating": "3.5 stars",
        "popupContent": "White Knight: 3.5 Stars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.20578980445862,
          38.63158920958141
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant Name": "Eleven Eleven MS",
        "Rating": "4.5 stars",
        "popupContent": "Eleven Eleven Mississippi: 4.5 Stars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.21318197250366,
          38.61951939049486
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant Name": "Uncle Bill's",
        "Rating": "3 stars",
        "popupContent": "Uncle Bill's Pancakes: 3 Stars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.27109622955322,
          38.596866234005105
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Restaurant Name": "Stella Blues",
        "Rating": "5 stars",
        "popupContent": "Stella Blue's: 5 Stars"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -90.26219129562378,
          38.59881156734197
        ]
      }
    }
  ]
};

var feat = L.geoJSON(geojsonFeature).addTo(map);
