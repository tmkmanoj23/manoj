var mailer = require("nodemailer");

    // Use Smtp Protocol to send Email
    var smtpTransport = mailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "tmk.bza@gmail.com",
            pass: "manoj@749"
        }
    });

    var mail = {
        from: "Manoj Kumar<tmk.bza@gmail.com>",
        to: "manoj.kumart@incture.com",
        subject: "Send Email Using Node.js",
        text: "hello",
        html: "<b>Node.js New world for me</b>"
    }

    smtpTransport.sendMail(mail, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        smtpTransport.close();
    });
