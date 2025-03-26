export const Service = {
	getPosts: async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/pots', {
			next: { revalidate: 3600 },
		})

		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		const data = await response.json()
		return data
	},
}
