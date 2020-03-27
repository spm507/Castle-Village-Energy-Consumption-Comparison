mapboxgl.accessToken = 'pk.eyJ1Ijoic3BtNTA3IiwiYSI6ImNrNmxmYnZrMTAzNzAzaHBodTRmd2hpZm0ifQ.Tf4_3bYwjcuHv39tq01CWQ';


var initialCenterPoint = [-73.939862, 40.853433]
var initialZoom = 16

// create an object to hold the initialization options for a mapboxGL map
var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/dark-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

// create the new map
var map = new mapboxgl.Map(initOptions);

// add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// wait for the initial style to Load
map.on('style.load', function() {

  // add a geojson source to the map using our external geojson file
  map.addSource('castle_village', {
    type: 'geojson',
    data: './data/castle_village.geojson',
  });

  map.addSource('london_terrace', {
    type: 'geojson',
    data: './data/london_terrace.geojson',
  });

  map.addSource('boulevard_gardens', {
    type: 'geojson',
    data: './data/boulevard_gardens.geojson',
  });

  map.addSource('100_barclay_street', {
    type: 'geojson',
    data: './data/100_barclay_street.geojson',
  });

  // let's make sure the source got added by logging the current map state to the console
  console.log(map.getStyle().sources)

  // add a layer for our custom source
  map.addLayer({
    id: 'fill-castle_village',
    type: 'fill',
    source: 'castle_village',
    paint: {
        'fill-color': 'tan',
      }
    });

    map.addLayer({
      id: 'fill-london_terrace',
      type: 'fill',
      source: 'london_terrace',
      paint: {
          'fill-color': 'pink',
        }
      });

      map.addLayer({
        id: 'fill-boulevard_gardens',
        type: 'fill',
        source: 'boulevard_gardens',
        paint: {
            'fill-color': 'teal',
          }
        });

        map.addLayer({
          id: 'fill-100_barclay_street',
          type: 'fill',
          source: '100_barclay_street',
          paint: {
              'fill-color': 'orange',
            }
          })

          // Fly to Buttons to each divisions
  $('#London').on('click', function() {
            map.flyTo({
              center: [-74.0031432, 40.7474312],
              zoom: 16
            });
          });
  $('#Boulevard').on('click', function() {
            map.flyTo({
              center: [-73.907924, 40.7588546],
              zoom: 16
            });
          });
  $('#Barclay').on('click', function() {
            map.flyTo({
              center: [-74.0139115, 40.7139888],
              zoom: 15
            });
          });
  $('#Castle').on('click', function() {
            map.flyTo({
              center: [-73.939862, 40.853433],
              zoom: 16
            });
          });
