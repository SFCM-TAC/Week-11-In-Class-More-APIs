function handleGeocodeResult(result) {
  console.log(result);
  // TODO: do something interesting with results
}

function requestGeocode(lat, lng) {
  // JSONP requires writing a <script> tag to the HTML body:
  var script = document.createElement('script');
  script.src = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + lng + "&format=json&json_callback=cb";
  document.body.appendChild(script);
});

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos);
    // TODO: parse out lat and lng and send to geocode
  });
}

window.addEventListener('load', function() {
  getUserLocation();
})
