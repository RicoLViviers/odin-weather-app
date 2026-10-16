console.log("Hello World!");

let myToken = "6P8MQS8A3AUHPQXZKGUYBJ7J6";

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${myToken}`)
    const weather = await response.json();
    console.log(weather)
    const address = weather.address;
    const temp = weather.currentConditions.temp;
    const tempMax = weather.days[0].tempmax;
    const tempMin = weather.days[0].tempmin;
    const humidity = weather.currentConditions.humidity;
    return { address, temp, tempMax, tempMin, humidity };
}

const form = document.getElementById("location-form");
const locationInput = document.getElementById("location-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    getWeather(locationInput)
        .then((data) => {
            console.log(data);
        });
})