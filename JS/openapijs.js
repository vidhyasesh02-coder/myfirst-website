        const output = document.getElementById("output");

const latitude = 37.5483;
const longitude = -121.9886;

// Temperature endpoint
async function getTemperature() {
    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;

    const response = await fetch(url);
    const data = await response.json();

    output.innerHTML = `
        <h2>Temperature Information</h2>
        <p>Current Temperature: ${data.current.temperature_2m}°C</p>
    `;
}

// Weather conditions endpoint
async function getConditions() {
    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code`;

    const response = await fetch(url);
    const data = await response.json();

    const code = data.current.weather_code;

    output.innerHTML = `
        <h2>Weather Conditions</h2>
        <p>Condition: ${getWeatherDescription(code)}</p>
    `;
}
document
    .getElementById("tempBtn")
    .addEventListener("click", getTemperature);

document
    .getElementById("conditionBtn")
    .addEventListener("click", getConditions);

    function getWeatherDescription(code) {
    const map = {
        0: "Clear sky ☀️",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog 🌫️",
        48: "Depositing rime fog",
        51: "Light drizzle",
        61: "Slight rain 🌧️",
        71: "Slight snow",
        80: "Rain showers 🌦️",
        95: "Thunderstorm ⛈️"
    };

    return map[code] || "Unknown weather condition";
}