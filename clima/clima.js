const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d2cff2066b58654b0c83b8d64df55dfd&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}