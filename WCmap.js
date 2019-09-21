// Initialize map to specified coordinates
  var map = L.map( 'map', {
    center: [ 51.5, -0.1], // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
    zoom: 12
});

  // Add tiles (streets, etc)
  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a','b','c']
}).addTo( map );

var query_addr = "99 Southwark St, London SE1 0JF, UK";
// Get the provider, in this case the OpenStreetMap (OSM) provider.
const provider = new window.GeoSearch.OpenStreetMapProvider()
// Query for the address
var query_promise = provider.search({ query: query_addr});
// Wait until we have an answer on the Promise
query_promise.then( value => {
   for(i=0;i < value.length; i++){
     // Success!
     var x_coor = value[i].x;
     var y_coor = value[i].y;
     var label = value[i].label;
     // Create a marker for the found coordinates
     var marker = L.marker([y_coor,x_coor]).addTo(map) // CAREFULL!!! The first position corresponds to the lat (y) and the second to the lon (x)
     // Add a popup to said marker with the address found by geosearch (not the one from the user)
     marker.bindPopup("<b>Found location</b><br>"+label).openPopup();
   };
}, reason => {
  console.log(reason); // Error!
} );

