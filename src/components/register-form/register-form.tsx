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
import { PasswordInput } from './inputs/password-input'
import { SubmitButton } from './submit-button'
import { useMutation } from '@tanstack/react-query'
import { postRegister } from '@/services/auth-services'
import { toast } from 'sonner'
import InputField from '../form-inputs/input-field'

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

	const { mutate: register, isPending } = useMutation({
		mutationFn: postRegister,
		onSuccess: data => {
			toast(data?.message)
		},
		onError: error => {
			toast.error(error.message)
		}
	})

	function onSubmit(values: RegisterRequest) {
		register(values)
	}

	return (
		<div className='w-full max-w-sm'>
			<div className='flex flex-col gap-6'>
				<Card>
					<CardHeader>
						<CardTitle className='text-2xl'>ثبت نام</CardTitle>
						<CardDescription>
							برای ثبت نام ،نام و نام خانوادگی ، ایمیل و رمز عبور خود را وارد
							کنید.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='space-y-8'
							>
								<InputField
									control={form.control}
									name='fullName'
									placeholder='نام'
									label='نام و نام خانوادگی'
								/>

								<EmailInput control={form.control} />

								<PasswordInput control={form.control} />

								<ConfirmPasswordInput control={form.control} />

								<div className='flex justify-end'>
									<SubmitButton disabled={isPending} />
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
