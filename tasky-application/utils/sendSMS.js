import twilio from "twilio";
const accountSid = "ACe96535c674f4ea0b85b036aad3a0c7d3";
const authToken = "c44db01c18dc9045e57a7ff92b687e38";
const client = new twilio(accountSid, authToken);
let smsbody={
    body :" This is the reminder",
    to: '+919014828737'
}
async function sendsms (smsbody) {
    try {
       let message = await client.messages
            .create({
                body: smsbody.body,
                from: '+18323468469',
                to: smsbody.to
            })
            console.log(message.sid);
    } catch (error) {
        console.error(error)
    }
}
// sendsms(sms);
export default sendsms;
 
 





