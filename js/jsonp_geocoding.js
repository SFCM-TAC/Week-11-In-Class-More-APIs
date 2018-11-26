function handleGeocodeResult(result) {
  console.log(result);
  console.log(result.address.city);
  sessionStorage.setItem('city', result.address.city);
  // TODO: do something interesting with results
}

function requestGeocode(lat, lng) {
  // JSONP requires writing a <script> tag to the HTML body:
  var script = document.createElement('script');
  script.src = "https://nominatim.openstreetmap.org/reverse?lat=" + lat + "&lon=" + lng + "&format=json&json_callback=handleGeocodeResult";
  document.body.appendChild(script);
};

function getUserLocation() {
  navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos);
    // TODO: parse out lat and lng and send to geocode
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    requestGeocode(lat, lng);
  });
}

window.addEventListener('load', function() {
  var existingCity = sessionStorage.getItem('city');
  if (!existingCity) {
    getUserLocation();
  }
});
