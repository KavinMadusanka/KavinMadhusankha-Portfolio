import "dotenv/config";
import nodemailer from "nodemailer";

const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;


 //Single transporter for entire project
 
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

//OTP mail
export async function sendOtpEmail(to, firstName, otp) {
  return transporter.sendMail({
    from: process.env.MAIL_FROM,
    to,
    subject: "Kavin - portfolio OTP Code",
    html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin: 0 0 10px;">Kavin - portfolio – Password Reset Code</h2>

      <p>Hi ${firstName},</p>

      <p>We received a request to reset your account password.</p>

      <p style="margin: 16px 0;">Your OTP code is:</p>

      <div style="
        display: inline-block;
        padding: 12px 18px;
        border: 1px solid #ddd;
        border-radius: 8px;
        font-size: 22px;
        letter-spacing: 4px;
        font-weight: bold;
      ">
        ${otp}
      </div>

      <p style="margin-top: 16px;">
        This OTP code will expire in <b>10 minutes</b>.
      </p>

      <p>If you didn’t request this, you can ignore this email.</p>

      <p style="margin-top: 24px;">Thanks,<br/>Kavin Madhusankha.</p>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />

      <p style="font-size: 12px; color: #666;">
        (Please do not reply to this automated email.)
      </p>
    </div>
    `
  });
}