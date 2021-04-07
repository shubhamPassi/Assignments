const weatherApi = {
    key: "b88ade9044bc69f487a49f77256a407e",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");

// Event Listener function on keypress
searchInputBox.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) getWeatherReport(searchInputBox.value);
});

// Get Weather Report
getWeatherReport = (city) => {
    fetch(
        `${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`
    )
        .then((weather) => {
            return weather.json();
        })
        .then(showWeatherReport);
};

// Show Weather Report
showWeatherReport = (weather) => {
    console.log(weather);
    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById("temp");
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let MinMaxTemperature = document.getElementById("min-max");
    MinMaxTemperature.innerHTML = `${Math.floor(
        weather.main.temp_min
    )}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    let weatherType = document.getElementById("weather");
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
};

// Date Manage
dateManage = (dateArg) => {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "jul",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
};
