<h1>Weather Dashboard</h1>
<a href="https://uxhawk.github.io/class-activities/week-06_Server-Side-APIs/homework/index.html">Launch Weather
    Dashboard</a>
<img src="https://lh3.googleusercontent.com/F0z2RgzOEqRkJwawjZUfH-wLTSg5fwBLaZayHTot7DqePGXzo90vT9qH9w-p2GC0slLj4yfQaqSmQ9mXsYDqOj_39q0PknrYHVY2SQSY5MPtYXe9nu1X7C5xQtf72VOvQJsycJtiZt91el1Lj6f-3Daml7h2PY9iVRSU3wtpjfxjyfHfPg44hjqzgwyR2j3VpZ_ToyvjoND3h-kmU_EJQqa3W6hNTtHWgz6Dsq_TaiAKVGiEU_cwggpLcZFltgNlBrfDmSeJy3Hb_L38pBopx45g7ZIZCPMSbwy35p0qxdFTfvIePawtjbbevfV9cM8o-bPLP5aOfZaeiVojUA3w0UG1uHQMnbC-Ykk0kMH2PI3RG8e37KTs7012I3qAa6slCff7b3J2ukxTO3WTjorQZiP7wLShx1Ckm8VXBuV2ifXAljzgyUZa69ydoMkkeFSxvL3bM934ZaFB1j6RiTQedPRl3bqDz-6r-IKt93g2HZdd4NxBIp2h3sEybn1d3eEcuM_ZYpcYnylBqRL1VzFQ3MdZGw6_TA-hC-5ms3uOXZyNVTYAi9m1KMaoOJBaP1MH8lovD_iFfqBLLR7V3DxouFOh8GWuveGaTUu8HAdd7IvNYj9NspOQArt45MJD27_nGPzzQUqXd3zDJDNodBUe-2jR8fHIU9Gv3CtZ28URkEoe7hrfldFNbE8ZwQZLSQ=w1156-h596-no"
    alt="Weather dashboard">

<h2>The Code</h2>
<p>This weather dashboard relies on <a href="https://getbootstrap.com/">Bootstrap CSS</a> to deliver styled UI
    components to the user. <a href="https://momentjs.com/">Moment.js</a> formats dates, <a
        href="https://developers.google.com/places/web-service/intro">Google Places API</a> autocompletes cities based
    off user input and returns the latitude and longitude of the selection. <a
        href="https://openweathermap.org/api">OpenWeather API</a> provides the current weather, UV index, and five-day
    forecast based off the latitude and longitude from the <a
        href="https://developers.google.com/places/web-service/intro">Google Places API</a>.
</p>

<h2>Coding Challenges</h2>
<p>The primary challenge this weather dashboard presented arose from the asynchronous nature of the <a
        href="https://developers.google.com/places/web-service/intro">Places API</a> and the ajax call to the <a
        href="https://openweathermap.org/api">OpenWeather API</a>. The Places API uses a callback function that passes a query string, returns an object, and runs a function on the response to calculate latitude and longitude. To prevent the Openweather API from sending its query url (with undefined latitude and longitude values) before the Places API returned a response, the OpenWeather API ajax call is nested within the Places callback function.
</p>



