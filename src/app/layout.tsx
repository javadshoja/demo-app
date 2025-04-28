import type { Metadata } from 'next'
import { Geist, Geist_Mono, Vazirmatn } from 'next/font/google'
import './globals.css'
import ReactQueryProvider from '@/provider/react-query-provider'
import { Toaster } from '@/components/ui/sonner'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const vazirmatn = Vazirmatn({
	variable: '--font-vazirmatn',
	subsets: ['arabic']
})

export const metadata: Metadata = {
	title: 'صفحه اصلی'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='fa' dir='rtl'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${vazirmatn.variable} ${vazirmatn.className} antialiased`}
			>
				<ReactQueryProvider>{children}</ReactQueryProvider>

				<Toaster />
			</body>
		</html>
	)
}
