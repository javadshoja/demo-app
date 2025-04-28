'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
	return (
		<nav className='border-b bg-background px-4 py-3'>
			<div className='container mx-auto flex items-center justify-between'>
				<Link href='/' className='text-xl font-bold'>
					صفحه اصلی
				</Link>
				<div className='flex items-center gap-4'>
					<Button asChild variant='default'>
						<Link href='/register'>ثبت نام</Link>
					</Button>
				</div>
			</div>
		</nav>
	)
}
