const axios = require('axios');

function weatherHandler(req,res){
    let weatherFunc = req.query.city
    let key = process.env.WEATHERKEY;

    let weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${weatherFunc}&key=${key}`;

    axios.get(weatherURL)
            .then(dataResult => { const weatherArr = dataResult.data.data.map(item => {
                                return new Forecast(item);
                             })
                             res.send(weatherArr); })
            .catch(err => {
                res.status(404).send(`Data not found ${err}`);
            })
}

class Forecast {
    constructor(item) {
        this.description = `Low of ${item.min_temp}, high of ${item.max_temp} with ${item.weather.description}`;
        this.date = item.valid_date;
    }
}

module.exports = weatherHandler;