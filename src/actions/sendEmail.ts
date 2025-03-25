// 'use server'
// import { z } from 'zod';
// import nodemailer from 'nodemailer';

// // Validation schema
// const emailSchema = z.object({
//   email: z.string().email(),
//   subject: z.string().min(3).optional(),
//   message: z.string().min(10),
// })

// const transporter = nodemailer.createTransport({
//   host: process.env.MAILTRAP_HOST,
//   port: parseInt(process.env.MAILTRAP_PORT || '2525'),
//   auth: {
//     user: process.env.MAILTRAP_USER,
//     pass: process.env.MAILTRAP_PASS,
//   },
// });

// export async function sendEmail(formData: FormData) {
//   try {
//     // Validate form data
//     const validatedFields = emailSchema.parse({
//       email: formData.get('email'),
//       subject: formData.get('subject'),
//       message: formData.get('message'),
//     })


//     console.log(validatedFields.email);


//     return true
//   } catch (error) {
//     console.error('Failed to send email:', error)
//     return false
//   }
// }