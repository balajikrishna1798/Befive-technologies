import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const CLIENT_ID = '773248294104-f1sfgkv3a26dg6ikcopukrc9j5m6sabt.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04Aqj6MnRR8LeCgYIARAAGAQSNwF-L9IrvLa5AHS5Sl7DFPVCZ4_Z0p2yIgt1iPBoGqfwYCB2XfpGOxEF44-0THppXzllSOD_6Tw'; // Replace with the access token obtained from OAuth 2.0 Playground

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

export const POST = async (req) => {
  try {
    const { name, email, phone, message } = await req.json();
    const accessToken = await oAuth2Client.getAccessToken();

    // Create a Nodemailer transporter using OAuth2
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'chatgptplususers@gmail.com',
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken.token,      },
    });

    // Send email
    let info = await transporter.sendMail({
      from: 'noreply@yourdomain.com',
      to: 'chatgptplususers@gmail.com',
      subject: `From ${email} you got a contact request`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
};
