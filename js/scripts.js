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
   });

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

   var popup = new mapboxgl.Popup()
   // When a click event occurs on a feature in the res layer, open a popup at the
   // location of the click, with description HTML from its properties.
   map.on('mouseenter', 'fill-castle_village', function(e) {
    popup
     .setLngLat(e.lngLat)
     .setHTML(`
      <body><td><div id='image-zoom' style="background-image:url('${e.features[0].properties.Picture}'); height：50px; width: 120px;margin-left: auto; margin-right: auto;background-repeat:no-repeat; background-position:center; background-size:contain "></div></td>
      <p><h2>${e.features[0].properties.PropertyName}</h2></p>
      <strong> ENERGY STAR Score: </strong> ${e.features[0].properties.Score}</br>
      <strong> Self-Reported Gross Floor Area (ft²): </strong> ${e.features[0].properties.FloorArea}</br>
      <strong> Natural Gas Use (kBtu): </strong> ${e.features[0].properties.Gas}</br>
      <strong> Electricity Use - Grid Purchase (kWh): </strong> ${e.features[0].properties.Electricity}</br>
      <strong> Total GHG Emissions (Metric Tons CO2e): </strong> ${e.features[0].properties.Emissions}</br>
      <strong> YearBuilt: </strong> ${e.features[0].properties.YearBuilt}</br>
      <strong> Address: </strong> ${e.features[0].properties.Address}</br>
      <strong> Borough: </strong> ${e.features[0].properties.Borough}</br>
      <strong> Website:</strong><a>${e.features[0].properties.website}</a>
      </body>
      <style>
                #image-zoom:hover {
                  transform: scale(3);
                }
                </style>
      `)
     .addTo(map);
   });

   map.on('mouseenter', 'fill-castle_village', function() {
    map.getCanvas().style.cursor = 'pointer';
   });


   var popup = new mapboxgl.Popup()
   // When a click event occurs on a feature in the res layer, open a popup at the
   // location of the click, with description HTML from its properties.
   map.on('mouseenter', 'fill-boulevard_gardens', function(e) {
    popup
     .setLngLat(e.lngLat)
     .setHTML(`
       <body><td><div id='image-zoom' style="background-image:url('${e.features[0].properties.Picture}'); height：50px; width: 120px;margin-left: auto; margin-right: auto;background-repeat:no-repeat; background-position:center; background-size:contain "></div></td>
       <p><h2>${e.features[0].properties.PropertyName}</h2></p>
       <strong> ENERGY STAR Score: </strong> ${e.features[0].properties.Score}</br>
       <strong> Self-Reported Gross Floor Area (ft²): </strong> ${e.features[0].properties.FloorArea}</br>
       <strong> Natural Gas Use (kBtu): </strong> ${e.features[0].properties.Gas}</br>
       <strong> Electricity Use - Grid Purchase (kWh): </strong> ${e.features[0].properties.Electricity}</br>
       <strong> Total GHG Emissions (Metric Tons CO2e): </strong> ${e.features[0].properties.Emissions}</br>
       <strong> YearBuilt: </strong> ${e.features[0].properties.YearBuilt}</br>
       <strong> Address: </strong> ${e.features[0].properties.Address}</br>
       <strong> Borough: </strong> ${e.features[0].properties.Borough}</br>
       <strong> Website:</strong><a>${e.features[0].properties.website}</a>
       </body>
       <style>
                 #image-zoom:hover {
                   transform: scale(2.5);
                 }
                 </style>
      `)
     .addTo(map);
   });

   map.on('mouseenter', 'fill-boulevard_gardens', function() {
    map.getCanvas().style.cursor = 'pointer';
   });


   var popup = new mapboxgl.Popup()
   // When a click event occurs on a feature in the res layer, open a popup at the
   // location of the click, with description HTML from its properties.
   map.on('mouseenter', 'fill-100_barclay_street', function(e) {
    popup
     .setLngLat(e.lngLat)
     .setHTML(`
       <body><td><div id='image-zoom' style="background-image:url('${e.features[0].properties.Picture}'); height：50px; width: 120px;margin-left: auto; margin-right: auto;background-repeat:no-repeat; background-position:center; background-size:contain "></div></td>
       <p><h2>${e.features[0].properties.PropertyName}</h2></p>
       <strong> ENERGY STAR Score: </strong> ${e.features[0].properties.Score}</br>
       <strong> Self-Reported Gross Floor Area (ft²): </strong> ${e.features[0].properties.FloorArea}</br>
       <strong> Natural Gas Use (kBtu): </strong> ${e.features[0].properties.Gas}</br>
       <strong> Electricity Use - Grid Purchase (kWh): </strong> ${e.features[0].properties.Electricity}</br>
       <strong> Total GHG Emissions (Metric Tons CO2e): </strong> ${e.features[0].properties.Emissions}</br>
       <strong> YearBuilt: </strong> ${e.features[0].properties.YearBuilt}</br>
       <strong> Address: </strong> ${e.features[0].properties.Address}</br>
       <strong> Borough: </strong> ${e.features[0].properties.Borough}</br>
       <strong> Website:</strong><a>${e.features[0].properties.website}</a>
       </body>
       <style>
                 #image-zoom:hover {
                   transform: scale(2.5);
                 }
                 </style>
      `)
     .addTo(map);
   });
   // Change the cursor to a pointer when the mouse is over the states layer.
   map.on('mouseenter', 'fill-100_barclay_street', function() {
    map.getCanvas().style.cursor = 'pointer';
   });

   var popup = new mapboxgl.Popup()
   // When a click event occurs on a feature in the res layer, open a popup at the
   // location of the click, with description HTML from its properties.
   map.on('mouseenter', 'fill-london_terrace', function(e) {
    popup
     .setLngLat(e.lngLat)
     .setHTML(`
       <body><td><div id='image-zoom' style="background-image:url('${e.features[0].properties.Picture}'); height：50px; width: 120px;margin-left: auto; margin-right: auto;background-repeat:no-repeat; background-position:center; background-size:contain "></div></td>
       <p><h2>${e.features[0].properties.PropertyName}</h2></p>
       <strong> ENERGY STAR Score: </strong> ${e.features[0].properties.Score}</br>
       <strong> Self-Reported Gross Floor Area (ft²): </strong> ${e.features[0].properties.FloorArea}</br>
       <strong> Natural Gas Use (kBtu): </strong> ${e.features[0].properties.Gas}</br>
       <strong> Electricity Use - Grid Purchase (kWh): </strong> ${e.features[0].properties.Electricity}</br>
       <strong> Total GHG Emissions (Metric Tons CO2e): </strong> ${e.features[0].properties.Emissions}</br>
       <strong> YearBuilt: </strong> ${e.features[0].properties.YearBuilt}</br>
       <strong> Address: </strong> ${e.features[0].properties.Address}</br>
       <strong> Borough: </strong> ${e.features[0].properties.Borough}</br>
       <strong> Website:</strong><a>${e.features[0].properties.website}</a>
       </body>
       <style>
                 #image-zoom:hover {
                   transform: scale(3);
                 }
                 </style>
      `)
     .addTo(map);
   });

   // Change the cursor to a pointer when the mouse is over the states layer.
   map.on('mouseenter', 'fill-london_terrace', function() {
    map.getCanvas().style.cursor = 'pointer';
   });
});
