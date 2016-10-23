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
          //$("i").addClass(wuMap[icons]);
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
  chanceflurries:"wi-wu-chanceflurries snow-wind",
  chancerain:"wi-wu-chancerain rain",
  chancesleat:"wi-wu-chancesleat sleet",
  chancesnow:"wi-wu-chancesnow snow",
  chancetstorms:"wi-wu-chancetstorms thunderstorm",
  clear:"wi-wu-clear day-sunny",
  cloudy:"wi-wu-cloudy day-cloudy",
  flurries:"wi-wu-flurries snow-wind",
  hazy:"wi-wu-hazy day-haze",
  mostlycloudy:"wi-wu-mostlycloudy day-cloudy",
  mostlysunny:"wi-wu-mostlysunny day-sunny",
  partlycloudy:"wi-wu-partlycloudy day-cloudy",
  partlysunny:"wi-wu-partlysunny day-sunny",
  rain:"wi-wu-rain showers",
  sleat:"wi-wu-sleat sleet",
  snow:"wi-wu-snow snow",
  sunny:"wi-wu-sunny day-sunny",
  tstorms:"wi-wu-tstorms thunderstorm",
  unknown:"wi-wu-unknown day-sunny"
}
