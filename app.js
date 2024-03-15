const express=require('express')
const nodemailer = require("nodemailer");

const app=express()
const port=3000

const sendVerifyMail = async () => {
    console.log("started ")
    let name="fazilfezz@gmail.com"
    let email="fazilfezz@gmail.com"
    let otp =1233
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
        requireTLS: true,
        auth: {
          user: "dailywor@gmail.com",
          pass: "password",
        },
      });
      const mailOption = {
        from: "dailywor@gmail.com",
        to: email,
        subject: "to verify your detals",
        html:
          "<p>Hi " +
          name +
          " This is your otp to verify your gang accont the otp is " +
          otp +
          "</p>",
      };
      transporter.sendMail(mailOption, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("email has been send", info.response);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };


app.listen(port,()=>{
    console.log(`server started at ${port}`)
})