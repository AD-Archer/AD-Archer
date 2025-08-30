import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Check if SMTP configuration is available
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.SMTP_FROM
    ) {
      console.error('SMTP configuration is missing');
      return NextResponse.json(
        { error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }

    const OWNER_EMAIL = 'antonioarcher.dev@gmail.com';

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
      return NextResponse.json({ error: 'Could not connect to email server' }, { status: 500 });
    }

    const plainUserMessage = message.replace(/\r\n/g, '\n');
    const submittedAt = new Date();
    const submittedAtDisplay = submittedAt.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'full',
      timeStyle: 'short',
    });
    const submittedAtUTC = submittedAt.toUTCString();

    // Email content for admin notification
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      to: OWNER_EMAIL, // Send to desired inbox
      replyTo: email, // Allow direct reply to the sender
      subject: `📬 New message from ${name}`,
      text: `New contact form submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${plainUserMessage}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>New Contact Message</title>
<style>
  body { font-family: system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; background:#f6f7f9; margin:0; padding:0; color:#222; }
  .container { max-width:600px; margin:32px auto; background:#ffffff; border-radius:14px; overflow:hidden; box-shadow:0 4px 16px rgba(0,0,0,0.06); }
  .topbar { background:linear-gradient(135deg,#ff6f61,#ff4d4d,#ff9966); padding:22px 28px; color:#fff; }
  h1 { margin:0 0 4px; font-size:22px; font-weight:600; letter-spacing:.5px; }
  .subtitle { margin:0; opacity:.85; font-size:14px; }
  .content { padding:28px; line-height:1.55; }
  .meta { margin:0 0 18px; font-size:14px; }
  .badge { display:inline-block; background:#eef2ff; color:#4338ca; padding:4px 10px; border-radius:999px; font-size:11px; font-weight:600; letter-spacing:.5px; text-transform:uppercase; }
  .block { background:#f3f4f6; border:1px solid #e5e7eb; padding:16px 18px; border-radius:10px; font-family:ui-monospace,Menlo,monospace; white-space:pre-wrap; word-break:break-word; }
  .footer { padding:20px 28px 30px; font-size:12px; color:#666; text-align:center; }
  a { color:#4f46e5; text-decoration:none; }
  a:hover { text-decoration:underline; }
</style>
</head>
<body>
  <div class="container">
    <div class="topbar">
      <h1>New Contact Message</h1>
      <p class="subtitle">Someone just reached out via your portfolio.</p>
    </div>
    <div class="content">
      <p class="meta"><span class="badge">From</span> <strong>${name}</strong> &lt;${email}&gt;</p>
      <p style="margin:0 0 8px;">Here's what they wrote:</p>
      <div class="block">${plainUserMessage.replace(/</g, '&lt;')}</div>
      <p style="margin:22px 0 0; font-size:13px; opacity:.8;">Reply directly to this email to continue the conversation.</p>
    </div>
    <div class="footer">
      <p>Sent automatically from your portfolio contact form.</p>
    </div>
  </div>
</body>
</html>`,
    };

    // Auto-reply email content
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM,
      to: email, // Send to the person who submitted the form
      subject: 'From Antonio Archer: Thanks for reaching out ',
      text: `Hi ${name},\n\nThanks for your message — I really appreciate you taking the time. I'll get back to you as soon as I can (usually within 48 hours).\n\nYou reached out via https://www.antonioarcher.com/contact on ${submittedAtDisplay} (UTC: ${submittedAtUTC}).\n\nYour message:\n${plainUserMessage}\n\nSave my contact card for quick access later:\nhttps://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control\n\nTalk soon,\nAntonio`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Thank You</title>
<style>
  body { font-family: system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; background:#f5f7fa; margin:0; padding:0; color:#1f2937; }
  .wrapper { max-width:620px; margin:28px auto; background:#ffffff; border-radius:18px; overflow:hidden; box-shadow:0 4px 18px rgba(0,0,0,0.05); }
  .hero { background:linear-gradient(135deg,#ff6f61,#ff4d4d,#ff9966); padding:34px 34px 30px; color:#fff; }
  h1 { margin:0 0 6px; font-size:26px; font-weight:600; letter-spacing:.3px; }
  .tag { display:inline-block; background:rgba(255,255,255,0.16); padding:4px 12px; border-radius:999px; font-size:11px; letter-spacing:.5px; text-transform:uppercase; margin-top:6px; }
  .content { padding:32px 34px 24px; line-height:1.6; font-size:15px; }
  .bubble { background:#f3f4f6; border:1px solid #e5e7eb; padding:16px 18px; border-radius:14px; white-space:pre-wrap; font-family:ui-monospace,Menlo,monospace; font-size:13px; }
  .cta { margin:30px 0 10px; }
  .cta a { display:inline-block; background:#ff6f61; background:linear-gradient(135deg,#ff6f61,#ff4d4d,#ff9966); color:#fff !important; text-decoration:none; padding:14px 22px; font-size:14px; font-weight:600; border-radius:999px; letter-spacing:.5px; box-shadow:0 3px 10px rgba(0,0,0,0.12); }
  .cta a:hover { filter:brightness(1.05); }
  .signature { margin:30px 0 6px; }
  .sig-name { font-size:16px; font-weight:600; }
  .meta-note { font-size:12px; opacity:.7; margin:24px 0 0; }
  .footer { padding:20px 28px 36px; font-size:12px; color:#6b7280; text-align:center; }
  a { color:#ff4d4d; }
  a:hover { text-decoration:underline; }
</style>
</head>
<body>
  <div class="wrapper">
    <div class="hero">
      <h1>Thank you, ${name}! 🙌</h1>
      <div class="tag">Message received</div>
    </div>
    <div class="content">
      <p>Hey ${name},</p>
      <p>Thanks for reaching out — I really appreciate you taking the time to send a note. I've received your message and I'll get back to you as soon as I can (usually within 48 hours).</p>
      <p style="margin:0 0 14px; font-size:14px; opacity:.85;">You reached out via <a href="https://www.antonioarcher.com/contact" target="_blank" rel="noopener noreferrer">antonioarcher.com/contact</a> on <strong>${submittedAtDisplay}</strong> <span style="opacity:.65;">(UTC: ${submittedAtUTC})</span>.</p>
      <p>Here's a copy of what you sent:</p>
      <div class="bubble">${plainUserMessage.replace(/</g, '&lt;')}</div>
      <div class="cta">
        <a href="https://s.blinq.me/z9wgm5sYJfBo43d4NS0y?n=Antonio&bs=iw&ida_v=control" target="_blank" rel="noopener noreferrer">Save My Contact Card</a>
      </div>
      <p style="font-size:13px; opacity:.75; margin:10px 0 0;">Store my details so you can reach out anytime.</p>
      <div class="signature">
        <p class="sig-name">— Antonio Archer</p>
        <p style="margin:4px 0 0; font-size:13px;">Full‑stack Developer & DevOps Engineer</p>
        <p style="margin:6px 0 0; font-size:12px; opacity:.75;">If anything changes or you want to add context, just reply to this email.</p>
      </div>
      <p class="meta-note">This auto‑reply confirms I received your form submission. No need to reply unless you want to add more context.</p>
    </div>
    <div class="footer">
      <p>This is an active email address so feel free to respond.</p>
    </div>
  </div>
</body>
</html>`,
    };

    // Send emails
    try {
      await transporter.sendMail(adminMailOptions); // admin
      await transporter.sendMail(autoReplyMailOptions); // user
    } catch (sendError) {
      console.error('Email sending error:', sendError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('General error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
