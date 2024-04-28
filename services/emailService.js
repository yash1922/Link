const nodemailer = require('nodemailer');

async function sendMail({ from, to, subject, text, html }) {
    try {
        // transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER, // Your Gmail username
                pass: process.env.MAIL_PASS  // Your Gmail password or app-specific password
            }
        });

        let info = await transporter.sendMail({
            from: `${from}`, // 'from' address should be a valid Gmail address
            to,
            subject,
            text,
            html
        });

        console.log('Message sent: %s', info.messageId);
    } catch (err) {
        console.error('Error sending email:', err);
    }
}

module.exports = sendMail;

