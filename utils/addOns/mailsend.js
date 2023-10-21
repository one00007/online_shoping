const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");

const sendemail = (username, useremail, password, userid) => {

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "onefinancetrading@gmail.com",
            pass: "gdimbnsyihcxnktx",
        },
    });

    // Create Mailgen instance
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "One Finanace ",
            link: "http://onefinancetrading.com/",
        },
    });

    // Generate an email message
    const email = {
        body: {
            name: username,
            intro: "Dear trader,",
            action: {
                instructions: `Thank you for choosing One Finanace  as your preferred broker for online trading. We are pleased to inform you that your online trading account with One Finanace  has been activated.
Please use the information given below to log in to your account. Your password will be sent to you in a separate email shortly.  Your User Id ${userid} and passsword is ${password} `,
                button: {
                    color: "#0071f8", // Optional action button color
                    text: "Login your account",
                    link: "http://onefinancetrading.com",
                },
            },
            outro: "Happy Trading Thanks & Regards One Finanace ",
        },
    };

    // Generate an HTML email using Mailgen
    const emailBody = mailGenerator.generate(email);

    // Setup email data
    const mailOptions = {
        from: "onefinancetrading@gmail.com",
        to: useremail,
        subject: "Welcome to One Finanace !",
        html: emailBody,
    };

    // Send email

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });


}

module.exports = sendemail