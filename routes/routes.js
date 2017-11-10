var path = require("path");
var weather = require("weather-js");
var Nexmo = require("nexmo");
var nexmo = new Nexmo({
  apiKey: "a6106bc9",
  apiSecret: "b9f836f95def7edf"
});
var from = "12017628308";

module.exports = function(app){

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.post("/text", function(req, res) {
    weather.find({search: req.body.zip, degreeType: "F"}, function(err, result){
        if(err) console.log(err);

        console.log(JSON.stringify(result, null, 2));

        nexmo.message.sendSms(
          from, req.body.number, "Hello the weather in " + result[0].location.name + " is " + result[0].current.temperature + "F " + "and " + result[0].current.skytext + " skies", {type: "unicode"}, function(err, response) {
            if(response){
              console.log(response);
            }
          }
        );

    });
  });

}
