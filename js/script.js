$(document).ready(function() {

  if ("geolocation" in navigator) {
    var lon, lat;

    navigator.geolocation.getCurrentPosition(function(pos) {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;
      var link = "https://api.wunderground.com/api/f4f68b767674941e/geolookup/conditions/q/"+lat+","+lon+".json";

      $.ajax(link, {
        success: function(resp) {
          $("#bigHeader").append(resp.location.city);
          $(".weatherContent").append("<span id='faren'>" + resp.current_observation.temp_f + "°F</span>");
          $(".weatherContent").append("<span id='celsi'>" + resp.current_observation.temp_c + "°C</span>");
          var icons = resp.current_observation.icon;
          $("i").addClass(wuMap[icons]);
        }
      })
    })

  } else {
    $("#bigHeader").text("Unable to acquire user location.");
    console.log("Geolocation not found!");
  }

  $(".switch :checkbox").on("change", function(){
    console.log("click!");
    $("#faren").toggle();
    $("#celsi").toggle();
  });
});

var wuMap = {
  chanceflurries:"wi wi-day-snow-wind",
  chancerain:"wi wi-day-rain",
  chancesleat:"wi wi-day-sleet",
  chancesnow:"wi wi-day-snow-wind",
  chancetstorms:"wi wi-day-thunderstorm",
  clear:"wi wi-day-sunny",
  cloudy:"wi wi-day-cloudy",
  flurries:"wi wi-day-snow-wind",
  hazy:"wi wi-day-haze",
  mostlycloudy:"wi wi-day-cloudy",
  mostlysunny:"wi wi-day-sunny",
  partlycloudy:"wi wi-day-cloudy",
  partlysunny:"wi wi-day-sunny",
  rain:"wi wi-day-rain",
  sleat:"wi wi-day-sleet",
  snow:"wi wi-day-snow-wind",
  sunny:"wi wi-day-sunny",
  tstorms:"wi wi-day-thunderstorm",
  unknown:"wi wi-day-sunny"
}
