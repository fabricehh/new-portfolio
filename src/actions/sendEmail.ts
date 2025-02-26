'use server'
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Validation schema
const emailSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(3).optional(),
  message: z.string().min(10),
})

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: parseInt(process.env.MAILTRAP_PORT || '2525'),
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

export async function sendEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = emailSchema.parse({
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    })

    // Send email
    await transporter.sendMail({
      from: validatedFields.email,
      to: process.env.RECIPIENT_EMAIL,
      subject: validatedFields.subject || 'New Contact Form Message',
      text: validatedFields.message,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #1a73e8;">New Contact Form Message</h2>
          <p style="color: #666; margin-bottom: 20px;">
            <strong>From:</strong> ${validatedFields.email}
          </p>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p style="color: #333; white-space: pre-wrap;">${validatedFields.message}</p>
          </div>
        </div>
      `
    })

    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}