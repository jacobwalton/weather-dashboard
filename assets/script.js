//today's date
var today = moment().format("M-D-YY");
var getSearched = localStorage.getItem('storedSearch')
//printing date to main container
$("<h3>").text(today).prependTo($(".main-container"));


//search button click event
$("#search-btn").click(function () {
  var cityName = $("#city-search").val();

  //current weather api
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName.replace(" ", "+") +
    "&units=imperial&appid=6d5c20e9aa4b04f4d3a467e43f9018ef";

  //forecast weather api
  var forecastQueryURL =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName.replace(" ", "+") +
    "&units=imperial&appid=6d5c20e9aa4b04f4d3a467e43f9018ef";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (res) {
    console.log(res);

    
    //if statement that only allow valid results to be added to list
    var searchedBtn = $("<button>")
          .attr("id", "search-result")
          .attr("value", cityName)
          .addClass("searched-list")
          .text($("input").val())

          function storedSearch(){
            localStorage.setItem('storedSearch', searchedBtn.val())
            console.log(searchedBtn.val())
          }
          storedSearch();

    if (parseInt(res.main.temp) < 300) {
      $("#searched").prepend(
        searchedBtn
      );
    }

    //display city name
    $("#city-display").text($("#city-search").val());
    if (parseInt(res.main.temp) > 55) {
      $("<i>").addClass("fas fa-sun").appendTo($("#city-display"));
    } else if (parseInt(res.main.temp) < 35) {
      $("<i>").addClass("far fa-snowflake").appendTo($("#city-display"));
    }

    //prevent duplicating data on multiple clicks
    $("#current-weather").empty();

    //display current weather data
    $("<li>")
      .html("<li>Temperature: " + parseInt(res.main.temp) + "(℉)</li>")
      .appendTo($("#current-weather"));
    $("<li>")
      .html("<li>Humidity: " + res.main.humidity + "%</li>")
      .appendTo($("#current-weather"));
    $("<li>")
      .html("<li>Wind Speed: " + parseInt(res.wind.speed) + "mph</li>")
      .appendTo($("#current-weather"));

    //uv index doesn't exist in api
    $("<li>")
      .html("<li>UV Index: <span id=uv-span>" + res.main.temp + "</span></li>")
      .appendTo($("#current-weather"));
  });

  $.ajax({
    url: forecastQueryURL,
    method: "GET",
  }).then(function (forecastRes) {
    console.log(forecastRes);

    //prevent duplicating data on multiple clicks
    $("#forecast-card1").text("");
    $("#forecast-card2").text("");
    $("#forecast-card3").text("");
    $("#forecast-card4").text("");
    $("#forecast-card5").text("");

    //day 1
    $("<li>")
      .text("Temperature: " + parseInt(forecastRes.list[0].main.temp) + "(℉)")
      .appendTo("div #forecast-card1");
    $("<li>")
      .text("Humidity: " + forecastRes.list[0].main.humidity + "%")
      .appendTo("div #forecast-card1");
    //forecast date
    $("<h3>")
      .text(moment().add(1, "d").format("M-D-YY"))
      .prependTo($("#forecast-card1"));

    //day 2
    $("<li>")
      .text("Temperature: " + parseInt(forecastRes.list[8].main.temp) + "(℉)")
      .appendTo("div #forecast-card2");
    $("<li>")
      .text("Humidity: " + forecastRes.list[8].main.humidity + "%")
      .appendTo("div #forecast-card2");
    //forecast date
    $("<h3>")
      .text(moment().add(2, "d").format("M-D-YY"))
      .prependTo($("#forecast-card2"));

    //day 3
    $("<li>")
      .text("Temperature: " + parseInt(forecastRes.list[16].main.temp) + "(℉)")
      .appendTo("div #forecast-card3");
    $("<li>")
      .text("Humidity: " + forecastRes.list[16].main.humidity + "%")
      .appendTo("div #forecast-card3");
    //forecast date
    $("<h3>")
      .text(moment().add(3, "d").format("M-D-YY"))
      .prependTo($("#forecast-card3"));

    //day 4
    $("<li>")
      .text("Temperature: " + parseInt(forecastRes.list[24].main.temp) + "(℉)")
      .appendTo("div #forecast-card4");
    $("<li>")
      .text("Humidity: " + forecastRes.list[24].main.humidity + "%")
      .appendTo("div #forecast-card4");
    //forecast date
    $("<h3>")
      .text(moment().add(4, "d").format("M-D-YY"))
      .prependTo($("#forecast-card4"));

    //day 5
    $("<li>")
      .text("Temperature: " + parseInt(forecastRes.list[32].main.temp) + "(℉)")
      .appendTo("div #forecast-card5");
    $("<li>")
      .text("Humidity: " + forecastRes.list[32].main.humidity + "%")
      .appendTo("div #forecast-card5");
    //forecast date
    $("<h3>")
      .text(moment().add(5, "d").format("M-D-YY"))
      .prependTo($("#forecast-card5"));
    //empty out the search box
    return $("input").val("");
  });
  console.log($("#city-search").val());
});

$("#searched").click(function () {
  $("#city-search").val(($(event.target).val()))
  //run search button click event
  $("#search-btn").trigger("click");
});
