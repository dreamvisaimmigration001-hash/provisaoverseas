'use server';

import nodemailer from 'nodemailer';

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  visaType: string;
  date: string;
  message?: string;
}

export interface ActionResult {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitConsultation(formData: ConsultationFormData): Promise<ActionResult> {
  try {
    const { fullName, email, phone, country, visaType, date, message } = formData;

    if (!fullName || !email || !phone || !country || !visaType || !date) {
      return {
        success: false,
        error: 'Please fill in all required fields.',
      };
    }

    const emailUser = process.env.GMAIL_USER;
    const emailPass = process.env.GMAIL_APP_PASSWORD;
    const recipientEmail = process.env.CONSULTATION_RECEIVER_EMAIL || emailUser;

    if (!emailUser || !emailPass) {
      console.warn(
        'Nodemailer: GMAIL_USER or GMAIL_APP_PASSWORD is not configured in your environment variables. Submission was logged but email was not sent.'
      );
      console.log('Consultation Form Received:', formData);
      return {
        success: true,
        message: 'Your consultation request has been received. Our team will contact you shortly.',
      };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Pro Visa Overseas" <${emailUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New Consultation Request: ${fullName} - ${visaType} (${country})`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #003057; padding: 24px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: normal; letter-spacing: 1px;">PRO VISA OVERSEAS</h2>
            <p style="color: #FFB370; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px;">New Consultation Booking</p>
          </div>
          
          <div style="padding: 32px 24px;">
            <p style="font-size: 15px; margin-bottom: 20px;">You have received a new consultation inquiry through the website:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057; width: 35%;">Full Name:</td>
                <td style="padding: 10px 0; color: #333333;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057;">Email:</td>
                <td style="padding: 10px 0; color: #333333;"><a href="mailto:${email}" style="color: #F47D20; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057;">Phone:</td>
                <td style="padding: 10px 0; color: #333333;"><a href="tel:${phone}" style="color: #333333; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057;">Preferred Date:</td>
                <td style="padding: 10px 0; color: #333333;">${date}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057;">Target Country:</td>
                <td style="padding: 10px 0; color: #333333;">${country}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 10px 0; font-weight: bold; color: #003057;">Visa Category:</td>
                <td style="padding: 10px 0; color: #333333; font-weight: 600;">${visaType}</td>
              </tr>
            </table>

            <div style="background-color: #F7F3EE; padding: 18px; border-radius: 8px; border-left: 4px solid #F47D20;">
              <p style="margin: 0 0 6px 0; font-weight: bold; color: #003057; font-size: 13px; text-transform: uppercase;">Applicant Message / Notes:</p>
              <p style="margin: 0; color: #555555; font-size: 14px; white-space: pre-wrap;">${message || 'No additional message provided.'}</p>
            </div>
          </div>
          
          <div style="background-color: #f7f7f7; padding: 16px 24px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #e0e0e0;">
            Pro Visa Overseas
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: 'Your consultation request has been successfully submitted.',
    };
  } catch (error: unknown) {
    console.error('Error sending consultation email via nodemailer:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
    };
  }
}
