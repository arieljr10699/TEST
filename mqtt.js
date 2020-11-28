import AWS from 'aws-sdk/global'
const AWSMqttClient = require('aws-mqtt/lib/NodeClient')
AWS.config.region = 'us-east-2' // your region
    //AWS.config.credentials =  // See AWS Setup and Security below 

const client = new AWSMqttClient({
    region: AWS.config.region,
    credentials: AWS.config.credentials,
    endpoint: 'a38rtjqve4yzau-ats.iot.us-east-2.amazonaws.com', // NOTE: get this value with `aws iot describe-endpoint`
    expires: 600, // Sign url with expiration of 600 seconds
    clientId: 'mqtt-client-' + (Math.floor((Math.random() * 100000) + 1)), // clientId to register with MQTT broker. Need to be unique per client
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    }
})

client.on('connect', () => {
    client.subscribe('/Semaphore')
})
client.on('message', (topic, message) => {
    console.log(topic, message)
})
client.on('close', () => {
    // ...
})
client.on('offline', () => {
    // ...
})