var today = moment().format('M-D-YY');
console.log('today :', today);
//printing date to main container
$('<h3>').text(today).prependTo($('.main-container'))

//print 5 day forcast dates to cards
$('<h3>').text((moment().add("d", 1).format('M-D-YY'))).prependTo($('#forecast-card1'))
$('<h3>').text((moment().add("d", 2).format('M-D-YY'))).prependTo($('#forecast-card2'))
$('<h3>').text((moment().add("d", 3).format('M-D-YY'))).prependTo($('#forecast-card3'))
$('<h3>').text((moment().add("d", 4).format('M-D-YY'))).prependTo($('#forecast-card4'))
$('<h3>').text((moment().add("d", 5).format('M-D-YY'))).prependTo($('#forecast-card5'))