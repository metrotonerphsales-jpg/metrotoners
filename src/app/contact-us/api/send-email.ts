import nodemailer from 'nodemailer'

export async function sendEmail(
	to: string,
	subject: string,
	html: string,
	cc?: string
) {
	const user = process.env.MAIL_USER
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user,
			pass: process.env.MAIL_PASS,
		},
		tls: {
			rejectUnauthorized: false,
		},
	})
	return await transporter.sendMail({
		from: `Metrotoners <${user}>`,
		to,
		subject,
		html,
		cc,
	})
}
