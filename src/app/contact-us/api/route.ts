import { NextResponse } from 'next/server'
import { sendEmail } from './send-email'

export async function POST(request: Request) {
	const data = await request.formData()
	const name = data.get('name')
	const email = data.get('email')
	const subject = data.get('subject')
	const body = data.get('body')

	if (!name || !email || !subject || !body)
		return NextResponse.json({ error: 'Missing form fields!' })

	await sendEmail(
		process.env.MAIL_USER,
		`[WEBSITE] ${subject}`,
		`<p><b>Name:</b> ${name}</p>
		<p><b>Email:</b> <a href="mailto:${email}">${email}</a>
		<br><br>
		<p>${body}</p>`,
		email.toString()
	)

	return NextResponse.json({})
}
