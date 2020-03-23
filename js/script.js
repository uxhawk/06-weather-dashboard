$(document).ready(function() {
    var prevSearches = [];
    var lat, lng, city;
    //autocomplete
    var input = document.getElementById("pac-input");
    var options = {
        types: ['(cities)'],

    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);


    function init() {
        // Get from localStorage
        // Parsing the JSON string to an object
        var storedSearches = JSON.parse(localStorage.getItem("prevSearches"));

        if (storedSearches !== null) {
            prevSearches = storedSearches;
        }

        displayCityUL();
        $("#weather-card").hide();
        $("#forecast-h4").hide();
        $("#map").hide();
    }

    function displayCityUL() {
        $("#search-history").empty();
        for (let i = 0; i < prevSearches.length; i++) {
            var li = $(`<li class="list-group-item text-capitalize" search-val="${prevSearches[i]}">${prevSearches[i]}</li>`);
            $("#search-history").append(li);
        }
    }

    function setStorage() {
        localStorage.setItem("prevSearches", JSON.stringify(prevSearches));
    }

    function getWeather() {

        var request = {
            query: city,
        };

        var service = new google.maps.places.PlacesService(document.getElementById("service"));
        service.textSearch(request, callback);


    };

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {

            lat = results[0].geometry.location.lat();
            lng = results[0].geometry.location.lng();

            // city = $("#pac-input").val();
            // getWeather();
            var weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=3ccf586db422a1812c96a52bbfafc856`;
            $.ajax({
                url: weatherURL,
                method: "GET"
            }).then(function(response) {
                let iconCode = response.weather[0].icon;
                let iconURL = `https://openweathermap.org/img/wn/${formatIcon(iconCode)}d.png`;

                $("#weather-card").show();
                $("#forecast-h4").show();
                $("#weather-icon").attr("src", iconURL);
                $("#cur-temp").text(response.main.temp);
                $("#cur-humid").text(response.main.humidity)
                $("#cur-wind").text(response.wind.speed);
                $("#pac-input").val("");
            });

            //3ccf586db422a1812c96a52bbfafc856
            //forecast ee3703063e72f5b89b81129b7350b97b
            city = city.replace(/\s/g, '');
            var citySplit = city.split(",");
            console.log(citySplit);

            var forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=imperial&appid=3ccf586db422a1812c96a52bbfafc856`;

            //five-day forecast
            $.ajax({
                url: forecastURL,
                method: "GET"
            }).then(function(response) {

                $("#forecast").empty();
                let day = 1;
                let responseList = 7;

                for (let i = 1; i <= 5; i++) {
                    let iconCode = response.list[i].weather[0].icon;
                    let iconURL = `https://openweathermap.org/img/wn/${formatIcon(iconCode)}d.png`;
                    let card = $(`<div class="card text-white bg-primary mr-3 mb-3">
                        <div class="card-body">
                            <h5 class="card-title"><span id="forecast-${i}">${moment().add(day, 'day').format('l')}</span></h5>
                            <img src="${iconURL}" alt="Weather icon">
                            <p>Temp: <span id="temp-5day-${i}">${response.list[i].main.temp}</span>&#730 F</p>
                            <p>Humidity: <span id="temp-5day-${i}">${response.list[i].main.humidity}%</span></p>
                        </div>
                    </div>`);

                    $("#forecast").append(card);
                    day++;
                    responseList += 7;
                }
            });
            //uv index
            var uvURL = `https://api.openweathermap.org/data/2.5/uvi?appid=3ccf586db422a1812c96a52bbfafc856&lat=${lat}&lon=${lng}`;

            $.ajax({
                url: uvURL,
                method: "GET"
            }).then(function(response) {
                $("#uv-container").empty();
                var p = (`<p>UV Index: <span id="cur-uv" class="badge ml-2 p-2"></span></p>`);
                $("#uv-container").append(p);
                $("#cur-uv").text(response.value);


                if (response.value >= 0 && response.value <= 2.99) {
                    $("#cur-uv").addClass("badge-success");
                } else if (response.value >= 3 && response.value <= 5.99) {
                    $("#cur-uv").addClass("badge-warning");
                } else if (response.value >= 6 && response.value <= 7.99) {
                    $("#cur-uv").addClass("badge-orange");
                } else if (response.value >= 8) {
                    $("#cur-uv").addClass("badge-danger");
                }
            });
        }
    }

    function formatIcon(code) {
        var arr = code.split("");
        arr.pop();
        iconCode = arr.join("");
        // console.log(iconCode);
        return iconCode;
    }

    $(document).on("click", "#city-search", function() {
        city = $("#pac-input").val();

        if (city === "") {
            return
        }

        if (prevSearches.length === 0) {
            prevSearches.push(city);
        } else if (!prevSearches.includes(city)) {
            prevSearches.push(city)
        }

        setStorage();
        displayCityUL();
        $("#city-name").text(city);
        // console.log(city);
        getWeather();
        //$("#pac-input").val("");

    });

    $(document).on("click", ".list-group-item", function() {
        city = $(this).attr("search-val");
        // console.log(city);
        $("#city-name").text(city);
        getWeather();
    });


    init();
});