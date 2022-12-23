// const { response } = require("express");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7df1ef0c8amshe6fc9b7ca7f09c1p1e199djsn4bf0d84d8126',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};



// we made a function with a para city us k andar hm ne city
let getWeather = (city) => {
    cityName.innerHTML = city    //city ki jo b value aye gee wo seedha html ma ja kr likh deni ha




    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)



            //response jo aye ga wo seedha temp k html ma dal dena 

            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })



        .catch(err => console.error(err));

}


submit.addEventListener('click', (event) => {
    event.preventDefault()    //is ka mtlb ha k jb event yani is case ma click ho jaye th refresh na ho page
    //submit pr ju hee click ho wha se city ki jo value ha wo lo aur usi hisab se yani value k hisab se 
    //function call kr k value lo  
    getWeather(city.value)
})



// function call kr diya islamabad is liye k jb user open kry th by default islamabad ka weather show kry ye

getWeather("Islamabad")