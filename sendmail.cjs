
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 4500;
const MAIL_FROM = 'vinhtuanbm@gmail.com';

app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: MAIL_FROM,
        pass: 'cpoutizvuemmbhdg'
    }
});

app.post('/send-mail', (req, res) => {
    const userInfo = req.body;
    const mailOptions = {
        from: MAIL_FROM,
        to: userInfo.email,
        subject: '[RE] - ' + userInfo.subject,
        text: `
            Dear ${userInfo.name},

            Thank you for leaving me a message with the following content:
            
            "${userInfo.message}"
            
            I truly appreciate your interest and your kind words.
            Whether they are positive or negative, I will always consider them a source of motivation to grow each day.
            
            This email is to inform you that I have received your message. I will respond to you within the next 1 to 2 days.
            If you wish for this matter to be handled more quickly, please remind me by replying to this email.
            
            Sincerely,
            Nguyen Vinh Tuan.
        `
    }
    transporter.sendMail(mailOptions, async (error, info) => {
        if(error) {
            res.status(500).json({error: "An error occurred while sending email"});
        }
        else {
            res.status(201).json({message: "Email sent successfully"});
        }
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})