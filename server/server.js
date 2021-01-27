// const express = require('express');
// const path = require('path');
// var nodemailer = require('nodemailer');
// require('dotenv').config();
// var smtpTransport = require('nodemailer-smtp-transport');

// var cors = require('cors');

// const PORT = process.env.PORT || 3001;
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Serve up static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

// let transporter = nodemailer.createTransport({
//   host: 'smtp.iCloud.com', //replace with your email provider
//   service: 'iCloud',
//   secure: false,
//   port: 587,
//   auth: {
//     user: process.env.USERNAME, //replace with the email address
//     pass: process.env.PASSWORD, //replace with the password
//   },
// });

// // verify connection configuration
// transporter.verify(function (error, success) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take our messages');
//   }
// });

// app.post('/send', (req, res) => {
//   console.log(req.body);
//   var name = req.body.name;
//   var email = req.body.email;
//   var subject = req.body.subject;
//   var message = req.body.message;
//   var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `;
//   var mail = {
//     from: name,
//     to: 'joshuamcarter@icloud.com',
//     subject: subject,
//     text: content,
//   };
//   transporter.sendMail(mail, (err, data) => {
//     if (err) {
//       res.json({
//         status: 'fail',
//       });
//     } else {
//       res.json({
//         status: 'success',
//       });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`API server running on port ${PORT}!`);
// });
