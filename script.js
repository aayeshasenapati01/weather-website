const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b1cf788075msh10f590841a28707p13738cjsn8e752e309e44',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like

            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp

            humidity.innerHTML = response.humidity

            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed

          
            let unix_timestamp = response.sunrise
            var date = new Date(unix_timestamp * 1000);
            var hours = date.getHours();
            const hoursIn12HrFormats = hours >= 13 ? hours % 12 : hours
            const ampms = hours >= 12 ? 'PM' : 'AM'
            var minutes =date.getMinutes();
            var formattedTime = (hoursIn12HrFormats < 10 ? '0' + hoursIn12HrFormats : hoursIn12HrFormats) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampms}</span>`
            console.log(formattedTime);
            document.getElementById("sunrise").innerHTML=formattedTime;

            let unix_timestamps = response.sunset
            var date = new Date(unix_timestamps * 1000);           
            var hours = date.getHours();
            const hoursIn12HrFormat = hours >= 13 ? hours % 12 : hours
            const ampm = hours >= 12 ? 'PM' : 'AM'
            var minutes =date.getMinutes();
            var formattedTime = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + `<span id="am-pm">${ampm}</span>`
            console.log(formattedTime);
            document.getElementById("sunset").innerHTML=formattedTime;


        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Delhi")

const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hours = time.getHours();
    const hoursIn12HrFormat = hours >= 13 ? hours % 12 : hours
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM'

    timeE1.innerHTML = (hoursIn12HrFormat < 10 ? '0' + hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10 ? '0' + minutes : minutes) + '' + `<span id="am-pm">${ampm}</span>`
    dateE1.innerHTML = days[day] + ', ' + date + ' ' + months[month]

    if(5<=hours && hours<18){
        document.body.background ="https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80";
     }
     else{
        document.body.background="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/yRF5c-O/videoblocks-flying-through-dense-clouds-at-night-with-beautiful-full-moon-and-twinkling-stars-in-the-background-seamless-looping-motion-backdrop-full-hd-1920-x-1080-blue_r_euoascg_thumbnail-1080_01.png";
     }

}, 1000);








