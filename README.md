<h1>Weather Dashboard</h1>
<a href="https://uxhawk.github.io/gw-hmwk-06-weather-dashboard/">Launch Weather
    Dashboard</a>
<img src="https://lh3.googleusercontent.com/-gHFaxp0NF5zCrUU92MEhGVa5CG9feOVx3oHCDgco-74ArK9wmX9FLAZYZ0vYOTtFhBrBDkmGunOm_BZTNWrKEhOBIi26hKcWFxh6KzTQRxwEDfNxz1NC1QF4wclqSCI1c7RnYVia26_gO8wWRyQkp_U-M_22-cLaeQB263zKar04kJR98Bi_DWrDhYXfxnNQCdrgbWbDqokV4qeSN2Zx0N50XpZMB09LbwuoMvGsFIRbeEg5buPcaLCoMzDx4lmcaXj0Yq6kSACQ5h2491NqJ2d-Z9YudEI-SSVLKO4pD9sQgRJk2L57ee7N948rt7X2XhtNXGVLOsmU-HxwclzI8ATt_f6CkumFDZ01U0kHtmHd9v3kJp23pwxBhcLdpiuUr8JkBkXqSdYc_Rd7tlD6aJ6VWS3BToM1QRqCqIEcc4nPYRRwdjms4kn0Wi2iFFJdrcwHv0nXcW7lTItovIHHgkQRONfNQkE74IIej1WNBICFv4WmKzIyH5mH5aop6OXTEztm1mCJUnzGhNczXzOn_o0rg5RyccnUTdwsw_JLEejd_m7H_WxNCu7KShDN4Bfnko7UPv9OG6k7rJkDZ_JZsexpDpK3UNF6Io9oHV0xX5Z4Kyt1B65bQSANu_qiZ9AUkDRPH2IXk6gUfp5fk89Cik1CeAgpVxsIpOyZo-izY26QObsoAG5FW2NaVoNug79npbbQsjbNqJ371lZIXJdpISzBh33yqAbWP_Lai2Y3R3RMj6a10mulqQ=w1156-h596-no"
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



