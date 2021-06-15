'use strict'

require('dotenv').config() 
const exp = require('express');
const server = exp();
const cors = require('cors');
server.use(cors());
const weatherData = require('./data/weather.json');

let PORT = process.env.PORT

//localhost:3000/weather?searchQuery=sydny
server.get('/weather',(req,res)=>{
    let searchQuery = req.params.searchQuery
    let weatherItem = weatherData.data.find(item =>{
        if(item.city_name == searchQuery){
        return item;}
        else{
            weatherItem = null
        }
        })
    if (weatherItem){
        let map1 = weatherData.data.map((item) =>{
            let variable = new Forcast(item)
            return variable
            })
        res.send(map1)
    }
    else(
        res.send('Enter another country')
    )
})
let forcastData = []

class Forcast{
    constructor(weatherData){
        this.date = weatherData.datetime,
        this.description = weatherData.weather.description
        forcastData.push(this)
    }
}

server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})