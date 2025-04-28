'use client'

import { Form } from '@/components/ui/form'
import { type RegisterRequest, registerSchema } from '@/schemas/auth-schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '../ui/card'
import { ConfirmPasswordInput } from './inputs/confirm-password-input'
import { EmailInput } from './inputs/email-input'
import { FullNameInput } from './inputs/full-name-input'
import { PasswordInput } from './inputs/password-input'
import { SubmitButton } from './submit-button'
const RegisterForm = () => {
	const form = useForm<RegisterRequest>({
		resolver: zodResolver(registerSchema),
		mode: 'all',
		defaultValues: {
			fullName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	})

	function onSubmit(values: RegisterRequest) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values)
	}

	return (
		<div className='w-full max-w-sm'>
			<div className='flex flex-col gap-6'>
				<Card>
					<CardHeader>
						<CardTitle className='text-2xl'>ثبت نام</CardTitle>
						<CardDescription>
							برای ثبت نام نام و ناو خانوادگی و ایمیل و پسورد خود را وارد کنید.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-8'
							>
								<FullNameInput control={form.control} />

								<EmailInput control={form.control} />

								<PasswordInput control={form.control} />

								<ConfirmPasswordInput control={form.control} />

								<div className='flex justify-end'>
									<SubmitButton />
								</div>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}

export { RegisterForm }
