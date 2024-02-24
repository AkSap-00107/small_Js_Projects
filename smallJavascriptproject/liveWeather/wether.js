const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector(".search-btn");
const wetherImg = document.querySelector(".wether-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const locationNotFound=document.querySelector(".location-not-found");
const wetherBody=document.querySelector(".wether-body");

async function cheackWether(city) {
  const apiKey = "0d38ec4f0d697eb855f18e1d9a399a08";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const wetherData = await fetch(`${url}`).then((response) => response.json());
  if (wetherData.cod === `404`) {
    locationNotFound.style.display="flex";
    wetherBody.style.display="none";
    return;
  }
  locationNotFound.style.display="none";
  wetherBody.style.display="flex";
  temperature.innerText = `${Math.round(wetherData.main.temp - 273.15)}°C`;
  description.innerText = `${wetherData.weather[0].description}`;
  humidity.innerText = `${wetherData.main.humidity}%`;
  windSpeed.innerText = `${wetherData.wind.speed}km/h`;
    console.log(wetherData);
  switch (wetherData.weather[0].main) {
    case 'Clouds': {
        wetherImg.src="cloud.png";
      break;
    }
    case 'Clear': {
        wetherImg.src="clear.png";
      break;
    }
    case 'Snow': {
        wetherImg.src="snow.png";
      break;
    }
    case 'Rain': {
        wetherImg.src="rain.png";
      break;
    }
    case 'Smoke': {
        wetherImg.src="mist.png";
      break;
    }
    case 'Mist': {
        wetherImg.src="mist.png";
      break;
    }
    default:
      break;
  }
}
searchBtn.addEventListener("click", () => {
  console.log("Button clicked");
  cheackWether(inputBox.value);
});
inputBox.addEventListener('keydown',(event)=> {
  if (event.keyCode === 13) {
    cheackWether(inputBox.value);
  }
});