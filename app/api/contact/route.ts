import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message }: FormData = await req.json();
    console.log("Request body:", { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Company Notification Email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; }
            .header { background-color: #6b46c1; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 20px; }
            .content p { margin: 10px 0; font-size: 16px; color: #333333; line-height: 1.5; }
            .content .label { font-weight: bold; color: #6b46c1; }
            .footer { text-align: center; padding: 10px; font-size: 12px; color: #666666; }
            .footer a { color: #6b46c1; text-decoration: none; }
            @media only screen and (max-width: 600px) {
              .container { padding: 10px; }
              .header h1 { font-size: 20px; }
              .content p { font-size: 14px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p><span class="label">Name:</span> ${name}</p>
              <p><span class="label">Email:</span> ${email}</p>
              <p><span class="label">Message:</span> ${message.replace(
                /\n/g,
                "<br>"
              )}</p>
              <p><span class="label">Submitted from:</span> <a href="${
                process.env.WEBSITE_URL
              }">${process.env.WEBSITE_URL}</a></p>
            </div>
            <div class="footer">
              <p>Received from your website contact form</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // User Confirmation Email
    await transporter.sendMail({
      from: `"Your Company" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us",
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; }
            .header { background-color: #6b46c1; color: #ffffff; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 24px; }
            .content { padding: 20px; }
            .content p { margin: 10px 0; font-size: 16px; color: #333333; line-height: 1.5; }
            .content .label { font-weight: bold; color: #6b46c1; }
            .button { display: inline-block; padding: 10px 20px; background-color: #6b46c1; color: #ffffff; text-decoration: none; border-radius: 5px; margin: 10px 0; }
            .footer { text-align: center; padding: 10px; font-size: 12px; color: #666666; }
            .footer a { color: #6b46c1; text-decoration: none; }
            @media only screen and (max-width: 600px) {
              .container { padding: 10px; }
              .header h1 { font-size: 20px; }
              .content p { font-size: 14px; }
              .button { font-size: 14px; padding: 8px 16px; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>We have received your message and will get back to you soon.</p>
              <p><span class="label">Your Message:</span> ${message.replace(
                /\n/g,
                "<br>"
              )}</p>
              <p>Feel free to visit our website for more information:</p>
              <a href="${
                process.env.WEBSITE_URL
              }" class="button">Visit Our Website</a>
              <p>Best regards,<br>Your Company Team</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { message: "Error sending message" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
