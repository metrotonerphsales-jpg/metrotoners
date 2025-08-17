export type FilterValues = Record<string, Set<string>>
export type SelectionValues = Record<string, Set<string> | undefined>
export type NextJSPageProps = {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
