import { RegisterForm } from '@/components/register-form/register-form'

export async function generateMetadata() {
	return {
		title: 'ثبت نام'
	}
}

const RegisterPage = () => {
	return (
		<main className='relative mx-auto flex h-svh container items-center justify-center overflow-hidden'>
			<RegisterForm />
		</main>
	)
}

export default RegisterPage
