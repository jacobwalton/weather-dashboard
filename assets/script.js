var today = moment().format('M-D-YY');
console.log('today :', today);
//printing date to main container
$('<h3>').text(today).prependTo($('.main-container'))

//print 5 day forecast dates to cards
$('<h3>').text((moment().add(1, 'd').format('M-D-YY'))).prependTo($('#forecast-card1'))
$('<h3>').text((moment().add(2, 'd').format('M-D-YY'))).prependTo($('#forecast-card2'))
$('<h3>').text((moment().add(3, 'd').format('M-D-YY'))).prependTo($('#forecast-card3'))
$('<h3>').text((moment().add(4, 'd').format('M-D-YY'))).prependTo($('#forecast-card4'))
$('<h3>').text((moment().add(5, 'd').format('M-D-YY'))).prependTo($('#forecast-card5'))



$('#search-btn').click(function(){
var cityName= $('#city-search').val();
//current
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityName.replace(" ", "+") +'&units=imperial&appid=6d5c20e9aa4b04f4d3a467e43f9018ef';
//forecast
var forecastQueryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+ cityName.replace(" ","+") +"&units=imperial&appid=6d5c20e9aa4b04f4d3a467e43f9018ef";

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(res) {
      console.log(res);
      console.log(cityName)
  })
  $.ajax({
    url: forecastQueryURL,
    method: "GET"
  })
    .then(function(forecastRes) {
      console.log(forecastRes);
      console.log(cityName)
  });

});



