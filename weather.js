/*

* v0.1 Do the OpenWeatherMap API callback

GS Jackson, Kratos RT Logic

*/

var url = 'http://api.openweathermap.org/data/2.5/forecast/city';
var keys = {
    id: 2640920,
    APPID: aee8d8e47cc9aa312403c669f1a89e09 // Put your key here
};

function makeUrl (url, queryStringObject) {
    var query = [];
    // Loops through each key
    for(var key in queryStringObject){
        query.push(encodeURIComponent(key) + '=' +
            encodeURIComponent(queryStringObject[key]));
    }
    // Returns the url with the keys appended
    return url + (query.length ? '?' + query.join('&') : '');
}
