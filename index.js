const axios = require('axios'); // HTTP client for making requests
const nodemailer = require('nodemailer'); // Email library

// Define the website URL you want to check
const websiteUrl = 'https://artisticyogaikriya.com/ikriya-video-service/isd/list';

// Define your email configuration
const emailConfig = {
  service: 'gmail', // e.g., 'Gmail', 'Outlook', etc.
  auth: {
    user: 'pradhantestay@gmail.com',
    pass: 'tathkjmyrfgwwxdf',
  },
};

// Create a transporter to send emails
const transporter = nodemailer.createTransport({
  service: emailConfig.service,
  auth: emailConfig.auth,
});

// Function to check the website and send an email if status is not 200
const checkWebsiteAndSendEmail = async () => {
  try {
    // Make an HTTP GET request to the website
    const response = await axios.get(websiteUrl);

    recipients=['pradhanaditya159@gmail.com','samanvay.agarwal07@gmail.com']
    
    console.log(response.status)
    // Check if the status code is not 200
    if (response.status == 200) {
        console.log(response.status)
      // Send an email notification
      const mailOptions = {
        from: 'pradhantestay@gmail.com',
        to: recipients.join(','), // Change this to the recipient's email address
        subject: 'Website Down Notification',
        text: `Please check your site! It's not running properly.The website ${websiteUrl} returned status code ${response.status}.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    } else {
      console.log(`Website is up (status code ${response.status}).`);
    }
  } catch (error) {
    console.error('An error occurred while checking the website:', error.message);
  }
};

// Set up an interval to periodically check the website (e.g., every 5 minutes)
const interval = 1 * 60 * 1000; // 6 hours in milliseconds
setInterval(checkWebsiteAndSendEmail, interval);

// Initial check when the script starts
checkWebsiteAndSendEmail();






// const express = require('express');
// const axios = require('axios');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = process.env.PORT || 3000;

// // Define the website URL you want to check
// const websiteUrl = 'https://www.google.com/';

// // Define your email configuration
// const emailConfig = {
//       service: 'gmail', // e.g., 'Gmail', 'Outlook', etc.
//       auth: {
//         user: 'pradhantestay@gmail.com',
//         pass: 'tathkjmyrfgwwxdf',
//       },
// };

// // Create a transporter to send emails
// const transporter = nodemailer.createTransport({
//   service: emailConfig.service,
//   auth: emailConfig.auth,
// });

// // Function to check the website and send an email if status is not 200
// const checkWebsiteAndSendEmail = async () => {
//   try {
//     // Make an HTTP GET request to the website
//     const response = await axios.get(websiteUrl);

//     // Check if the status code is not 200
//     if (response.status == 200) {
//       // Send an email notification
//       const mailOptions = {
//         from: 'pradhantestay@gmail.com',
//         to: 'pradhanaditya159@gmail.com', // Change this to the recipient's email address
//         subject: 'Website Status Alert',
//         text: `The website ${websiteUrl} returned status code ${response.status}.`,
//       };

//       transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error sending email:', error);
//         } else {
//           console.log('Email sent:', info.response);
//         }
//       });
//     } else {
//       console.log(`Website is up (status code ${response.status}).`);
//     }
//   } catch (error) {
//     console.error('An error occurred while checking the website:', error.message);
//   }
// };

// // Set up a route to trigger the website check
// app.get('/', (req, res) => {

//     res.send('Website check initiated.');
//     setInterval(checkWebsiteAndSendEmail, 21600000)
  
// });

// // Start the Express server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

