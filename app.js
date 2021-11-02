require('dotenv').config();
const accountSid=process.env.TWILIO_ACCOUNT_SID;
console.log(accountSid);
const authToken= process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
 .create({
    body:'How are you',
    from:'+12098022190',
    to:'+13478568559'
    
})
.then((message) => console.log(message))
.catch((err) => console.log(err));
