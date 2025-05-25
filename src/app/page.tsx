'use client'

import ComboBoxExample from '@/components/combo-box-example'
import { Navbar } from '@/components/navigation/navbar'

export default function Home() {
	return (
		<>
			<Navbar />

			<main className='container mx-auto py-8 px-10'>
				<h1 className='text-3xl font-bold'>به اپ دمو خوش آمدید</h1>

				<div className='max-w-[400px] mx-auto'>
					<ComboBoxExample />
				</div>
			</main>
		</>
	)
}
