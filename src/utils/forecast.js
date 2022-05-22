const request = require('postman-request')

const forecast = (x, y, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cde903f4ad0039bd2c3172e51e55985b&query=' + x + ',' + y 

    request({url:url , json:true} , (error, response) =>{
        if(error) {
            callback('Unable to connect !', undefined)
        }
        else if(response.body.error){
            callback('Unable to fetch data', undefined)
        }
        else{
        
            callback(undefined,"It is currently " + (response.body.current.temperature) + " degreees out. It feels like " + (response.body.current.feelslike) + " degress out. Humidity is "+ (response.body.current.humidity))
        }
    })
}

module.exports= forecast