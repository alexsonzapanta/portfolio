async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY";

  if (!city) return alert("Please enter a city");

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("weatherResult").classList.remove("hidden");
  document.getElementById("cityName").textContent = data.name;
  document.getElementById("temperature").textContent = data.main.temp + "°C";
  document.getElementById("details").textContent =
    data.weather[0].description;

  document.getElementById("icon").src =
    `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
