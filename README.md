<h1>Weather Dashboard</h1>
<a href="https://uxhawk.github.io/class-activities/week-06_Server-Side-APIs/homework/index.html">Launch Weather
    Dashboard</a>
<img src="https://lh3.googleusercontent.com/uAqY6x1qFxZiJiwdXJmID1d5bY4W2cptW43-SMP29B5afVxHAR6HFbJEVH-9r9ARo9OcUKquEosoLmt8hvk3IthS7nny7LxqRQjcvusyp4TbkO0lkzzipia72AD7jCIho2-lgR_KkIdWLQ3mIVs1JIYK_I1r_QxWcZRbrqhQW5dzH_Df8dOOUZy1lkiEM24EiGoOq-swUVH47o8aL0gINT2JH9ebGXdmQ9PVWzFj3lV8C4fM4MfkQSYJbRnoSFmMI547MB_jDBaLHw-27nDx7kLtWtjIFw7yoWQxia0oKyhQh38hGQ7ItJfzceUhlKF6MpejSCmhPoGJISHQUwt_H3JEmKuTr3GiDqGF15oE2i40BKYseelmKD-6KW6lPTOtNR4ZoUHU8VrB1fuTIl8SdHkRmGd3dhKvQ-D1xuq31Doyr7tj_uNK3UramGRPjgoPr-JCgWkk_zRWom2M4C9nipKZw421vzZdhDIbUWALtWM5_7FdMDksjyETBYDK7xByzKX5CNn9hDD62ASYjLejPIpLc-ZS9kV8RAoRP6Hv2NFtzjDc9vL0mAhgCaWsO7z057peKGQPV46nraLTvJCM29TFOEwWr54qJYos2MGD8MwQEDK7WqZThuMl8X9F50o-MzbxOU3TIP4pj9t-uOPuUfwJMqmWQdKKwHRLsUv_uAd96F5Yc6NAYqnkbr2eBQ=w1156-h596-no"
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



