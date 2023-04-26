$(document).ready(function() {
	$('#submit').click(function() {
		var location = $('#location').val();
		if (location != '') {
			$.ajax({
				url: 'https://api.openweathermap.org/data/2.5/weather',
				var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=202dd79001cf76ca1878bed8b00ea2fe&units=metric'; $.getJSON(url, function(data) {
				type: 'GET',
				dataType: 'jsonp',
				success: function(data) {
					var weather = '';
					var bgImage = '';
					var iconUrl = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';

					weather += '<h2>Current Weather for ' + data.name + '</h2>';
					weather += '<p>Weather: ' + data.weather[0].description + '</p>';
					weather += '<p>Temperature: ' + data.main.temp + '&deg;C</p>';
					weather += '<p>Humidity: ' + data.main.humidity + '%</p>';
					weather += '<p>Wind Speed: ' + data.wind.speed + ' m/s</p>';
					weather += '<img src="' + iconUrl + '">';

					var conditionCode = data.weather[0].id;
					if (conditionCode >= 200 && conditionCode <= 232) {
						bgImage = 'thunderstorm.jpg';
					} else if (conditionCode >= 300 && conditionCode <= 531) {
						bgImage = 'rain.jpg';
					} else if (conditionCode >= 600 && conditionCode <= 622) {
						bgImage = 'snow.jpg';
					} else if (conditionCode >= 701 && conditionCode <= 781) {
						bgImage = 'fog.jpg';
					} else if (conditionCode === 800) {
						bgImage = 'clear.jpg';
					} else if (conditionCode >= 801 && conditionCode <= 804) {
						bgImage = 'cloudy.jpg';
					} else {
						bgImage = 'default.jpg';
					}

					$('body').css('background-image', 'url(' + bgImage + ')');
					$('#weather').html(weather);
				}
			});
		} else {
			alert('Please enter a location.');
		}
	});
});
