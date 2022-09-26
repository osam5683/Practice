import twilio from 'twilio';

const accountSid = "USE YOUR SID";
const authToken = "USE YOUR TOKEN";
const client = new twilio( ACe96535c674f4ea0b85b036aad3a0c7d3, c44db01c18dc9045e57a7ff92b687e38);

// let smsbody = {
//     body: "this is a number",
//     to: "+919100280872"
// }
async function sendSMS(smsbody) {
    try {
        let message = await client.messages
            .create({
                body: smsbody.body,
                from: '+16066127657',
                to: smsbody.to
        })
        console.log(message.sid);
        
    } catch (error) {
        console.error(error)
    }
}
export default sendSMS;
// // sendSMS ({
// //     body: `Thank you for signing up. Please click on the given link to verify your phone. http://192.168.68.133:5000/api/verify/mobile/`,
// //     to: "+917569449885"
// })