// Initialize and add the map
function initMap() {
  
  var AKL = {
    loc: {
      lat: -36.849,
      lng: 174.763
    },
    name: "Auckland"
  };
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: AKL.loc
  });
  var marker = new google.maps.Marker({
    position: AKL.loc,
    map: map
  });
  marker.addListener('click', function () {
    console.error('ONCLICK!');
    var textBox = document.getElementById('usr');
    textBox.setAttribute('value', AKL.name);
    textBox.focus();
  });
}