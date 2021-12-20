require("dotenv").config();
import nodemailer from "nodemailer";
const { google } = require("googleapis");

export default function handler(req, res) {
  const CLIENT_ID = process.env.CLIENT_ID;
  const CLEINT_SECRET = process.env.CLEINT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  // res.status(200).json({ name: 'John Doe' })
  const { name, email, message } = req.body;

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.MAIL,
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: process.env.MAIL,
        to: process.env.TOEMAIL,
        subject: `Hello  from  ${name}✔`, // Subject line
        text: `Hello from ${name}`,
        html: `<p>New Message From ${name} <p>
         <p>Contact Email ${email}  </p>
         <p>Message : ${message}</p>`, // html body`, // plain text body
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

  sendMail()
    .then((result) => console.log("Email sent...", result))
    .then(() => res.status(200).json({ name: "John Doe" }))
    .catch((error) => console.log(error.message));
}
