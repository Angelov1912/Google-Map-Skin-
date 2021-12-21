//Change the coordinates with the desired location
//North Middlesex Hospital- 51.61278871185562, -0.07212407837543477

function initMap() {
  //Location of the hospital
  const northMdlsx = { lat: 51.61278871185562, lng: -0.07212407837543477 };
  //Map centered at the hospital
  const map = new google.maps.Map(document.getElementById("map"), {
    mapId: "a210e3b986403917",
    center: northMdlsx,
    zoom: 14,
  });

  //Add Marker
  let marker = new google.maps.Marker({
    position: northMdlsx,
    map: map,
    title: "North Middlesex Hospital",
    draggable: true,
    animation: google.maps.Animation.DROP, //Animation single drop effect on page load
    icon: {
      url: "hospital2.svg",
      scaledSize: new google.maps.Size(80, 80),
    }
  });
  //Add event listener for animation on click
  marker.addListener("click", toggleBounce);

  //Function activated from event listener 
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
