
const API_KEY ="f7781b2c6a51973f7c9228733136a447"


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector(".weather");
        const city = document.querySelector(".city");
        const currentTemp = document.querySelector(".current-temp")
        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        currentTemp.innerText = `${data.main.temp}°C`;

    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
