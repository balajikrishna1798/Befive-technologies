import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  try {
    const { name, email, phone, message } = await req.json();

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'balajikrishna44589@gmail.com',
        pass: 'yavu irtx nkxz gjaq', 
      },
    });

    // Send email
    let info = await transporter.sendMail({
    from: 'noreply@abc.com',
    to: "balajikrishna44589@gmail.com",
    subject: `From ${email} you got contact request mail`,
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
