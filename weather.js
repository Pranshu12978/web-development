$(document).ready(function() {
	$('form').submit(function(event) {
		event.preventDefault();
		var location = $('#location').val();
		var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=WEATHER_API&units=metric';
		$.getJSON(url, function(data) {
			var temp = data.main.temp;
			var desc = data.weather[0].description;
			var icon = data.weather[0].icon;
			var iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
			$('#weather').html('<p>Temperature: ' + temp + ' &deg;C</p><p>Description: ' + desc + '</p><img src="' + iconUrl + '">');
		});
	});
});
