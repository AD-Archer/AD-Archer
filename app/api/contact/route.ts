import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Check if SMTP configuration is available
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_FROM) {
      console.error('SMTP configuration is missing');
      return NextResponse.json(
        { error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification error:', verifyError);
      return NextResponse.json(
        { error: 'Could not connect to email server' },
        { status: 500 }
      );
    }

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM, // Send to yourself
      replyTo: email, // Allow direct reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Auto-reply email content
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM,
      to: email, // Send to the person who submitted the form
      subject: 'Thank you for your message - Auto Reply',
      text: `
Dear ${name},

Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 48 hours.

Here's a copy of your message for your records:

${message}

Best regards,
Antonio Archer
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #333;">Thank You for Your Message</h2>
  
  <p>Dear <strong>${name}</strong>,</p>
  
  <p>Thank you for reaching out! I've received your message and will get back to you as soon as possible, typically within 48 hours.</p>
  
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="margin-top: 0;">Your Message:</h3>
    <p style="white-space: pre-line;">${message}</p>
  </div>
  
  <p>Best regards,<br>Antonio Archer</p>
</div>
      `,
    };

    // Send emails
    try {
      // Send admin notification
      await transporter.sendMail(adminMailOptions);
      
      // Send auto-reply to the sender
      await transporter.sendMail(autoReplyMailOptions);
    } catch (sendError) {
      console.error('Email sending error:', sendError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 