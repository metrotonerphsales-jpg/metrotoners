declare global {
	namespace NodeJS {
		interface ProcessEnv {
			MAIL_USER: string
			MAIL_PASS: string
			NEXT_PUBLIC_TINA_CLIENT_ID: string
			TINA_TOKEN: string
			TINA_INDEXER_TOKEN: string
		}
	}
}

export {}
