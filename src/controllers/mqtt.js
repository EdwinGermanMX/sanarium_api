const Data = require("../models/Data");

var mqtt=require('mqtt');

var options={
    clientId:"sanarium_api",
    username:"user1",
    password:"user1",
    clean:true
};

var topic="/SANARIUM/0001/sensors/";

var client = mqtt.connect("mqtt://node02.myqtthub.com:1883",options)

console.log("connected flag  " + client.connected);

//handle incoming messages
client.on('message', async function(topic, message, packet){
    var values = JSON.parse(message);
    // creating a new User
    const data = new Data({
        acuariumId : values.id,
        temperature: values.temp,
        tds: values.tds,
        ph: values.ph
      });

      try {
        const savedData =  await data.save();
        console.log(savedData)
      } catch (error) {
        console.log(error);
      }
	console.log("message is "+ values.tds);
	console.log("topic is "+ topic);
});

client.on("connect",function(){	
console.log("connected  "+ client.connected);

})
//handle errors
client.on("error",function(error){
console.log("Can't connect" + error);
});

console.log("subscribing to topics");
client.subscribe(topic,{qos:0});