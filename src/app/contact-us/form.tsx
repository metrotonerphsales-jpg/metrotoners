'use client'
import { FormEventHandler, useState } from 'react'
import styles from './contact-us.module.css'
import { useSearchParams } from 'next/navigation'
import { LoadingButton } from '@/components/ui/loading-button'

export function ContactForm() {
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const searchParams = useSearchParams()

	const handleSubmit: FormEventHandler = async e => {
		e.preventDefault()
		setIsLoading(true)
		try {
			const form = e.target as HTMLFormElement

			const data = new FormData(form)
			const name = data.get('name')
			const email = data.get('email')
			const subject = data.get('subject')
			const body = data.get('body')

			if (!name || !email || !subject || !body)
				return setError('Missing field values.')

			const res = await fetch('/contact-us/api', {
				method: 'POST',
				body: data,
			})

			if (!res.ok)
				return setError(
					`An error has occurred. Please try again. ${res.status}`
				)

			const { error } = await res.json()
			if (error) return setError(error)
			form.reset()
			setError(error ?? 'Your query has been sent.')
		} finally {
			setTimeout(() => setIsLoading(false), 3000)
		}
	}

	const clearError = () => setError('')

	return (
		<form className="space-y-4 p-7 sm:p-12" onSubmit={handleSubmit}>
			<h1 className="head-2 text-secondary mb-5">Get in touch with us</h1>
			<div className={styles.control}>
				<label htmlFor="name">Name</label>
				<input
					required
					onChange={clearError}
					type="text"
					name="name"
					id="name"
				/>
			</div>
			<div className={styles.control}>
				<label htmlFor="email">Email</label>
				<input
					required
					onChange={clearError}
					type="email"
					name="email"
					id="email"
				/>
			</div>
			<div className={styles.control}>
				<label htmlFor="subject">Subject</label>
				<input
					required
					onChange={clearError}
					type="text"
					name="subject"
					id="subject"
					defaultValue={searchParams?.get('subject') ?? ''}
				/>
			</div>
			<div className={styles.control}>
				<label htmlFor="body">Body</label>
				<textarea
					required
					onChange={clearError}
					name="body"
					id="body"
					rows={6}
				/>
			</div>
			<p className="h-6 text-red-500">{error}</p>
			<LoadingButton
				type="submit"
				className="btn highlight w-full"
				loading={isLoading}
				loaderClassName="border"
			>
				Send
			</LoadingButton>
		</form>
	)
}
