
    "use strict";
    mapboxgl.accessToken = WEATHER_TOKEN;

    var weatherCoordinates = [
        29.4252,
        -98.4916
    ]
    function getForecast () {
        $.get('https://api.openweathermap.org/data/2.5/onecall', {
            lat: weatherCoordinates[0],
            lon: weatherCoordinates[1],
            appid: WEATHER_TOKEN,
            exclude: 'minutely,hourly,current,alerts',
            units: 'imperial'
        }).done(function (data) {

            function createHTML() {

                var weather = '';
                for (var i = 0; i < 5; i += 1) {
                    var getDate = new Date(data.daily[i].dt * 1000).toDateString();
                    console.log(getDate)
                    var getLowTemp = data.daily[i].temp.min
                    var getHighTemp = data.daily[i].temp.max
                    var getTemp = 'L: ' + getLowTemp + '&#8457;' + ' / ' + 'H: ' + getHighTemp + '&#8457;'
                function getIcon(i){
                    var icon = data.daily[i].weather[0].icon;
                    return '<img src="http://openweathermap.org/img/w/' +  icon + '.png">'
                }
                    console.log(getTemp)
                    var getDescription = 'Description: ' + data.daily[i].weather[0].main
                    console.log(getDescription)
                    var getWindSpeed = 'Wind: ' + data.daily[i].wind_speed +'mph'
                    console.log(getWindSpeed)
                    var getPressure = 'Pressure: ' + data.daily[i].pressure
                    console.log(getPressure)
                    var getHumidity = 'Humidity: ' + data.daily[i].humidity
                    console.log(getHumidity)
                    weather +=
                        '<div class="card">' +
                        '<div class="card-header">' +
                        '<div class="weather-header">' + getDate + '</div>' +
                        '</div>' +
                        '<div class="card-body">' +
                        '<div class="weather">' + getTemp + '</div>' +
                        '<div class="weather-icon">' + getIcon(i) + '</div>' +
                        '<div class="weather">' + getDescription + '</div>' +
                        '<div class="weather">' + getHumidity + '</div>' +
                        '<div class="weather">' + getWindSpeed + '</div>' +
                        '<div class="weather">' + getPressure + '</div>' +
                        '</div>' +
                        '</div>';

                }
                return weather
            }

                $('.weather').html(createHTML(data))
            });
        }
        getForecast()

    mapboxgl.accessToken = MAPBOX_API_TOKEN

    var map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.4916, 29.4252], // starting position [lng, lat]
        zoom: 4 // starting zoom

    });

    var marker = new mapboxgl.Marker({draggable: true})
        .setLngLat([-98.4936, 29.4241])
        .addTo(map);

    function onDragEnd() {
        weatherCoordinates = marker.getLngLat().toArray().reverse();
        getForecast();

    }
    marker.on('dragend', onDragEnd);

    var search = '';
    $('button').click(function (){
        search = $('#text-input').val();
        searchBar();
    })
    function searchBar() {
        geocode(search, MAPBOX_API_TOKEN).then(function (search){
            marker.setLngLat(search);
            weatherCoordinates = marker.getLngLat().toArray().reverse();
            getForecast();
            map.flyTo({
                center:(search),
                zoom: 5.5,
                speed: 0.5
            });
        });
    }

