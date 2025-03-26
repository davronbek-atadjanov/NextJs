'use client'

import { Service } from '@/server'
import { useEffect, useState } from 'react'

const ClientPage = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [data, setdata] = useState([])

	useEffect(() => {
		setIsLoading(true)
		Service.getPosts()
			.then(response => setdata(response))
			.finally(() => setIsLoading(false))
	}, [])

	return (
		<div className='container gap-4'>
			<h1 className='text-4xl font-mono py-6'>Client component</h1>
			{isLoading && 'Loadging...'}
			{data && data.map(c => <p key={c.id}>{c.title}</p>)}
		</div>
	)
}

export default ClientPage
