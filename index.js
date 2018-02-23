import './style.css';
const x = document.getElementById("container");
let lat = "";
let long = "";


// gets and renders user location

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);

    } else {
        x.textContent = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
  lat = position.coords.latitude;
  long = position.coords.longitude;

    x.textContent = `You are  ${Math.round ((33.995446 - lat)*100)/100 } degrees
    latitude and ${Math.round((-81.020728 - long)*100)/100} degrees longitude
    away from the Ward 1 polling location in Richland County.`;


    console.log (lat);
    console.log (long);
}

getLocation();

// precinct location data. I've only included one address for now but
// there are dozens for every county
//lat 33.995446
//long 81.020728
/*
const PRECINCTS = {
  ward: "Ward 1", location: "Lourie Senior Ctr", address:
  "1650 Park Cir Columbia SC 29201"

}
*/
