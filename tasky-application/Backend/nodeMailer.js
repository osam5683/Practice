import nodemailer from "nodemailer";

async function sendEmail() {
    try {
        let transporter = nodemailer.createTransport({
            host: "mail.csmafia.com",
            port: 465,
            secure: true,
            auth: {
                user: "cfi@csmafia.com",
                pass: "codeforindiaFTW"
            }
        });
        let info = await transporter.sendMail({
            from: `CFI Tasky Solutions <cfi@csmafia.com>`,
            subject: "This is a Test Email",
            to: "akheelossama786@gmail.com",
            html: "<h1> I am sending email from Nodemailer</h1>"
        })
        console.log(info.messageId);
    } catch (error) {
        console.error(error);
        
    }
}

sendEmail();