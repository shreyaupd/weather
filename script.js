const apikey = "2b634c8f5e4e7823aca08f53bc2dd3ec";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status === 404){
        document.querySelector(".error").style.display="block";
    }
    else{
    var data = await response.json();
    console.log(data);

    // Update HTML elements with the fetched data
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${data.main.temp}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;
    const weathercondition=data.weather[0].main;
    if(weathercondition==="Clouds"){
        weatherIcon.src="clouds.png";
    }
     else if(weathercondition==="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(weathercondition==="Rain"){
        weatherIcon.src="rain.png";
    }
    else if(weathercondition==="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(weathercondition==="Mist"){
        weatherIcon.src="mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".erroe").style.display="none";
}
}

// Event listener for the search button click
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value); 
});

// Event listener for the Enter key press in the search box
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { // Check if Enter key is pressed
        checkweather(searchBox.value); // Get the value entered by the user
    }
});

